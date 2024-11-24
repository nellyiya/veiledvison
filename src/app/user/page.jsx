"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  School,
  GraduationCap,
  BookOpen,
  Users,
  BrainCircuit,
  Sun,
  Moon,
  Languages,
} from "lucide-react";

const UserDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  // Apply theme class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Language translations
  const translations = {
    en: {
      search_schools: "Search Schools...",
      search_careers: "Search Careers...",
      profile: "Profile",
      universities: "Universities",
      scholarships: "Scholarships",
      career_assessment: "Career Assessment",
      mentors: "Mentors",
      featured_colleges: "Featured Colleges",
      available_scholarships: "Available Scholarships",
      govt_scholarship: "Government Scholarship 2024",
      up_to: "Up to",
      start_assessment: "Start Assessment",
      available_mentors: "Available Mentors",
      career_counselor: "Career Counselor",
      academic_advisor: "Academic Advisor",
      ai_career_text:
        "Discover your ideal career path using our AI-powered assessment",
    },
    rw: {
      search_schools: "Shakisha Amashuri...",
      search_careers: "Shakisha Imyuga...",
      profile: "Umwirondoro",
      universities: "Amashuri Makuru",
      scholarships: "Buruse",
      career_assessment: "Isuzuma ry'Umwuga",
      mentors: "Abajyanama",
      featured_colleges: "Amashuri Makuru Meza",
      available_scholarships: "Buruse Zihari",
      govt_scholarship: "Buruse ya Leta 2024",
      up_to: "Kugeza kuri",
      start_assessment: "Tangira Isuzuma",
      available_mentors: "Abajyanama Bahari",
      career_counselor: "Umujyanama w'Imyuga",
      academic_advisor: "Umujyanama w'Amasomo",
      ai_career_text: "Menya umwuga ukwiye ukoresheje ikoranabuhanga ryacu",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 py-4 md:py-0">
            {/* Logo */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
                Ascend
              </h1>
            </div>

            {/* Search Bars */}
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-0 md:px-8 space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder={t.search_schools}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder={t.search_careers}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "rw" : "en")}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700"
              >
                <Languages className="w-5 h-5" />
              </button>

              {/* Profile */}
              <button className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700">
                <User className="w-5 h-5" />
                <span>{t.profile}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 md:space-x-8 h-12 whitespace-nowrap">
            <button className="flex items-center space-x-2 px-4 hover:bg-indigo-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300">
              <School className="w-4 h-4" />
              <span>{t.universities}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 hover:bg-indigo-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300">
              <GraduationCap className="w-4 h-4" />
              <span>{t.scholarships}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 hover:bg-indigo-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300">
              <BrainCircuit className="w-4 h-4" />
              <span>{t.career_assessment}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 hover:bg-indigo-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300">
              <Users className="w-4 h-4" />
              <span>{t.mentors}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Colleges Card */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <School className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.featured_colleges}
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-slate-700 rounded flex items-center justify-center">
                  <School className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Carnegie Mellon University Africa
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kigali, Rwanda
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                    Ranked #1 in Rwanda
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-slate-700 rounded flex items-center justify-center">
                  <School className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    University of Kigali
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kigali, Rwanda
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                    Ranked #3 in Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.available_scholarships}
              </h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg border border-indigo-100 dark:border-slate-600">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {t.govt_scholarship}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.up_to} RWF 2,500,000
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg border border-indigo-100 dark:border-slate-600">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  STEM Excellence Scholarship
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.up_to} RWF 1,500,000
                </p>
              </div>
            </div>
          </div>

          {/* AI Career Assessment Card */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.career_assessment}
              </h2>
            </div>
            <div className="text-center py-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t.ai_career_text}
              </p>
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                {t.start_assessment}
              </button>
            </div>
          </div>

          {/* Mentors Card */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.available_mentors}
              </h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg border border-indigo-100 dark:border-slate-600">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Jane Doe
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.career_counselor}
                </p>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-slate-700 rounded-lg border border-indigo-100 dark:border-slate-600">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  John Smith
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.academic_advisor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
