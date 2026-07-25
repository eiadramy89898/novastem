'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ChevronRight, Sparkles, BookOpen, FlaskConical, Presentation, FileText, Trophy, Clock } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type Phase = 'present' | 'generating' | 'constructing' | 'evaluation' | 'finalize' | 'exhibition'

interface WeekData {
  week: number
  dates: string
  phase: Phase
  phaseLabel: string
  students: string[]
  portfolio: string[]
  prototype: string[]
  poster: string[]
  journal?: string
  exam?: string
  note?: string
}

// ── Phase config ───────────────────────────────────────────────────────────
const phaseConfig: Record<Phase, { label: string; color: string; bg: string; border: string; dot: string }> = {
  present:     { label: 'Present & Justify',          color: 'text-pink-300',    bg: 'bg-pink-500/15',    border: 'border-pink-500/30',    dot: 'bg-pink-400' },
  generating:  { label: 'Generating & Defending',     color: 'text-rose-300',    bg: 'bg-rose-500/15',    border: 'border-rose-500/30',    dot: 'bg-rose-400' },
  constructing:{ label: 'Constructing & Testing',     color: 'text-fuchsia-300', bg: 'bg-fuchsia-500/15', border: 'border-fuchsia-500/30', dot: 'bg-fuchsia-400' },
  evaluation:  { label: 'Evaluation & Reflection',    color: 'text-purple-300',  bg: 'bg-purple-500/15',  border: 'border-purple-500/30',  dot: 'bg-purple-400' },
  finalize:    { label: 'Finalize Everything',        color: 'text-violet-300',  bg: 'bg-violet-500/15',  border: 'border-violet-500/30',  dot: 'bg-violet-400' },
  exhibition:  { label: 'Exhibition',                 color: 'text-amber-300',   bg: 'bg-amber-500/15',   border: 'border-amber-500/30',   dot: 'bg-amber-400' },
}

// ── Calendar data ──────────────────────────────────────────────────────────
const weeks: WeekData[] = [
  {
    week: 1, dates: '22–26 Sep 2024', phase: 'present', phaseLabel: 'Present & Justify a Problem',
    students: [
      'Introduce Egypt Grand Challenges & Capstone Challenge',
      'Introduce Capstone Portfolio template and rubrics',
      'Share links for poster and portfolio shared files',
      'Form teams, research problems and prior solutions',
      'Students\' representation skills',
    ],
    portfolio: [
      'Document Egypt Grand Challenges (which ones & why important)',
      'Document Problem to be Solved (specific problem + positive/negative consequences)',
    ],
    prototype: ['The Poster design — set up shared online portfolio (Year-Semester-TeamNumber format)'],
    poster: ['Choose poster design: theme, fonts, title name, logos, and colors according to rubrics'],
  },
  {
    week: 2, dates: '29 Sep – 3 Oct 2024', phase: 'present', phaseLabel: 'Present & Justify + Start Generating',
    students: [
      'Analyse strengths and weaknesses of prior solutions',
      'Identify design requirements',
      'Brainstorm possible solutions',
      'Identify design requirements a good solution would meet',
      'Students\' representation skills',
    ],
    portfolio: [
      'Research — topics about the problem (different perspectives)',
      'Research — topics about the solutions (technologies, materials, scientific topics)',
      'Other Solutions Already Tried — prior solutions, strengths & weaknesses',
      'Add list of references at the end of the portfolio file',
    ],
    prototype: [],
    poster: ['Improve the poster design and colors'],
  },
  {
    week: 3, dates: '6–10 Oct 2024', phase: 'generating', phaseLabel: 'Generating & Defending a Solution',
    students: [
      'Select a solution and justify why it is a good solution',
      'Select which design requirements will be tested in the prototype',
      'Students\' representation skills',
    ],
    portfolio: [
      'Solution and Design Requirements — characteristics of a successful solution',
      'Which design requirements did you choose and why?',
      'Selection of Solution — describe solution chosen and why',
      'Demonstrate the methods to solve the problem',
    ],
    prototype: ['Design requirements give idea of what prototype should be tested for and what materials can be used'],
    poster: ['Start editing the abstract (written at end — brief description of entire work)', 'Introduction: identifies the problem, summarises prior solution strengths/weaknesses, includes design requirements, summarises how team\'s solution was chosen'],
    journal: 'Monday: Capstone journal 1 G12-S2 | Wednesday: Capstone journal 1 G11-S2',
    note: 'ذكرى نصر أكتوبر',
  },
  {
    week: 4, dates: '13–17 Oct 2024', phase: 'generating', phaseLabel: 'Generating & Defending — Prototype Selection',
    students: [
      'Select a prototype to design, build, and test the design requirements',
      'Create and submit a proposal for the Capstone Prototype',
      'Sign Capstone Budget Guidelines',
      'Capstone review panel',
    ],
    portfolio: [
      'Selection of Prototype — describe prototype in detail (design & construction) and how it meets design requirements',
      'In what ways can your prototype be tested?',
      'Materials and Methods — list all materials (table: item · qty · description · usage · cost · source · picture)',
      'List safety precautions',
    ],
    prototype: ['First design draft submitted on session A this week', 'Review by panel → receive feedback → make needed modifications'],
    poster: ['Materials and Methods — prototype materials lists and/or illustrations summarised', 'Describe how the prototype was constructed'],
    journal: 'Monday: Capstone journal 1 G10-S4',
  },
  {
    week: 5, dates: '20–24 Oct 2024', phase: 'constructing', phaseLabel: 'Constructing & Testing a Prototype',
    students: [
      'Capstone Review Panel feedback discussion',
      'Create a Test Plan to test whether prototype meets selected design requirements',
      'Review the safety precautions',
      'Build the prototype',
    ],
    portfolio: [
      'Test Plan — list design requirements chosen to test',
      'List step-by-step procedure for each test (written to support repetition by others)',
    ],
    prototype: ['Panel feedback delivered to all students', 'Make needed modifications on the design', 'Get needed materials', 'Start building the prototype'],
    poster: ['Review all written parts', 'Continue improving Materials and Methods', 'Summary of test plan methods — how they address design requirements'],
    journal: 'Monday: Capstone journal 2 G12-S2 | Wednesday: Capstone journal 2 G11-S2',
  },
  {
    week: 6, dates: '27–31 Oct 2024', phase: 'constructing', phaseLabel: 'Constructing & Testing a Prototype',
    students: [
      'Review materials, methods, and safety rules',
      'Build the prototype',
      'Review all written parts in Portfolio',
      'Review all written parts in Poster',
    ],
    portfolio: ['Improve portfolio while working on building the prototype'],
    prototype: ['Continue working on the prototype'],
    poster: ['Improve Poster while working on building the prototype'],
    journal: 'Monday: Capstone journal 2 G10-S4',
  },
  {
    week: 7, dates: '3–7 Nov 2024', phase: 'constructing', phaseLabel: 'Constructing & Testing — Data Collection',
    students: [
      'Implement the Test Plan',
      'Document the tests, results, and any modifications in the Portfolio',
      'Revise Prototype design based on test results (do as long as needed)',
    ],
    portfolio: [
      'Data Collection — list all data collected in testing',
      'What measurement tools did you use?',
      'What level of precision did you use?',
      'Provide visual representation of data and results (best visuals tell the story without extra writing)',
    ],
    prototype: ['Implement the test plan', 'Test the prototype according to the chosen design requirements'],
    poster: ['Results — all types of prototype testing results presented (positive and negative)', 'Supporting documentation from Portfolio available', 'Includes a table or figure appropriate for the type of test results'],
    journal: 'Monday: Capstone journal 3 G12-S2 | Wednesday: Capstone journal 3 G11-S2',
  },
  {
    week: 8, dates: '10–14 Nov 2024', phase: 'constructing', phaseLabel: 'Review & Improve',
    students: ['Review all work and ensure all team members have the same level of understanding of what has been done'],
    portfolio: ['Improve portfolio while working on building the prototype'],
    prototype: ['Continue working on improving the prototype'],
    poster: ['Improve Poster while working on building the prototype'],
    journal: 'Monday: Capstone journal 3 G10-S4',
  },
  {
    week: 9, dates: '17–21 Nov 2024', phase: 'evaluation', phaseLabel: 'Testing + Start Evaluation',
    students: [
      'Continue implementation of the Test Plan and document',
      'Continue to revise prototypes based on test results (until time runs out)',
      'Prepare Capstone Poster for Exhibition using rubrics and Poster Template',
      'Students\' representation skills',
    ],
    portfolio: ['Continue Data Collection'],
    prototype: ['Improve the Results part'],
    poster: ['Improving the whole poster', 'Continue writing the results', 'Improve the Results part'],
    exam: 'Midterm exam G10–G11 2024-2025',
  },
  {
    week: 10, dates: '24–28 Nov 2024', phase: 'evaluation', phaseLabel: 'Evaluation, Reflection, Recommendations',
    students: [
      'Analyse the Data — include analysis of the effectiveness of the design',
      'Write recommendation for future research/development for others to replicate',
      'Students\' representation skills',
    ],
    portfolio: [
      'Analysis and Discussion — prototype behaviour and test plan results analysis',
      'What conclusions do you reach from the data? (data must demonstrate prototype met design requirements)',
      'Recommendations — future work, what to tell another team, scientific/engineering/social impacts',
      'Finalise the Learning Outcomes part (10 discipline LOs + how each was transferred to capstone)',
    ],
    prototype: ['Finalise the decorations and final look for the prototype (if needed)'],
    poster: ['Analysis — ties results to Grand Challenge and design requirements, supported by visuals, scientific laws & theories', 'Conclusions drawn from test results', 'Recommendations for future study with specific improvement ways'],
    journal: 'Monday: Capstone journal 4 G12-S2 | Wednesday: Capstone journal 4 G11-S2',
  },
  {
    week: 11, dates: '1–5 Dec 2024', phase: 'finalize', phaseLabel: 'Finalise Poster, Portfolio & Prototype',
    students: [
      'Finalise and review the Poster and Portfolio — ready for submission',
      'Finalise the Prototype for exhibition (make sure all work is completed)',
      'Representations training',
    ],
    portfolio: [
      'Review research list at the end — APA format (at least 5 credible sources, different kinds)',
      'Review the whole portfolio',
    ],
    prototype: ['Finalise decorations and final look for the prototype (if needed)'],
    poster: ['Literature cited — APA format, at least 5 credible sources, different types (books, encyclopedias, websites)', 'Review the abstract: purpose, what was done, major findings, major conclusions', 'Review the whole poster'],
    journal: 'Monday: Capstone journal 4 G10-S4',
  },
  {
    week: 12, dates: '8–12 Dec 2024', phase: 'exhibition', phaseLabel: 'Experimental Exhibition',
    students: [],
    portfolio: [],
    prototype: [],
    poster: [],
    journal: 'Monday: Journal 5 G10-S2 | Tuesday: Journal 5 G11-S2 | Wednesday: Journal 5 G12-S2',
    exam: 'Practical exam G10–G11',
  },
  {
    week: 13, dates: '15–19 Dec 2024', phase: 'exhibition', phaseLabel: 'Make-up & Practical Exam',
    students: [],
    portfolio: [],
    prototype: [],
    poster: [],
    journal: 'Make-up journal',
    exam: 'Practical exam G12',
  },
]

// ── Sub-components ─────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

function BulletList({ items, dot }: { items: string[]; dot: string }) {
  if (!items.length) return <p className="text-[11px] text-muted-foreground italic">— nothing specific this week —</p>
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0 mt-1.5`} />
          <span className="text-[11px] text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function WeekCard({ w, index }: { w: WeekData; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const cfg = phaseConfig[w.phase]

  return (
    <motion.div variants={itemVariants} layout>
      {/* Card shell */}
      <div
        className={`relative rounded-2xl border ${cfg.border} overflow-hidden transition-all duration-300`}
        style={{ background: 'rgba(10,0,20,0.6)', backdropFilter: 'blur(16px)' }}
      >
        {/* Left accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${cfg.dot}`} />

        {/* Header row — always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-3 px-4 py-4 text-left group"
        >
          {/* Week number bubble */}
          <div
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border ${cfg.border} ${cfg.bg}`}
          >
            <span className={cfg.color}>{String(w.week).padStart(2, '0')}</span>
          </div>

          {/* Dates + phase */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold leading-tight truncate">{w.phaseLabel}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
              <Calendar className="w-3 h-3" />{w.dates.replace(/\s*\d{4}$/, '')}
              {w.exam && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/25 text-[10px] font-medium">
                  📝 {w.exam}
                </span>
              )}
            </p>
          </div>

          {/* Phase badge */}
          <span className={`hidden sm:inline-flex text-[10px] font-medium px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border} shrink-0`}>
            {cfg.label}
          </span>

          {/* Chevron */}
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
            <ChevronRight className={`w-4 h-4 ${cfg.color}`} />
          </motion.div>
        </button>

        {/* Expanded body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1">
                {/* Divider */}
                <div className={`h-px w-full ${cfg.dot} opacity-20 mb-4`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                  {/* Students work */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles className={`w-3.5 h-3.5 ${cfg.color}`} />
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${cfg.color}`}>Students&apos; Work</span>
                    </div>
                    <BulletList items={w.students} dot={cfg.dot} />
                  </div>

                  {/* Portfolio */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FileText className={`w-3.5 h-3.5 ${cfg.color}`} />
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${cfg.color}`}>Portfolio</span>
                    </div>
                    <BulletList items={w.portfolio} dot={cfg.dot} />
                  </div>

                  {/* Prototype */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FlaskConical className={`w-3.5 h-3.5 ${cfg.color}`} />
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${cfg.color}`}>Prototype</span>
                    </div>
                    <BulletList items={w.prototype} dot={cfg.dot} />
                  </div>

                  {/* Poster */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Presentation className={`w-3.5 h-3.5 ${cfg.color}`} />
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${cfg.color}`}>Poster</span>
                    </div>
                    <BulletList items={w.poster} dot={cfg.dot} />
                  </div>

                </div>

                {/* Journal note */}
                {w.journal && (
                  <div className={`mt-3 flex items-start gap-2 px-3 py-2 rounded-lg ${cfg.bg} border ${cfg.border}`}>
                    <BookOpen className={`w-3.5 h-3.5 ${cfg.color} shrink-0 mt-0.5`} />
                    <span className={`text-[11px] ${cfg.color}`}>{w.journal}</span>
                  </div>
                )}
                {w.note && (
                  <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-[11px] text-muted-foreground">🗓️ {w.note}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function PlannerPage() {
  const [filter, setFilter] = useState<Phase | 'all'>('all')

  const filtered = filter === 'all' ? weeks : weeks.filter(w => w.phase === filter)

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(236,72,153,0.18) 0%, transparent 70%)' }}
    >
      <motion.div className="max-w-6xl mx-auto space-y-8" variants={containerVariants} initial="hidden" animate="visible">

        {/* ── Hero ── */}
        <motion.div variants={itemVariants}
          className="relative overflow-hidden rounded-3xl border border-pink-500/25 p-5 sm:p-8"
          style={{ background: 'linear-gradient(135deg, rgba(20,0,35,0.95) 0%, rgba(40,0,60,0.9) 50%, rgba(10,0,20,0.95) 100%)' }}
        >
          {/* Orbs */}
          <motion.div className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity }} />
          <motion.div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />

          {/* Floating emojis */}
          {[
            { e: '📅', x: '82%', y: '15%', d: 0 },
            { e: '🔬', x: '90%', y: '55%', d: 0.8 },
            { e: '📋', x: '75%', y: '70%', d: 1.5 },
          ].map((f, i) => (
            <motion.span key={i} className="absolute text-2xl pointer-events-none opacity-20"
              style={{ left: f.x, top: f.y }}
              animate={{ y: [0, -12, 0], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: f.d }} />
          ))}

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-pink-400 font-semibold">Ministry of Education · Central STEM Unit</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  Capstone <span style={{ background: 'linear-gradient(135deg,#f472b6,#ec4899,#db2777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Planner</span>
                </h1>
                <p className="text-muted-foreground text-sm max-w-lg">
                  Full semester timeline · 1st Semester 2024–2025 · 13 weeks from kickoff to exhibition. Every deliverable, every deadline, all in one place.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Phase legend / filter ── */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all ${
              filter === 'all'
                ? 'bg-pink-500/25 text-pink-300 border-pink-500/40'
                : 'bg-white/5 text-muted-foreground border-white/10 hover:border-white/20'
            }`}
          >
            All Weeks
          </button>
          {(Object.entries(phaseConfig) as [Phase, typeof phaseConfig[Phase]][]).map(([key, cfg]) => (
            <button key={key}
              onClick={() => setFilter(key)}
              className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all ${
                filter === key
                  ? `${cfg.bg} ${cfg.color} ${cfg.border}`
                  : 'bg-white/5 text-muted-foreground border-white/10 hover:border-white/20'
              }`}
            >
              {cfg.label}
            </button>
          ))}
        </motion.div>

        {/* ── Week count ── */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-pink-400" />
          <span className="text-sm text-muted-foreground">
            Showing <span className="text-pink-300 font-semibold">{filtered.length}</span> week{filtered.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* ── Week cards ── */}
        <motion.div className="space-y-3" variants={containerVariants}>
          <AnimatePresence>
            {filtered.map((w, i) => (
              <WeekCard key={w.week} w={w} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Exhibition footer ── */}
        <motion.div variants={itemVariants}
          className="relative overflow-hidden rounded-3xl border border-amber-500/25 p-7 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(20,8,0,0.9), rgba(40,20,0,0.85))' }}
        >
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(251,191,36,0.1), transparent)' }}
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <div className="relative z-10">
            <Trophy className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-amber-200 mb-1">Capstone Exhibition</h3>
            <p className="text-sm text-muted-foreground mb-1">Weeks 14–15 · 22 Dec 2024 – 2 Jan 2025</p>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              All work completed. Poster, portfolio, and prototype ready. Represent your team&apos;s full journey from problem identification to tested solution.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
