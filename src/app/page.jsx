"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["services", "opportunities", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Primary color scheme
  const colors = {
    primary: "from-purple-600 to-indigo-600",
    secondary: "from-indigo-600 to-purple-600",
    accent: "purple-600",
    hover: "purple-700",
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span
                className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
              >
                Ascend
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className={`transition-colors ${
                  activeSection === "services"
                    ? `text-${colors.accent}`
                    : "text-gray-600"
                } hover:text-${colors.accent}`}
              >
                Services
              </Link>
              <Link
                href="#opportunities"
                className={`transition-colors ${
                  activeSection === "opportunities"
                    ? `text-${colors.accent}`
                    : "text-gray-600"
                } hover:text-${colors.accent}`}
              >
                Opportunities
              </Link>
              <Link
                href="#about"
                className={`transition-colors ${
                  activeSection === "about"
                    ? `text-${colors.accent}`
                    : "text-gray-600"
                } hover:text-${colors.accent}`}
              >
                About
              </Link>
              <Link
                href="#contact"
                className={`transition-colors ${
                  activeSection === "contact"
                    ? `text-${colors.accent}`
                    : "text-gray-600"
                } hover:text-${colors.accent}`}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className={`bg-gradient-to-r ${colors.primary} text-white px-6 py-2 rounded-lg hover:opacity-90 transition transform hover:scale-105`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Shape Your Future with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empowering students to make informed educational and career
              choices aligned with their passions and talents.
            </p>
            <button
              className={`bg-gradient-to-r ${colors.primary} text-white px-8 py-3 rounded-lg transition transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto`}
            >
              Explore Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "School Search",
                description:
                  "Find your perfect educational match with our comprehensive institution database.",
              },
              {
                icon: BookOpen,
                title: "Career Exploration",
                description:
                  "Discover and explore career paths that align with your passions and skills.",
              },
              {
                icon: Users,
                title: "Mentorship",
                description:
                  "Connect with experienced professionals who can guide your journey.",
              },
              {
                icon: DollarSign,
                title: "Financial Aid",
                description:
                  "Access scholarships and financial resources to support your education.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl transition-all duration-300 shadow-lg bg-gradient-to-br from-white to-purple-50 hover:from-purple-50 hover:to-white border border-gray-200 hover:shadow-xl transform hover:-translate-y-2"
              >
                <service.icon
                  className={`w-12 h-12 text-${colors.accent} mb-4 transform transition-transform group-hover:scale-110`}
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Get in Touch
          </h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side - Contact Information */}
              <div className="p-6 bg-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email Us</p>
                      <p className="text-sm text-gray-600">
                        contact@ascend.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Call Us</p>
                      <p className="text-sm text-gray-600">+ (250) 78888-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Visit Us</p>
                      <p className="text-sm text-gray-600">
                        Makuza building, Kigali city
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ascend</h3>
            <p className="text-sm">
              Empowering educational and career decisions through technology and
              guidance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  School Search
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Career Exploration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Financial Aid
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Ascend. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
