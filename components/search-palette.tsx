'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Search, BookOpen, Calendar, FileText, X, ArrowRight, Hash } from 'lucide-react'

// ── Search index ───────────────────────────────────────────────────────────
const SEARCH_INDEX = [
  // Pages
  { type: 'page', label: 'Dashboard', desc: 'Home overview', href: '/dashboard', icon: 'home', keywords: 'dashboard home overview' },
  { type: 'page', label: 'Journal Bible', desc: 'All chapters & practice tests', href: '/bible', icon: 'bible', keywords: 'bible journal chapters guide' },
  { type: 'page', label: 'Capstone Planner', desc: '13-week semester timeline', href: '/planner', icon: 'planner', keywords: 'planner calendar week timeline semester' },
  { type: 'page', label: 'Feedback', desc: 'Send ideas or suggestions', href: '/feedback', icon: 'feedback', keywords: 'feedback contact ideas suggestions' },

  // Bible chapters
  { type: 'chapter', label: 'Understanding the Rubric', desc: 'Blue, Green, Yellow, Red levels explained', href: '/bible/chapters/understanding-rubric', icon: 'chapter', keywords: 'rubric blue green yellow red levels criteria evaluation score' },
  { type: 'chapter', label: 'Engineering Design Process', desc: 'EDP — all 6 steps with real examples', href: '/bible/chapters/engineering-design-process', icon: 'chapter', keywords: 'EDP engineering design process steps define research hypothesis prototype test evaluate' },
  { type: 'chapter', label: 'Personal Reflection', desc: 'Reflection vs description — Blue formulas', href: '/bible/chapters/personal-reflection', icon: 'chapter', keywords: 'reflection personal growth blue formula description what so what now what' },
  { type: 'chapter', label: 'Academic Vocabulary', desc: '1000+ words, power verbs, connectors', href: '/bible/chapters/academic-vocabulary', icon: 'chapter', keywords: 'vocabulary words academic verbs connectors language grammar writing' },
  { type: 'chapter', label: 'Capstone Poster Rubric', desc: '8 sections, 4 levels, 40% of grade', href: '/bible/chapters/poster-rubric', icon: 'chapter', keywords: 'poster rubric abstract introduction materials methods results analysis conclusions recommendation citation layout' },
  { type: 'chapter', label: 'Research Skills & Sources', desc: 'Trusted sources, prior solutions, learning transfer', href: '/bible/chapters/research-methodology', icon: 'chapter', keywords: 'research sources trusted prior solution learning transfer google scholar IEEE CDC' },
  { type: 'chapter', label: 'My Journal Formula', desc: 'Step-by-step templates for every section', href: '/bible/chapters/writing-formulas', icon: 'chapter', keywords: 'writing formula template journal entry introduction conclusion paragraph' },
  { type: 'chapter', label: '100 Common Mistakes', desc: 'Errors that drop Blue to Yellow', href: '/bible/chapters/common-mistakes', icon: 'chapter', keywords: 'mistakes errors yellow common avoid drop lose marks' },
  { type: 'chapter', label: 'AI Prompts for STEM', desc: 'ChatGPT & Gemini prompts for better writing', href: '/bible/chapters/ai-prompts', icon: 'chapter', keywords: 'AI artificial intelligence chatgpt gemini prompts writing help' },
  { type: 'chapter', label: 'Real Journal Q&A', desc: 'Actual STEM exam questions + Blue answers', href: '/bible/chapters/model-answers', icon: 'chapter', keywords: 'model answers real questions exam journal QA collaboration EDP reflection' },
  { type: 'chapter', label: '5 Practice Tests', desc: 'Full tests from real STEM school exams', href: '/bible/chapters/practice-tests', icon: 'chapter', keywords: 'practice test water energy recycling biomimicry mixed exam' },

  // Planner weeks
  { type: 'week', label: 'Week 1 — Present & Justify', desc: 'Grand Challenges, team formation, poster design', href: '/planner', icon: 'week', keywords: 'week 1 grand challenge team formation poster design present justify' },
  { type: 'week', label: 'Week 2 — Research & Prior Solutions', desc: 'Research notes, prior solutions, references', href: '/planner', icon: 'week', keywords: 'week 2 research prior solutions references other solutions tried' },
  { type: 'week', label: 'Week 3 — Solution & Design Requirements', desc: 'Select solution, design requirements, introduction', href: '/planner', icon: 'week', keywords: 'week 3 solution design requirements selection introduction abstract' },
  { type: 'week', label: 'Week 4 — Prototype Selection', desc: 'Prototype design, materials, budget, review panel', href: '/planner', icon: 'week', keywords: 'week 4 prototype selection materials methods budget panel' },
  { type: 'week', label: 'Week 5 — Build & Test Plan', desc: 'Create test plan, build prototype', href: '/planner', icon: 'week', keywords: 'week 5 test plan build prototype safety' },
  { type: 'week', label: 'Week 7 — Data Collection', desc: 'Implement test plan, collect data, revise prototype', href: '/planner', icon: 'week', keywords: 'week 7 data collection measurement precision results' },
  { type: 'week', label: 'Week 10 — Analysis & Evaluation', desc: 'Analyse data, recommendations, learning outcomes', href: '/planner', icon: 'week', keywords: 'week 10 analysis evaluation reflection recommendations learning outcomes' },
  { type: 'week', label: 'Week 11 — Finalise Everything', desc: 'Final poster, portfolio, prototype review', href: '/planner', icon: 'week', keywords: 'week 11 finalise review APA citation bibliography' },
  { type: 'week', label: 'Exhibition', desc: 'Weeks 14–15 — showcase your work', href: '/planner', icon: 'week', keywords: 'exhibition showcase capstone final week 12 13 14' },

  // Topics
  { type: 'topic', label: 'What is Blue level?', desc: 'The highest rubric level explained', href: '/bible/chapters/understanding-rubric', icon: 'topic', keywords: 'blue level distinguished high score best' },
  { type: 'topic', label: 'How to write a reflection', desc: 'WHAT → SO WHAT → NOW WHAT formula', href: '/bible/chapters/personal-reflection', icon: 'topic', keywords: 'how write reflection formula personal growth' },
  { type: 'topic', label: 'Prior solution formula', desc: 'Name + strength + weakness + how it changed your design', href: '/bible/chapters/research-methodology', icon: 'topic', keywords: 'prior solution strength weakness formula EDP' },
  { type: 'topic', label: 'APA citation format', desc: 'How to cite sources correctly', href: '/bible/chapters/poster-rubric', icon: 'topic', keywords: 'APA citation reference format bibliography sources' },
  { type: 'topic', label: 'Design requirements', desc: 'Measurable criteria with numbers and units', href: '/bible/chapters/engineering-design-process', icon: 'topic', keywords: 'design requirements measurable testable units criteria' },
  { type: 'topic', label: 'Learning Transfer', desc: 'Connect class subjects to your capstone', href: '/bible/chapters/research-methodology', icon: 'topic', keywords: 'learning transfer subject physics biology chemistry math connect capstone' },
  { type: 'topic', label: 'Poster sections', desc: 'All 8 poster sections and their weights', href: '/bible/chapters/poster-rubric', icon: 'topic', keywords: 'poster sections abstract introduction materials results analysis conclusions recommendation citation' },
  { type: 'topic', label: 'Team collaboration', desc: 'Role, conflict, what you learned — Blue formula', href: '/bible/chapters/model-answers', icon: 'topic', keywords: 'team collaboration role conflict challenge blue formula' },
]

type ResultItem = typeof SEARCH_INDEX[number]

function getIcon(icon: string) {
  switch (icon) {
    case 'bible':
    case 'chapter': return <BookOpen className="w-4 h-4" />
    case 'planner':
    case 'week':    return <Calendar className="w-4 h-4" />
    case 'topic':   return <Hash className="w-4 h-4" />
    default:        return <FileText className="w-4 h-4" />
  }
}

function getBadgeStyle(type: string) {
  switch (type) {
    case 'chapter': return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    case 'week':    return 'bg-pink-500/20 text-pink-300 border-pink-500/30'
    case 'topic':   return 'bg-teal-500/20 text-teal-300 border-teal-500/30'
    default:        return 'bg-white/10 text-muted-foreground border-white/15'
  }
}

function score(item: ResultItem, q: string): number {
  const lq = q.toLowerCase()
  const title = item.label.toLowerCase()
  const kw = item.keywords.toLowerCase()
  const desc = item.desc.toLowerCase()
  if (title === lq) return 100
  if (title.startsWith(lq)) return 80
  if (title.includes(lq)) return 60
  if (kw.includes(lq)) return 40
  if (desc.includes(lq)) return 20
  // partial word match
  const words = lq.split(' ').filter(Boolean)
  const matches = words.filter(w => title.includes(w) || kw.includes(w)).length
  return matches > 0 ? matches * 15 : 0
}

export function SearchPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const results: ResultItem[] = query.trim().length === 0
    ? SEARCH_INDEX.slice(0, 8)
    : SEARCH_INDEX
        .map(item => ({ item, s: score(item, query.trim()) }))
        .filter(x => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 10)
        .map(x => x.item)

  const openPalette = useCallback(() => { setOpen(true); setQuery(''); setActiveIdx(0) }, [])
  const closePalette = useCallback(() => { setOpen(false); setQuery('') }, [])

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openPalette() }
      if (e.key === 'Escape') closePalette()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [openPalette, closePalette])

  // Auto-focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // Arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && results[activeIdx]) {
      closePalette()
      window.location.href = results[activeIdx].href
    }
  }

  // Reset active idx when results change
  useEffect(() => { setActiveIdx(0) }, [query])

  return (
    <>
      {/* Trigger — replaces the static search bar */}
      <button
        onClick={openPalette}
        className="hidden lg:flex items-center flex-1 max-w-md mx-6"
      >
        <div className="relative w-full glass rounded-full px-4 py-2 flex items-center gap-2 hover:ring-2 hover:ring-purple-500/40 transition-all cursor-pointer">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground flex-1 text-left">Search chapters, topics, weeks...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] text-muted-foreground/60 border border-white/10 rounded px-1.5 py-0.5">
            Ctrl K
          </kbd>
        </div>
      </button>

      {/* Palette overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
              onClick={closePalette}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="fixed top-[15vh] left-1/2 -translate-x-1/2 z-[9991] w-[calc(100vw-2rem)] max-w-xl"
            >
              <div
                className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                style={{ background: 'rgba(12,4,24,0.97)', backdropFilter: 'blur(24px)' }}
              >
                {/* Input row */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                  <Search className="w-4 h-4 text-purple-400 shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search chapters, topics, weeks..."
                    className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground/50"
                  />
                  {query && (
                    <button onClick={() => setQuery('')} className="text-muted-foreground/50 hover:text-muted-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <kbd className="text-[10px] text-muted-foreground/50 border border-white/10 rounded px-1.5 py-0.5">Esc</kbd>
                </div>

                {/* Results */}
                <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2">
                  {results.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                      No results for &ldquo;{query}&rdquo;
                    </div>
                  ) : (
                    <>
                      {!query && (
                        <p className="px-4 pb-1 text-[10px] uppercase tracking-widest text-muted-foreground/50">Suggested</p>
                      )}
                      {results.map((item, i) => (
                        <Link key={`${item.href}-${i}`} href={item.href} onClick={closePalette}>
                          <div
                            className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                              i === activeIdx ? 'bg-purple-500/15' : 'hover:bg-white/5'
                            }`}
                            onMouseEnter={() => setActiveIdx(i)}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              i === activeIdx ? 'bg-purple-500/30 text-purple-300' : 'bg-white/5 text-muted-foreground'
                            }`}>
                              {getIcon(item.icon)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{item.label}</p>
                              <p className="text-[11px] text-muted-foreground truncate">{item.desc}</p>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${getBadgeStyle(item.type)}`}>
                              {item.type}
                            </span>
                            {i === activeIdx && <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
                          </div>
                        </Link>
                      ))}
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-white/8 flex items-center gap-4 text-[10px] text-muted-foreground/50">
                  <span><kbd className="border border-white/10 rounded px-1">↑↓</kbd> navigate</span>
                  <span><kbd className="border border-white/10 rounded px-1">↵</kbd> open</span>
                  <span><kbd className="border border-white/10 rounded px-1">Esc</kbd> close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
