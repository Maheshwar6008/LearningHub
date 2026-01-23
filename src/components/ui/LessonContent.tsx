"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Award,
  ArrowRight,
  // Architecture diagram icons
  Map,
  Lock,
  ShieldAlert,
  ClipboardCheck,
  Search,
  Tags,
  Shield,
  Activity,
  Archive,
  Package,
  PackageCheck,
  PackagePlus,
  Wrench,
  Database,
  Brain,
  Code,
  FileText,
  Calculator,
  Ruler,
  Gauge,
  Filter,
  Zap,
  Bell,
  FilePlus,
  Scan,
  MapPin,
  Users,
  Globe,
  Sparkles,
  Edit,
  Send,
  Inbox,
  MessageSquare as MessageIcon,
  RefreshCw,
  Ban,
  Info,
  UserCheck,
  Upload,
  FileSearch,
  Target,
  Layers,
  Laptop,
  Download,
  List,
  GitBranch,
  Trash2,
  BarChart3,
  Sword,
  Link as LinkIcon,
  Settings,
  BookOpen as BookOpenIcon,
} from "lucide-react";
import { Lesson, Module } from "@/lib/data/course-data";
import { useCourse } from "@/lib/course-context";

const iconMap: Record<string, React.ElementType> = {
  Map, Lock, ShieldAlert, ClipboardCheck, Search, Tags, Shield, Activity, Archive,
  Package, PackageCheck, PackagePlus, Wrench, Database, Brain, Code, FileText,
  Calculator, Ruler, Gauge, Filter, Zap, Bell, FilePlus, Scan, MapPin, Users,
  Globe, Sparkles, Edit, Send, Inbox, MessageSquare: MessageIcon, RefreshCw, Ban,
  Info, UserCheck, Upload, FileSearch, Target, Layers, Laptop, Download, List,
  GitBranch, CheckCircle, Trash2, BarChart3, Clock, Sword, Link: LinkIcon,
  Settings, BookOpen: BookOpenIcon, AlertTriangle, Triage: Activity,
};

interface LessonContentProps {
  module: Module;
  lesson: Lesson;
}

export function LessonContent({ module, lesson }: LessonContentProps) {
  const {
    trainerMode,
    completedLessons,
    markLessonComplete,
    getNextLesson,
    getPreviousLesson,
    setCurrentLesson,
  } = useCourse();

  const isComplete = completedLessons.has(lesson.id);
  const nextLesson = getNextLesson();
  const previousLesson = getPreviousLesson();

  // Set current lesson on mount
  React.useEffect(() => {
    setCurrentLesson(module.slug, lesson.slug);
  }, [module.slug, lesson.slug, setCurrentLesson]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Lesson Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <span>{module.title}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-400">{lesson.title}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {lesson.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{lesson.duration}</span>
          </div>
          
          <button
            onClick={() => markLessonComplete(lesson.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isComplete
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            <CheckCircle className={`w-4 h-4 ${isComplete ? "fill-current" : ""}`} />
            {isComplete ? "Completed" : "Mark Complete"}
          </button>
        </div>
      </motion.div>

      {/* Trainer Notes (visible when trainer mode is on) */}
      <AnimatePresence>
        {trainerMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-purple-400">Trainer Notes</h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Talking Points</h4>
                  <ul className="space-y-2">
                    {lesson.trainerNotes.talkingPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <ArrowRight className="w-3 h-3 mt-1 text-purple-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Real Examples</h4>
                  <ul className="space-y-2">
                    {lesson.trainerNotes.realExamples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <Lightbulb className="w-3 h-3 mt-1 text-yellow-400 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Questions to Ask</h4>
                  <ul className="space-y-2">
                    {lesson.trainerNotes.questionsToAsk.map((question, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <HelpCircle className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-8"
      >
        {/* Explanation Section */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Understanding the Concept
          </h2>
          <div className="space-y-4">
            {lesson.content.explanation.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Key Points */}
        <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Key Points
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {lesson.content.keyPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Architecture Diagram */}
        {lesson.content.architecture && (
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              {lesson.content.architecture.title}
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 overflow-x-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {lesson.content.architecture.steps.map((step, index) => {
                  const IconComponent = iconMap[step.icon || "Shield"] || Shield;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex flex-col items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                          <span className="text-xs text-gray-400 mt-1">Step {step.step}</span>
                        </div>
                      </div>
                      <div className="max-w-[140px]">
                        <p className="text-sm font-medium text-white">{step.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{step.description}</p>
                      </div>
                      {index < lesson.content.architecture!.steps.length - 1 && (
                        <ChevronRight className="w-5 h-5 text-gray-600 hidden md:block" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Why It Matters */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Why This Matters in Real Organizations
          </h2>
          <p className="text-gray-300 leading-relaxed">{lesson.content.whyItMatters}</p>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            Common Mistakes to Avoid
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {lesson.content.commonMistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-orange-500/5 border border-orange-500/20 rounded-lg p-3"
              >
                <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{mistake}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interview & Exam Tips */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Interview Tips */}
          <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Interview Tips
            </h2>
            <ul className="space-y-3">
              {lesson.content.interviewTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Exam Tips */}
          <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-400" />
              Exam Tips (SC-401)
            </h2>
            <ul className="space-y-3">
              {lesson.content.examTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 pt-8 border-t border-gray-800"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousLesson ? (
            <Link
              href={`/course/${previousLesson.module.slug}/${previousLesson.lesson.slug}`}
              className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-xs text-gray-400">Previous</p>
                <p className="text-sm font-medium text-white">{previousLesson.lesson.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/course/${nextLesson.module.slug}/${nextLesson.lesson.slug}`}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-right">
                <p className="text-xs text-gray-400">Next</p>
                <p className="text-sm font-medium text-white">{nextLesson.lesson.title}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            </Link>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <Award className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-sm font-medium text-green-400">Course Complete!</p>
                <p className="text-xs text-gray-400">You&apos;ve finished all lessons</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Keyboard shortcuts hint */}
      <div className="mt-8 text-center text-xs text-gray-500">
        <span className="inline-flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400">←</kbd>
          <span>Previous</span>
          <span className="mx-2">|</span>
          <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400">→</kbd>
          <span>Next</span>
          <span className="mx-2">|</span>
          <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400">H</kbd>
          <span>Home</span>
        </span>
      </div>
    </div>
  );
}
