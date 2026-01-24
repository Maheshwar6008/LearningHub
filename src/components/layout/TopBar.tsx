"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Home,
  BookOpen,
} from "lucide-react";
import { useCourse } from "@/lib/course-context";

export function TopBar() {
  const {
    currentModule,
    currentLesson,
    trainerMode,
    toggleTrainerMode,
    getNextLesson,
    getPreviousLesson,
    sidebarOpen,
    setSidebarOpen,
  } = useCourse();

  const nextLesson = getNextLesson();
  const previousLesson = getPreviousLesson();

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-80 h-16 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-30 flex items-center px-4 gap-4">
      {/* Menu toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Breadcrumb */}
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
        >
          <Home className="w-4 h-4" />
        </Link>
        
        {currentModule && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
            <span className="text-gray-400 text-sm truncate hidden sm:block">
              {currentModule.title}
            </span>
          </>
        )}
        
        {currentLesson && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
            <span className="text-white text-sm font-medium truncate">
              {currentLesson.title}
            </span>
          </>
        )}
      </div>

      {/* Navigation and trainer mode */}
      <div className="flex items-center gap-2">
        {/* Previous/Next navigation */}
        {previousLesson && (
          <Link
            href={`/course/${previousLesson.module.slug}/${previousLesson.lesson.slug}`}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
            title={`Previous: ${previousLesson.lesson.title}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
        )}
        
        {nextLesson && (
          <Link
            href={`/course/${nextLesson.module.slug}/${nextLesson.lesson.slug}`}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
            title={`Next: ${nextLesson.lesson.title}`}
          >
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}

        {/* Separator */}
        <div className="w-px h-6 bg-gray-700 mx-1" />

        {/* Trainer mode toggle */}
        <motion.button
          onClick={toggleTrainerMode}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            trainerMode
              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
          }`}
        >
          {trainerMode ? (
            <>
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Trainer Mode</span>
            </>
          ) : (
            <>
              <EyeOff className="w-4 h-4" />
              <span className="hidden sm:inline">Trainer Mode</span>
            </>
          )}
        </motion.button>
      </div>
    </header>
  );
}
