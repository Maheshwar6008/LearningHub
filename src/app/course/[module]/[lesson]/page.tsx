import { notFound } from "next/navigation";
import { courseData } from "@/lib/data/course-data";
import { CourseLayout } from "@/components/layout/CourseLayout";
import { LessonContent } from "@/components/ui/LessonContent";

interface PageProps {
  params: Promise<{
    module: string;
    lesson: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { module: string; lesson: string }[] = [];

  courseData.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      paths.push({
        module: module.slug,
        lesson: lesson.slug,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { module: moduleSlug, lesson: lessonSlug } = await params;
  
  const module = courseData.modules.find((m) => m.slug === moduleSlug);
  const lesson = module?.lessons.find((l) => l.slug === lessonSlug);

  if (!module || !lesson) {
    return {
      title: "Lesson Not Found",
    };
  }

  return {
    title: `${lesson.title} | ${module.title} | ${courseData.title}`,
    description: lesson.content.explanation[0],
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { module: moduleSlug, lesson: lessonSlug } = await params;
  
  const module = courseData.modules.find((m) => m.slug === moduleSlug);
  const lesson = module?.lessons.find((l) => l.slug === lessonSlug);

  if (!module || !lesson) {
    notFound();
  }

  return (
    <CourseLayout>
      <LessonContent module={module} lesson={lesson} />
    </CourseLayout>
  );
}
