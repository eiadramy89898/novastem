'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen, Sparkles, ChevronRight,
  Trophy, Star, MessageSquare, Phone,
  GraduationCap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-7xl mx-auto space-y-8" variants={containerVariants} initial="hidden" animate="visible">

        {/* ── Welcome ── */}
        <motion.div variants={itemVariants} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-5 sm:p-8 border border-white/10">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                  Welcome, <span className="gradient-text">dear STEMer!</span> ✨
                </h1>
                <p className="text-muted-foreground text-sm sm:text-lg">
                  You&apos;re on a 7-day streak! Keep up the amazing work.
                </p>
                <div className="mt-6">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                    onClick={() => window.dispatchEvent(new Event('open-nova'))}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />Nova AI
                  </Button>
                </div>
              </div>
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-2xl scale-125"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img
                  src="/mascot/mascot.png"
                  alt="NovaSTEM mascot"
                  className="relative z-10 h-20 sm:h-40 w-auto drop-shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </motion.div>
            </div>

          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </motion.div>



        {/* ── Capstone Portfolio ── */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-950/40 via-cyan-950/30 to-emerald-950/40 p-4 sm:p-7">
            {/* bg orbs */}
            <div className="absolute -top-12 -right-16 w-56 h-56 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-16 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* Title */}
            <div className="relative z-10 flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-xl shrink-0">
                📁
              </div>
              <div>
                <h2 className="text-xl font-bold">Capstone Portfolio</h2>
                <p className="text-xs text-muted-foreground">Official Template · Engineering Design Process</p>
              </div>
              <span className="ml-auto text-[10px] px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/25 font-medium">
                4 Phases
              </span>
            </div>

            {/* Intro blurb */}
            <p className="relative z-10 text-xs text-muted-foreground leading-relaxed mb-6 p-4 rounded-xl bg-white/5 border border-white/5 italic">
              The Capstone Portfolio is the biography of your project, organised around the Engineering Design Process (EDP). It feeds the Exhibition Poster and counts toward your Capstone Exhibition mark. Each team has one portfolio named: <span className="text-teal-300 not-italic font-medium">Year-Semester-TeamNumber</span> (e.g. 2021-1-07).
            </p>

            {/* Phase I */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">Phase I</span>
                <h3 className="text-sm font-bold text-teal-200">Present & Justify a Problem and Solution Requirements</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-teal-300 mb-2">Egypt Grand Challenge(s)</h4>
                  <div className="space-y-1">
                    {['Which Egyptian Grand Challenge(s) are you addressing?','Why are they important to address?','Specify only challenges related to your capstone problem or big idea'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-teal-300 mb-2">Problem to be Solved</h4>
                  <div className="space-y-1">
                    {['What specific problem are you addressing?','What are the impacts / consequences of dealing with that problem?','Explain major positive impacts (if solved) and negative impacts (if not solved)'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-teal-300 mb-2">Research</h4>
                  <div className="space-y-1">
                    {['Which topics did you research about the problem?','Explain topics for deeper understanding of the problem','Which topics did you research about the solutions?','Explain topics related to possible approaches of solving the problem'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-teal-300 mb-2">Other Solutions Already Tried</h4>
                  <div className="space-y-1">
                    {['What prior solutions have been applied to this problem?','What are the strengths and weaknesses of those solutions?'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase II */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">Phase II</span>
                <h3 className="text-sm font-bold text-cyan-200">Generating & Defending a Solution</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-cyan-300 mb-2">Solution & Design Requirements</h4>
                  <div className="space-y-1">
                    {['What characteristics should a successful solution have?','How does each characteristic make the solution successful?','List general requirements for any effective, efficient solution','Which design requirements did you choose, and why?'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-cyan-300 mb-2">Selection of Solution</h4>
                  <div className="space-y-1">
                    {['Describe the solution you decided to pursue for your prototype','Why did you choose this solution?','Demonstrate the idea of the prototype you will build to solve the problem'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-cyan-300 mb-2">Selection of Prototype</h4>
                  <div className="space-y-1">
                    {['Describe the prototype in detail (design and construction)','How will it meet the design requirements you chose?'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase III */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">Phase III</span>
                <h3 className="text-sm font-bold text-emerald-200">Constructing & Testing a Prototype</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-emerald-300 mb-2">Materials & Methods</h4>
                  <div className="space-y-1">
                    {['List all materials used (table: item · qty · description · usage · cost · source · picture)','List safety precautions taken'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-emerald-300 mb-2">Test Plan</h4>
                  <div className="space-y-1">
                    {['List the design requirements chosen to test with your prototype','List step-by-step procedure for each test associated with each design requirement'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-emerald-300 mb-2">Data Collection</h4>
                  <div className="space-y-1">
                    {['What measurement tools or instruments did you use?','What level of precision and error did you use?','List all data collected in each test plan','Represent data visually in a table and/or graph'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase IV */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">Phase IV</span>
                <h3 className="text-sm font-bold text-indigo-200">Evaluation, Reflection & Recommendations</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-indigo-300 mb-2">Analysis & Discussion</h4>
                  <div className="space-y-1">
                    {['Analyse prototype behaviour and test plan results','What conclusions do you reach from the data?','Measurements must be accurate enough to draw conclusions','Data must authenticate that the prototype met the design requirements'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-indigo-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-indigo-300 mb-2">Recommendations</h4>
                  <div className="space-y-1">
                    {['What are your recommendations for future work?','Covers prototype improvements and real-life application','What would you tell another team starting from where you stopped?','How did this project help you become better STEM students?'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-indigo-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 transition-colors">
                  <h4 className="text-xs font-semibold text-indigo-300 mb-2">Learning Outcomes & Sources</h4>
                  <div className="space-y-1">
                    {['Identify 10 discipline learning outcomes related to your Design Challenge','Explain how each learning outcome was transferred to your Capstone','List all research sources in APA format'].map((q,i)=>(
                      <div key={i} className="flex items-start gap-1.5"><div className="w-1 h-1 rounded-full bg-indigo-400 shrink-0 mt-1.5"/><span className="text-[11px] text-muted-foreground">{q}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Log Book Template ── */}
        <motion.div variants={itemVariants}>
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-950/40 via-yellow-950/30 to-orange-950/40 p-4 sm:p-7">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl shrink-0">📓</div>
              <div>
                <h2 className="text-xl font-bold">Log Book Template</h2>
                <p className="text-xs text-muted-foreground">Sharkia STEM School · Official Format</p>
              </div>
              <span className="ml-auto text-[10px] px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 font-medium">7 Sections</span>
            </div>
            <p className="relative z-10 text-xs text-muted-foreground leading-relaxed mb-6 p-4 rounded-xl bg-white/5 border border-white/5 italic">
              A detailed, chronological record documenting progress, activities, and reflections on a school project — serving as both a planning and tracking tool throughout the project lifecycle.
            </p>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '1', title: 'Project Overview', items: ['Project Title — name of the capstone project', 'Student Name(s)', 'Group Number'] },
                { num: '2', title: 'Initial Planning', items: ['Research Notes — sources, references, key findings', 'Project Plan — tasks, responsibilities, deadlines (chart or list)', 'Resources Needed — materials, tools, required resources'] },
                { num: '3', title: 'Daily / Weekly Logs', items: ['Date — date of each entry', 'Activities Completed — detailed description of what was done that day or week'] },
                { num: '4', title: 'Progress Reports', items: ['Work Samples — photos, sketches, drafts, or other evidence of work done at various stages'] },
                { num: '5', title: 'Meetings & Discussions', items: ['Meeting Notes — summaries of team meetings or discussions with teacher, including decisions made and action items assigned'] },
                { num: '6-7', title: 'Reflection & Appendices', items: ['Overall Experience — successes, failures, and key takeaways', 'Personal Growth — skills developed, knowledge gained, areas for improvement', 'Bibliography — all sources cited or referenced'] },
              ].map((s) => (
                <div key={s.num} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/20 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">{s.num}</span>
                    <h4 className="text-sm font-semibold text-amber-200">{s.title}</h4>
                  </div>
                  <div className="space-y-1.5">
                    {s.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-400 shrink-0 mt-2" />
                        <span className="text-[11px] text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative z-10 mt-5 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15">
              <p className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold mb-2">Tips for a strong log book</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[{ icon: '🔄', tip: 'Be Consistent' }, { icon: '✅', tip: 'Be Honest' }, { icon: '📋', tip: 'Be Organized' }, { icon: '🖼️', tip: 'Include Visuals' }, { icon: '👁️', tip: 'Review Regularly' }].map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-sm">{t.icon}</span>
                    <span className="text-[11px] text-muted-foreground">{t.tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link href="/bible">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group border border-purple-500/20"
              style={{ background: 'linear-gradient(135deg, #0f0520 0%, #1a0845 50%, #0a0a1a 100%)' }}
            >
              {/* Pulsing bg orbs */}
              <motion.div className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)' }}
                animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)' }}
                animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} />

              {/* Floating book icons */}
              {[
                { x: '78%', y: '12%', delay: 0,   rotate: -15, size: 22 },
                { x: '86%', y: '55%', delay: 1.2, rotate: 10,  size: 16 },
                { x: '92%', y: '30%', delay: 0.6, rotate: -5,  size: 18 },
              ].map((b, i) => (
                <motion.div key={i} className="absolute pointer-events-none text-purple-400/30"
                  style={{ left: b.x, top: b.y, fontSize: b.size, rotate: `${b.rotate}deg` }}
                  animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: b.delay }}>
                  📖
                </motion.div>
              ))}

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 p-8">

                {/* Glowing book icon */}
                <motion.div
                  className="shrink-0 hidden sm:flex w-24 h-24 rounded-2xl items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(168,85,247,0.1))', border: '1px solid rgba(139,92,246,0.3)' }}
                  animate={{ boxShadow: ['0 0 20px rgba(139,92,246,0.2)', '0 0 50px rgba(139,92,246,0.5)', '0 0 20px rgba(139,92,246,0.2)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span className="text-5xl" animate={{ rotate: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }}>📚</motion.span>
                </motion.div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium mb-3 border border-purple-500/30 text-purple-300" style={{ background: 'rgba(139,92,246,0.1)' }}>
                    <Sparkles className="w-3 h-3" />
                    12 chapters · 5 practice tests · real exam Q&amp;A
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    <span className="gradient-text">The STEM Journal Bible</span>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 max-w-lg">
                    Everything you need to hit Blue level — rubrics, writing formulas, model answers, and the full poster rubric. All in one place.
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    animate={{ boxShadow: ['0 0 15px rgba(139,92,246,0.3)', '0 0 35px rgba(139,92,246,0.7)', '0 0 15px rgba(139,92,246,0.3)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BookOpen className="w-4 h-4" />
                    Open the Bible
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              {/* Shimmer scan line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(139,92,246,0.06) 50%, transparent 60%)' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              />
            </motion.div>
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold">Old Challenges</h2>
            </div>
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Real challenges from past semesters
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* G11 S1 2024-2025 */}
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Card className="glass border-white/10 hover:border-green-500/30 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                          G11 · S1 · 2024-2025
                        </span>
                        <span className="text-[10px] text-muted-foreground">Alexandria School</span>
                      </div>
                      <h3 className="font-bold text-base leading-snug">Waste to Air Purifier</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Theme: Change, Equilibrium, and Cycles</p>
                    </div>
                    <span className="text-2xl">🌿</span>
                  </div>

                  {/* Big Idea */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 p-3 rounded-lg bg-white/5 border border-white/5 italic">
                    &ldquo;Locally-grown waste materials reprocessed and reused could be converted from waste to products that help improve the quality of Egypt&apos;s air.&rdquo;
                  </p>

                  {/* Essential Q */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Essential Question</p>
                    <p className="text-xs font-medium">How might we convert waste into valuable products for air pollution mitigation?</p>
                  </div>

                  {/* Grand Challenges */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Egypt Grand Challenges</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Recycle garbage & waste',
                        'Reduce pollution',
                        'Adapt to climate change',
                        'Eradicate public health issues',
                        'Deal with population growth',
                      ].map((gc, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/15">
                          {gc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design Requirements */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Key Design Requirements</p>
                    <div className="space-y-1">
                      {[
                        'Reduce air pollutant concentration by ≥ 20%',
                        'Air sample volume: 600–1500 mL',
                        'Mitigation time: ≤ 10 minutes',
                        'Address at least 1 toxic contaminant (SOₓ, NOₓ, particulate matter…)',
                      ].map((req, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 mt-1.5" />
                          <span className="text-[11px] text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Constraints */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Constraints</p>
                    <div className="space-y-1">
                      {[
                        'Must provide a video showing ≥ 20% pollutant removal with before/after measurements',
                        'No pre-manufactured filters as waste material',
                        'Bring locally-grown waste material on evaluation day',
                        'No radioactive or hazardous waste materials',
                        'Cost is NOT an acceptable design requirement',
                      ].map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                          <span className="text-[11px] text-muted-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* G12 S1 2023-2024 */}
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Card className="glass border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                          G12 · S1 · 2023-2024
                        </span>
                      </div>
                      <h3 className="font-bold text-base leading-snug">Smart System for People with Disabilities</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Theme: Communication, Sensing, Information, Informatics</p>
                    </div>
                    <span className="text-2xl">🤖</span>
                  </div>

                  {/* Big Idea */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 p-3 rounded-lg bg-white/5 border border-white/5 italic">
                    &ldquo;ICT has revolutionized public health by enhancing the lives of people with disabilities and chronic diseases, fostering inclusivity and healthcare equity.&rdquo;
                  </p>

                  {/* Essential Q */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Essential Question</p>
                    <p className="text-xs font-medium">How can communication, sensing, information, and informatics facilitate the lives of people with disabilities or chronic diseases?</p>
                  </div>

                  {/* Grand Challenges */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Egypt Grand Challenges</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Eradicate public health issues',
                        'Increase industrial bases of Egypt',
                      ].map((gc, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15">
                          {gc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design Challenge */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Design Challenge</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Develop a smart system with sensing → communicating → data analysis → controlling & decision making stages. Addresses a chronic health problem or disability. AI use allowed and must be documented.
                    </p>
                  </div>

                  {/* Design Requirements */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Key Design Requirements</p>
                    <div className="space-y-1">
                      {[
                        'Exactly 2 measurable design requirements',
                        'Must include one of: measurable change in ability · system response time · accuracy/precision of sensing',
                        'More than 2 requirements does NOT improve the score',
                      ].map((req, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                          <span className="text-[11px] text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Constraints */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Constraints</p>
                    <div className="space-y-1">
                      {[
                        'Must use AI (new trends)',
                        'Must have a hardware prototype',
                        'ICT is essential',
                        'Prototype must make the person more independent',
                        'System must be testable — show output change with input change',
                        'Cost is NOT an acceptable design requirement',
                      ].map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                          <span className="text-[11px] text-muted-foreground">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Practice Tests ── */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold">Practice Tests</h2>
            </div>
            <Link href="/bible/chapters/practice-tests">
              <Button variant="outline" size="sm" className="glass">
                All Tests<ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                number: '01',
                title: 'Water Collection & Purification',
                theme: 'Water Grand Challenge',
                questions: ['Team Collaboration', 'EDP — Trusted Sources', 'Chemistry *CH*', 'Biology *BI*'],
                color: 'from-cyan-500 to-blue-600',
                bg: 'from-cyan-500/10 to-blue-600/10',
                border: 'border-cyan-500/20',
              },
              {
                number: '02',
                title: 'Renewable Energy from Human Behavior',
                theme: 'Energy Grand Challenge',
                questions: ['Personal Reflection', 'EDP — First Two Steps', 'Physics *PH*', 'Math *MA*'],
                color: 'from-yellow-500 to-orange-500',
                bg: 'from-yellow-500/10 to-orange-500/10',
                border: 'border-yellow-500/20',
              },
              {
                number: '03',
                title: 'Recycle and Retain Garbage',
                theme: 'Waste Grand Challenge',
                questions: ['Team Roles', 'EDP — Design Requirements', 'Physics *PH*', 'Earth Science *ES*'],
                color: 'from-green-500 to-emerald-600',
                bg: 'from-green-500/10 to-emerald-600/10',
                border: 'border-green-500/20',
              },
              {
                number: '04',
                title: 'Improving Industry Using Biomimicry',
                theme: 'Industry Grand Challenge',
                questions: ['Personal Reflection', 'EDP — Feedback Control', 'Biology *BI*', 'Chemistry *CH*'],
                color: 'from-violet-500 to-purple-600',
                bg: 'from-violet-500/10 to-purple-600/10',
                border: 'border-violet-500/20',
              },
              {
                number: '05',
                title: 'Mixed Topics (G10 + G11 Style)',
                theme: 'Multi-Challenge',
                questions: ['Team Collaboration', 'EDP — Grand Challenges', 'Biology *BI*', 'Chemistry *CH*'],
                color: 'from-pink-500 to-rose-600',
                bg: 'from-pink-500/10 to-rose-600/10',
                border: 'border-pink-500/20',
              },
            ].map((test, i) => (
              <Link key={i} href="/bible/chapters/practice-tests">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className={`glass border ${test.border} hover:border-purple-500/40 transition-all duration-300 cursor-pointer h-full`}>
                    <CardContent className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${test.color} flex items-center justify-center shrink-0`}>
                          <span className="text-white font-bold text-sm">{test.number}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${test.bg} border ${test.border} text-muted-foreground`}>
                          {test.theme}
                        </span>
                      </div>
                      {/* Title */}
                      <h3 className="font-bold text-sm mb-2 leading-snug">{test.title}</h3>
                      {/* Questions */}
                      <div className="space-y-1">
                        {test.questions.map((q, qi) => (
                          <div key={qi} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${test.color} shrink-0`} />
                            <span className="text-[11px] text-muted-foreground">{q}</span>
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground">4 questions</span>
                        <span className={`text-[10px] font-medium bg-gradient-to-r ${test.color} bg-clip-text text-transparent`}>
                          Start Test →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Achievements ── */}
        <motion.div variants={itemVariants}>
          <Card className="glass border-white/10">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-purple-400" />
                <CardTitle>Recent Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'First Journal', description: 'Completed your first STEM journal', icon: '🏆' },
                { title: 'Week Warrior',  description: '7-day study streak achieved',       icon: '🔥' },
                { title: 'Data Wizard',   description: 'Analyzed 10+ datasets',             icon: '📊' },
              ].map((a, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <span className="text-3xl">{a.icon}</span>
                  <div>
                    <h4 className="text-sm font-medium">{a.title}</h4>
                    <p className="text-xs text-muted-foreground">{a.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Feedback CTA ── */}
        <motion.div variants={itemVariants}>
          <Link href="/feedback">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl border border-purple-500/30 cursor-pointer group"
            >
              {/* Gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-pink-600/20" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 text-3xl"
                  >
                    💬
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Got feedback or ideas?</h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                      This site is built by one STEM student — for STEM students. Your ideas directly shape what gets built next. Seriously, I read every message.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Phone className="w-3 h-3 text-purple-400" />+20 103 608 8928
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MessageSquare className="w-3 h-3 text-purple-400" />eyad.1625205@stemredsea.moe.edu.eg
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                  Send Feedback
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </Link>
        </motion.div>

      </motion.div>
    </div>
  )
}
