'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Search,
  Star,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Zap,
  Target,
  Brain,
  Shield,
  Trophy,
  FileText,
  PenTool,
  Microscope,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const chapters = [
  {
    id: 'understanding-rubric',
    title: 'Understanding the STEM Rubric',
    description: 'Master Blue, High Blue, Green, and Yellow levels',
    icon: Target,
    pages: 24,
    level: 'Essential',
    color: 'from-purple-500 to-pink-500',
    topics: ['Blue', 'High Blue', 'Green', 'Yellow', 'Evaluator mindset', 'Common mistakes'],
  },
  {
    id: 'engineering-design-process',
    title: 'Engineering Design Process',
    description: 'Complete guide to every EDP stage with real examples',
    icon: Zap,
    pages: 32,
    level: 'Core',
    color: 'from-blue-500 to-cyan-500',
    topics: ['Problem Statement', 'Research', 'Hypothesis', 'Variables', 'Methodology', 'Testing'],
  },
  {
    id: 'personal-reflection',
    title: 'Personal Reflection Mastery',
    description: 'Learn to reflect, not just describe. High Blue formulas.',
    icon: Brain,
    pages: 28,
    level: 'Advanced',
    color: 'from-pink-500 to-rose-500',
    topics: ['Reflection vs Description', 'Deep thinking', 'Self-assessment', 'Growth mindset'],
  },
  {
    id: 'academic-vocabulary',
    title: 'Academic Vocabulary Bible',
    description: '1000+ words, collocations, power verbs, and connectors',
    icon: BookOpen,
    pages: 45,
    level: 'Reference',
    color: 'from-green-500 to-emerald-500',
    topics: ['CEFR B2-C2', 'STEM terminology', 'Academic phrases', 'Sentence patterns'],
  },
  {
    id: 'poster-rubric',
    title: 'Capstone Poster Rubric',
    description: 'The real rubric — 8 sections, 4 levels, 40% of your project grade',
    icon: FileText,
    pages: 28,
    level: 'Essential',
    color: 'from-blue-600 to-indigo-600',
    topics: ['Abstract', 'Introduction', 'Materials & Methods', 'Results', 'Analysis', 'Conclusions', 'Recommendation', 'APA Citation'],
  },
  {
    id: 'research-methodology',
    title: 'Research Skills & Sources',
    description: 'Google Scholar, IEEE, ScienceDirect, and citation mastery',
    icon: Microscope,
    pages: 20,
    level: 'Core',
    color: 'from-indigo-500 to-purple-500',
    topics: ['Literature review', 'Source evaluation', 'Citation styles', 'Research databases'],
  },
  {
    id: 'writing-formulas',
    title: 'My Journal Formula',
    description: 'Step-by-step templates for every journal section',
    icon: PenTool,
    pages: 35,
    level: 'Advanced',
    color: 'from-red-500 to-pink-500',
    topics: ['Introduction formulas', 'Conclusion patterns', 'Body paragraphs', 'Transitions'],
  },
  {
    id: 'common-mistakes',
    title: '100 Common Mistakes to Avoid',
    description: "Learn from others' errors to secure your High Blue",
    icon: Shield,
    pages: 18,
    level: 'Essential',
    color: 'from-yellow-500 to-red-500',
    topics: ['Grammar errors', 'Structure mistakes', 'Content gaps', 'Authenticity issues'],
  },
  {
    id: 'ai-prompts',
    title: 'AI Prompts for STEM Journals',
    description: 'ChatGPT, Gemini, and Claude prompts for better writing',
    icon: Sparkles,
    pages: 15,
    level: 'Modern',
    color: 'from-cyan-500 to-blue-500',
    topics: ['Writing assistance', 'Research help', 'Editing prompts', 'Ethics of AI use'],
  },
  {
    id: 'model-answers',
    title: 'Real Journal Q&A',
    description: 'Actual questions from STEM school exams with Blue-level answers',
    icon: Trophy,
    pages: 16,
    level: 'Reference',
    color: 'from-amber-500 to-orange-500',
    topics: ['Team Collaboration', 'EDP answers', 'Learning Transfer', 'Reflection answers'],
  },
  {
    id: 'practice-tests',
    title: '5 Practice Tests',
    description: '5 full tests built from real STEM school exam questions',
    icon: GraduationCap,
    pages: 20,
    level: 'Reference',
    color: 'from-green-500 to-teal-500',
    topics: ['Water capstone', 'Energy capstone', 'Recycling capstone', 'Biomimicry capstone'],
  },
]

const quickLinks = [
  { title: 'Vocabulary Search', icon: Search, href: '/bible/vocabulary' },
  { title: 'Quick Checklist', icon: FileText, href: '/bible/checklist' },
  { title: 'Sentence Builder', icon: PenTool, href: '/bible/sentence-builder' },
  { title: 'Practice Quiz', icon: GraduationCap, href: '/bible/quiz' },
]

const levels = ['All', 'Essential', 'Core', 'Advanced', 'Reference', 'Modern']

export default function JournalBiblePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filteredChapters = chapters.filter((chapter) => {
    const matchesSearch =
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLevel = selectedLevel === 'All' || chapter.level === selectedLevel
    return matchesSearch && matchesLevel
  })

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-pink-900/50 p-12 mb-12 border border-white/10"
        >
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <BookOpen className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-5xl font-bold gradient-text mb-2">
                  The Ultimate STEM Journal Bible
                </h1>
                <p className="text-xl text-muted-foreground">
                  Grade 11 Ultimate Edition — Your Complete High Blue Guide
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              This isn&apos;t just a guide. It&apos;s your second brain for the entire school year.
              Master every aspect of STEM journal writing with deep explanations, real examples,
              and proven formulas that guarantee High Blue results.
            </p>
            <div className="flex space-x-4">
              <Link href="/bible/chapters/understanding-rubric">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Reading
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="glass">
                <Star className="w-5 h-5 mr-2" />
                Bookmark Guide
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search chapters, topics, vocabulary..."
              className="w-full pl-10 pr-4 py-2 rounded-lg glass text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedLevel(level)}
                className={selectedLevel === level ? 'bg-purple-600' : 'glass'}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <link.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="font-medium">{link.title}</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Chapters Grid */}
        <h2 className="text-2xl font-bold mb-6">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/bible/chapters/${chapter.id}`}>
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer h-full group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <chapter.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-muted-foreground">
                        {chapter.pages} pages
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-purple-400 transition-colors">
                      {chapter.title}
                    </CardTitle>
                    <CardDescription>{chapter.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chapter.topics.slice(0, 4).map((topic) => (
                        <span key={topic} className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                          {topic}
                        </span>
                      ))}
                      {chapter.topics.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground">
                          +{chapter.topics.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-purple-400 group-hover:translate-x-2 transition-transform">
                      <span>Read Chapter</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Pages', value: '300+', icon: BookOpen },
            { label: 'Chapters', value: '12', icon: FileText },
            { label: 'Practice Tests', value: '5', icon: Sparkles },
            { label: 'Model Answers', value: '16', icon: Trophy },
          ].map((stat, index) => (
            <Card key={index} className="glass border-white/10 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
