"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { courseData, Module, Lesson } from "@/lib/data/course-data";

interface CourseContextType {
  currentModule: Module | null;
  currentLesson: Lesson | null;
  setCurrentLesson: (moduleSlug: string, lessonSlug: string) => void;
  trainerMode: boolean;
  toggleTrainerMode: () => void;
  completedLessons: Set<string>;
  markLessonComplete: (lessonId: string) => void;
  getNextLesson: () => { module: Module; lesson: Lesson } | null;
  getPreviousLesson: () => { module: Module; lesson: Lesson } | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: { module: Module; lesson: Lesson }[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [currentLesson, setCurrentLessonState] = useState<Lesson | null>(null);
  const [trainerMode, setTrainerMode] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Load completed lessons from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("completedLessons");
      if (saved) {
        setCompletedLessons(new Set(JSON.parse(saved)));
      }
      const savedTrainerMode = localStorage.getItem("trainerMode");
      if (savedTrainerMode) {
        setTrainerMode(JSON.parse(savedTrainerMode));
      }
    }
  }, []);

  // Save completed lessons to localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && completedLessons.size > 0) {
      localStorage.setItem("completedLessons", JSON.stringify([...completedLessons]));
    }
  }, [completedLessons]);

  // Save trainer mode to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("trainerMode", JSON.stringify(trainerMode));
    }
  }, [trainerMode]);

  const setCurrentLesson = (moduleSlug: string, lessonSlug: string) => {
    const module = courseData.modules.find((m) => m.slug === moduleSlug);
    if (module) {
      const lesson = module.lessons.find((l) => l.slug === lessonSlug);
      if (lesson) {
        setCurrentModule(module);
        setCurrentLessonState(lesson);
      }
    }
  };

  const toggleTrainerMode = () => {
    setTrainerMode((prev) => !prev);
  };

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  const getAllLessons = (): { module: Module; lesson: Lesson }[] => {
    const lessons: { module: Module; lesson: Lesson }[] = [];
    courseData.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        lessons.push({ module, lesson });
      });
    });
    return lessons;
  };

  const getNextLesson = (): { module: Module; lesson: Lesson } | null => {
    if (!currentModule || !currentLesson) return null;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(
      (item) => item.lesson.id === currentLesson.id
    );
    if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
      return allLessons[currentIndex + 1];
    }
    return null;
  };

  const getPreviousLesson = (): { module: Module; lesson: Lesson } | null => {
    if (!currentModule || !currentLesson) return null;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(
      (item) => item.lesson.id === currentLesson.id
    );
    if (currentIndex > 0) {
      return allLessons[currentIndex - 1];
    }
    return null;
  };

  // Search functionality
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: { module: Module; lesson: Lesson }[] = [];

    courseData.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        const searchText = `
          ${lesson.title}
          ${lesson.content.explanation.join(" ")}
          ${lesson.content.keyPoints.join(" ")}
          ${lesson.content.whyItMatters}
        `.toLowerCase();

        if (searchText.includes(query)) {
          results.push({ module, lesson });
        }
      });
    });

    return results;
  }, [searchQuery]);

  return (
    <CourseContext.Provider
      value={{
        currentModule,
        currentLesson,
        setCurrentLesson,
        trainerMode,
        toggleTrainerMode,
        completedLessons,
        markLessonComplete,
        getNextLesson,
        getPreviousLesson,
        searchQuery,
        setSearchQuery,
        searchResults,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
}
