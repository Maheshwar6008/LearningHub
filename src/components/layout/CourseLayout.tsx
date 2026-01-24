"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { CourseProvider, useCourse } from "@/lib/course-context";
import { courseData } from "@/lib/data/course-data";

function KeyboardNavigation() {
  const router = useRouter();
  const { getNextLesson, getPreviousLesson, currentModule, currentLesson } = useCourse();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Arrow right or 'n' for next lesson
      if (e.key === "ArrowRight" || e.key === "n") {
        const next = getNextLesson();
        if (next) {
          router.push(`/course/${next.module.slug}/${next.lesson.slug}`);
        }
      }

      // Arrow left or 'p' for previous lesson
      if (e.key === "ArrowLeft" || e.key === "p") {
        const prev = getPreviousLesson();
        if (prev) {
          router.push(`/course/${prev.module.slug}/${prev.lesson.slug}`);
        }
      }

      // 'h' for home
      if (e.key === "h") {
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, getNextLesson, getPreviousLesson, currentModule, currentLesson]);

  return null;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { sidebarOpen } = useCourse();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <TopBar />
      <main
        className={`pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "lg:pl-80" : "pl-0"
        }`}
      >
        {children}
      </main>
      <KeyboardNavigation />
    </div>
  );
}

export function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <CourseProvider>
      <LayoutContent>{children}</LayoutContent>
    </CourseProvider>
  );
}
