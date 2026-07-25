'use client'

import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  ChevronLeft, ChevronRight, Star, Share2,
  Bookmark, Sparkles, Lightbulb, CheckCircle, ArrowRight, Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

const chapterContent = {
  'understanding-rubric': {
    title: 'Understanding the Rubric',
    subtitle: 'Know exactly what gets you Blue',
    readingTime: '10 min',
    sections: [
      {
        title: 'The 4 Levels',
        content: `
<h3>Blue · Green · Yellow · Red</h3>
<p>The real rubric has <strong>4 levels</strong>, not "High Blue". Blue is the best. Your journal is scored on 4 criteria — you need Blue in all of them.</p>
<div class="level-card level-blue"><h4>🔵 BLUE — Best</h4>
<p>Strong evidence of synthesis. You connect your class subjects to the capstone. You give clear, detailed, specific examples. Your reflection shows real personal growth.</p></div>
<div class="level-card level-green"><h4>🟢 GREEN — Good</h4>
<p>Some evidence of synthesis. You understand the topic and give some examples. You show personal growth but not deeply.</p></div>
<div class="level-card level-yellow"><h4>🟡 YELLOW — Weak</h4>
<p>Little evidence. Your answer is vague. You describe things but don't explain what they mean. Your reflection is unsupported.</p></div>
<div class="mistake-box"><h4>🔴 RED — Missing</h4>
<p>No evidence at all. You show no personal growth. You didn't answer the question properly.</p></div>`,
      },
      {
        title: 'The 4 Criteria',
        content: `
<h3>What you are scored on</h3>
<div class="level-card level-blue"><h4>1. Learning Transfer</h4>
<p>Did you connect a class subject (Physics, Biology, Chemistry, Math...) to your capstone?</p>
<p><strong>Blue:</strong> "In Physics we studied measurement errors. When measuring the dam I found a +5cm systematic error and corrected every reading."</p>
<p><strong>Yellow:</strong> "Physics helped us a lot in the capstone."</p></div>
<div class="level-card level-high-blue"><h4>2. Team Collaboration</h4>
<p>Did you explain your role AND show what effective teamwork looks like?</p>
<p><strong>Blue:</strong> "When my teammate dismissed my introduction without reading it, I felt hurt. I learned to use 'effort appreciation' — I now always find something useful in everyone's work before suggesting changes."</p>
<p><strong>Yellow:</strong> "We worked well as a team."</p></div>
<div class="level-card level-green"><h4>3. Using the EDP</h4>
<p>Did you name the EDP step and reflect on how it went?</p>
<p><strong>Blue:</strong> "After our hypothesis about bio-thermal energy failed, we went back to the Research step. This taught me the EDP is not a straight line — going back is part of good engineering."</p></div>
<div class="level-card level-yellow"><h4>4. Personal Reflection</h4>
<p>Did you say what YOU personally learned or how YOU changed?</p>
<p><strong>Blue:</strong> "I used to work right before the deadline. After our team struggled, I created a weekly timeline. This changed how I manage time — not just in capstone, but in everything."</p></div>`,
      },
      {
        title: 'Quick Checklist',
        content: `
<h3>Check this before you submit every entry</h3>
<div class="tip-box"><h4>✅ For Blue — make sure you can answer YES to all of these:</h4>
<ul>
<li>Did I connect my answer to a specific class subject with details?</li>
<li>Did I give a specific example from my real capstone (not general)?</li>
<li>Did I explain what I personally learned or how I changed?</li>
<li>Did I explain my role in the team specifically?</li>
<li>Did I name which EDP step I was using and why?</li>
</ul></div>
<div class="mistake-box"><h4>❌ These drop you from Blue to Yellow instantly:</h4>
<ul>
<li>Writing "we learned a lot" with no specific example</li>
<li>Describing what happened but not what it means</li>
<li>Copying facts from the internet instead of reflecting on your experience</li>
<li>Not mentioning your personal role in the team</li>
<li>Answering a different question than what was asked</li>
</ul></div>`,
      },
    ],
    keyTakeaways: [
      'The real rubric has 4 levels: Blue, Green, Yellow, Red (not "High Blue")',
      '4 criteria: Learning Transfer · Team Collaboration · EDP · Personal Reflection',
      'Blue = deep thinking + specific real examples + personal growth',
      'Yellow = describing what happened without saying what it means',
      'Every journal entry must touch all 4 criteria',
    ],
  },

  'engineering-design-process': {
    title: 'Engineering Design Process (EDP)',
    subtitle: 'The backbone of every capstone journal',
    readingTime: '12 min',
    sections: [
      {
        title: 'The EDP Steps',
        content: `
<h3>6 steps — know them all</h3>
<div class="level-card level-blue">
<ol>
<li><strong>Define the Problem</strong> — What is the problem? Who is affected? Why does it matter?</li>
<li><strong>Research</strong> — What prior solutions exist? What do trusted sources say?</li>
<li><strong>Hypothesis / Brainstorm</strong> — What is your predicted solution?</li>
<li><strong>Variables</strong> — Independent (what you change), Dependent (what you measure), Controlled (what stays the same)</li>
<li><strong>Build and Test</strong> — Make a prototype. Test it against your design requirements.</li>
<li><strong>Evaluate and Improve</strong> — Did it work? What would you change?</li>
</ol></div>
<div class="tip-box"><h4>💡 The EDP is NOT a straight line</h4>
<p>Real engineers go back to earlier steps when something fails. Showing this in your journal = Blue level. One student wrote: "Our hypothesis about bio-thermal energy failed so we returned to Research and chose bio-mechanical energy instead." That's Blue thinking.</p></div>`,
      },
      {
        title: 'Real Blue Examples',
        content: `
<h3>From actual Blue journals — these are real student answers</h3>
<div class="level-card level-blue"><h4>Defining the Problem — Blue</h4>
<p>"Egypt's Grand Challenge is managing clean water. Cities in Sharqiyah far from the Nile depend on buying water. Our project investigates atmospheric water collection to help arid areas with no water infrastructure."</p>
<p class="text-sm text-muted-foreground mt-1">✅ Specific location. Specific group affected. Linked to a Grand Challenge.</p></div>
<div class="level-card level-high-blue"><h4>Prior Solution — Blue</h4>
<p>"In Saudi Arabia, solar panels desalinate seawater. Strength: saves energy. Weakness: high cost. This made us look for a cheaper heat source — we used a Peltier device instead of solar panels."</p>
<p class="text-sm text-muted-foreground mt-1">✅ Real prior solution. Named strength AND weakness. Shows how it changed the design.</p></div>
<div class="mistake-box"><h4>❌ Yellow — do NOT write like this:</h4>
<p>"We researched prior solutions and found some good ideas. We will use them in our project."</p>
<p class="text-sm text-muted-foreground mt-1">❌ No specific solution named. No strength or weakness. No connection to your design.</p></div>`,
      },
      {
        title: 'How to Answer EDP Questions',
        content: `
<h3>EDP questions are labeled *EDP* — here is the formula</h3>
<div class="tip-box"><h4>💡 The Blue Formula for EDP questions:</h4>
<p><strong>Name the step → What you did → Specific example from your project → What you learned</strong></p></div>
<div class="level-card level-blue"><h4>"Explain how you used the first two EDP steps"</h4>
<p>First: name the step. Then say what you did. Then give a specific example from your actual project. Then say what you learned or what changed.</p></div>
<div class="level-card level-high-blue"><h4>"Explain one prior solution — strength, weakness, and how it helped your idea"</h4>
<p>Name the prior solution and where it is from. Give one strength and one weakness with details. Then explain exactly how it changed YOUR design decision.</p></div>
<div class="level-card level-green"><h4>"What design requirements did you choose and why?"</h4>
<p>Name the requirement. Say how you measure it (what tool, what unit). Connect it to the real-world use of your solution.</p></div>`,
      },
    ],
    keyTakeaways: [
      'EDP: Define → Research → Hypothesis → Variables → Build/Test → Evaluate',
      'The EDP is iterative — going back shows good engineering thinking (Blue level)',
      'Prior solution formula: name it + strength + weakness + how it changed your design',
      'Always name specific tools, values, and steps — never be vague',
      'EDP questions appear in every journal — know these steps by heart',
    ],
  },

  'personal-reflection': {
    title: 'Personal Reflection',
    subtitle: 'The hardest criterion — and the most important',
    readingTime: '10 min',
    sections: [
      {
        title: 'Description vs Reflection',
        content: `
<h3>This is why most students get Yellow instead of Blue</h3>
<p>The rubric says Blue reflection must show "insightful viewpoints, clear detailed examples, and evidence of personal growth." Yellow reflection is "unsupported or has flawed arguments." The difference is simple:</p>
<div class="mistake-box"><h4>❌ Description (Yellow level)</h4>
<p>"We had a problem with the deadline. We fixed it by making a schedule. Now we finish on time."</p></div>
<div class="level-card level-blue"><h4>✅ Reflection (Blue level)</h4>
<p>"In Semester 1, I was writing portfolio entries the night before the deadline. The result was weak, rushed work. This semester, I created a weekly timeline that splits tasks into three parts — portfolio, prototype, and poster. I noticed that having smaller deadlines every Wednesday removed the stress and improved the quality of my writing. This taught me that the problem wasn't the deadline — it was not breaking the work into smaller pieces early enough."</p></div>
<div class="tip-box"><h4>💡 The simple test</h4>
<p>After writing a paragraph, ask yourself: Did I say <strong>what happened?</strong> Did I say <strong>why it matters?</strong> Did I say <strong>what changed in me?</strong> If you only answered the first question, it is description — not reflection.</p></div>`,
      },
      {
        title: 'Real Blue Reflections',
        content: `
<h3>From actual Blue journals — study the style, not just the words</h3>
<div class="level-card level-blue"><h4>Teamwork reflection — Blue</h4>
<p>"When my teammate dismissed my introduction without reading it, I felt hurt and almost stopped contributing. But I reflected on this: the problem wasn't her — it was that we had no system for sharing work. I introduced 'effort appreciation': whenever a teammate sends work, I find at least one strong point before suggesting changes. By the end of the semester, our team atmosphere improved and we produced better documents because nobody felt their effort was wasted."</p></div>
<div class="level-card level-high-blue"><h4>Learning from a mistake — Blue</h4>
<p>"In Semester 1, my biggest mistake was rushing the portfolio writing. I would write it the night before submission. The work was not proficient. This semester, I made a timeline map: every Wednesday I submit my section, every Friday I review a teammate's section. This plan improved our writing quality and gave us time to revise. Looking back, the problem was not the workload — it was the absence of structure."</p></div>
<div class="mistake-box"><h4>❌ What Yellow looks like:</h4>
<p>"I learned from my mistake and I will not repeat it. I will improve my teamwork skills and be a better student."</p>
<p class="text-sm text-muted-foreground mt-1">❌ No specific mistake named. No specific action taken. No real growth shown.</p></div>`,
      },
      {
        title: 'Reflection Formulas',
        content: `
<h3>Use these as a guide — then write in your own words</h3>
<div class="level-card level-blue"><h4>Formula 1: WHAT → SO WHAT → NOW WHAT</h4>
<ul>
<li><strong>WHAT:</strong> What happened? (one sentence only)</li>
<li><strong>SO WHAT:</strong> Why does it matter? What did you understand differently?</li>
<li><strong>NOW WHAT:</strong> What did you change or what will you do differently?</li>
</ul></div>
<div class="level-card level-green"><h4>Useful phrases for Blue reflection:</h4>
<ul>
<li>"This challenged my assumption that..."</li>
<li>"What surprised me was..."</li>
<li>"Looking back, I realize that the real problem was..."</li>
<li>"This changed how I think about..."</li>
<li>"If I could redo this, I would... because..."</li>
<li>"This skill will help me beyond the capstone because..."</li>
</ul></div>
<div class="tip-box"><h4>💡 About teamwork reflections specifically</h4>
<p>The rubric asks you to show "insights about what constitutes effective collaborative behavior." This means: don't just say "we worked well." Explain a specific moment where the team faced a challenge, what you did, and what you learned about collaboration from it.</p></div>`,
      },
    ],
    keyTakeaways: [
      'Blue reflection = insightful viewpoints + detailed examples + personal growth',
      'Yellow reflection = vague, unsupported, describes events without meaning',
      'Description tells what happened — reflection explains what changed in you',
      'Use the WHAT → SO WHAT → NOW WHAT formula',
      'Teamwork reflection must show a specific moment and what you learned about collaboration',
    ],
  },

  'academic-vocabulary': {
    title: 'Academic Vocabulary',
    subtitle: 'Simple words that make your journal sound stronger',
    readingTime: '10 min',
    sections: [
      {
        title: 'Why Vocabulary Matters',
        content: `
<h3>Your word choice signals your level immediately</h3>
<div class="mistake-box"><h4>❌ Yellow vocabulary</h4>
<p>"The test showed that our project worked. We think the results are good. We will make it better next time."</p></div>
<div class="level-card level-blue"><h4>✅ Blue vocabulary</h4>
<p>"The test results demonstrated that our prototype achieved 42% efficiency, which exceeded our design requirement of 30%. This outcome can be attributed to the increased surface area of the smaller biochar particles."</p></div>
<p>You don't need difficult words. You need <strong>precise words</strong>. Replace vague words with specific ones.</p>`,
      },
      {
        title: 'Word Replacements',
        content: `
<h3>The most important swaps</h3>
<div class="level-card level-blue"><h4>Instead of "showed" — use:</h4>
<p>demonstrated · revealed · indicated · confirmed · suggested · illustrated</p></div>
<div class="level-card level-high-blue"><h4>Instead of "helped" — use:</h4>
<p>contributed to · enabled · facilitated · supported · enhanced · improved</p></div>
<div class="level-card level-green"><h4>Instead of "got better / got worse" — use:</h4>
<p>improved · increased · decreased · declined · enhanced · reduced</p></div>
<div class="level-card level-yellow"><h4>Connectors that show thinking:</h4>
<p><strong>Adding:</strong> furthermore · in addition · moreover</p>
<p><strong>Contrasting:</strong> however · on the other hand · despite this</p>
<p><strong>Cause and effect:</strong> as a result · consequently · therefore · this led to</p>
<p><strong>Concluding:</strong> in conclusion · ultimately · taken together</p></div>
<div class="tip-box"><h4>💡 Most important swap of all</h4>
<p>Replace "I think" with evidence. Instead of "I think this happened because of temperature," write: "The decrease in reaction rate can be attributed to suboptimal temperature conditions."</p></div>`,
      },
      {
        title: 'STEM Words to Know',
        content: `
<h3>Words that appear in every capstone journal</h3>
<div class="level-card level-blue"><h4>Research and Methods</h4>
<p>hypothesis · variable · independent / dependent / controlled · design requirement · prior solution · prototype · iteration · test plan · data · results · efficiency</p></div>
<div class="level-card level-high-blue"><h4>Data and Results</h4>
<p>correlation · trend · pattern · anomaly · outlier · percentage · ratio · average · maximum · minimum · threshold</p></div>
<div class="level-card level-green"><h4>Hedging language — use this to sound academic</h4>
<p>Instead of "this proves," write "this suggests" or "the data indicates" or "it appears that." Never claim something is 100% proven from a small experiment. Saying "suggests" or "indicates" is actually more correct and more professional.</p></div>`,
      },
    ],
    keyTakeaways: [
      'Replace "showed" with: demonstrated, revealed, indicated, confirmed',
      'Replace "helped" with: contributed to, enabled, facilitated, enhanced',
      'Replace "I think" with: the data suggests, the results indicate',
      'Use cause-effect connectors: as a result, consequently, therefore',
      'Use hedging language (suggests, appears to) — it sounds more professional, not weaker',
    ],
  },

  'research-methodology': {
    title: 'Research & Trusted Sources',
    subtitle: 'How to find and use sources properly',
    readingTime: '8 min',
    sections: [
      {
        title: 'Trusted vs Untrusted Sources',
        content: `
<h3>This comes up in almost every capstone journal</h3>
<p>A common journal question is: "Your friend wants to use Facebook as a scientific source. Do you agree?" Blue answers go deeper than "no because it's social media."</p>
<div class="level-card level-blue"><h4>✅ Blue-level answer</h4>
<p>"Facebook is not a trusted source because: (1) anyone can post or edit information without scientific review, (2) posts are not peer-reviewed by experts, (3) there is no way to verify the credentials of the author. Trusted sources end in .edu, .gov, or are published in academic journals like IEEE or PubMed. For our capstone I used CDC and Koshland Science Museum — both .gov and .edu sites with verified scientific content."</p></div>
<div class="mistake-box"><h4>❌ Yellow-level answer</h4>
<p>"Facebook is not a trusted source because it is social media and anyone can write anything."</p>
<p class="text-sm text-muted-foreground mt-1">Correct but too shallow — no specific trusted alternatives, no connection to your project.</p></div>
<div class="tip-box"><h4>💡 Trusted source signals</h4>
<ul>
<li>Ends in .edu, .gov, or .org (scientific organization)</li>
<li>Written by a named researcher with credentials</li>
<li>Published in a peer-reviewed journal</li>
<li>References other scientific sources</li>
<li>Examples: Google Scholar, PubMed, IEEE Xplore, CDC, WHO</li>
</ul></div>`,
      },
      {
        title: 'Using Prior Solutions',
        content: `
<h3>Prior solutions = research step of the EDP</h3>
<p>Every journal that asks about "prior solutions" wants the same structure. Use it every time.</p>
<div class="level-card level-blue"><h4>The Blue formula for prior solutions:</h4>
<ol>
<li>Name the prior solution and where it is from</li>
<li>Explain how it works (briefly)</li>
<li>Give one specific strength</li>
<li>Give one specific weakness</li>
<li>Explain how it influenced YOUR design decision</li>
</ol></div>
<div class="level-card level-high-blue"><h4>Real example from a Blue journal:</h4>
<p>"In Saudi Arabia, a solar-powered desalination system uses solar panels to heat seawater and isolate impurities. Strength: renewable energy, no fuel cost. Weakness: very high initial cost of solar panels. This influenced our decision — instead of solar panels, we used a Peltier device which produces the same heating/cooling effect at a fraction of the cost, making our design more affordable for rural communities."</p></div>`,
      },
      {
        title: 'Learning Transfer from Subjects',
        content: `
<h3>Connecting class learning to your capstone = Learning Transfer</h3>
<p>This is one of the 4 rubric criteria. Every journal question that mentions a subject (Biology, Physics, Chemistry, Math, Earth Science) is asking for Learning Transfer.</p>
<div class="tip-box"><h4>💡 The Learning Transfer formula:</h4>
<p><strong>Subject + what you learned → how it connects to your capstone → specific example</strong></p></div>
<div class="level-card level-blue"><h4>Real Blue examples from actual journals:</h4>
<p><strong>Physics:</strong> "We studied measurement errors in LO1. When measuring the dam dimensions, I identified a systematic error of +5cm and corrected it by subtracting that value from all readings."</p>
<p><strong>Biology:</strong> "We studied GMOs — transgenic changes using vectors to insert genes. This connects to our water project: we considered using GMO plants like Plantago major, which can improve water purification naturally."</p>
<p><strong>Chemistry:</strong> "We studied reaction rates (K[A]^n[B]^m). In our water purification project, increasing the concentration of the filtration agent increased the purification rate — matching the rate law equation."</p></div>`,
      },
    ],
    keyTakeaways: [
      'Trusted sources: .edu, .gov, peer-reviewed journals — NOT Wikipedia or Facebook',
      'Prior solution formula: name + how it works + strength + weakness + how it changed your design',
      'Learning Transfer = connect a class subject to your capstone with a specific example',
      'The Learning Transfer formula: Subject → what you learned → how it connects → specific example',
      'Always name the specific source (CDC, Google Scholar, IEEE) not just "the internet"',
    ],
  },

  'poster-rubric': {
    title: 'Capstone Poster Rubric',
    subtitle: 'The real rubric — 8 sections, 4 levels, 40% of your project grade',
    readingTime: '18 min',
    sections: [
      {
        title: 'How the Poster is Graded',
        content: `
<h3>The most important document in your capstone</h3>
<p>Source: <em>Capstone Poster's Rubric — Mazen Mahmoud Elmahdy S'25, supervised by Ms. Phoebe Barsoom, 2023-2024.</em></p>

<div class="level-card level-blue">
<h4>Why the poster matters this much</h4>
<p>The poster accounts for <strong>40% of your project's total grade</strong> and contributes <strong>24% to your overall GPA</strong>. It is the most important element in the capstone project.</p>
<p>It showcases: the project's core idea · the methodology · the results · the underlying scientific principles · recommendations for further research.</p>
</div>

<div class="level-card level-high-blue">
<h4>Two types of poster — same content</h4>
<ul>
<li><strong>A4 Poster (PDF):</strong> The most critical document. Evaluators review this <em>before</em> the exhibition and use it to assign your grade. Made in Word or LaTeX.</li>
<li><strong>Full-size poster:</strong> Presented at the exhibition. Made in Photoshop, PowerPoint, or Adobe. Represents your team's professionalism.</li>
<li>Both contain exactly the same content.</li>
</ul>
</div>

<div class="level-card level-green">
<h4>The 4 rating levels — used for every section</h4>
<ol>
<li><strong>Pre-novice:</strong> The section is not found.</li>
<li><strong>Developing:</strong> The section has been identified but is not adequately prepared according to the guidelines.</li>
<li><strong>Accomplished:</strong> The section meets some of the guidelines and all necessary data are presented.</li>
<li><strong>Distinguished:</strong> All accomplished criteria are met, the content is professionally written, and additional guidelines are fulfilled.</li>
</ol>
</div>

<div class="level-card level-yellow">
<h4>The 8 sections and their grade weights</h4>
<ul>
<li>Abstract — <strong>5%</strong></li>
<li>Introduction — <strong>10%</strong></li>
<li>Materials and Methods — <strong>10%</strong></li>
<li>Results — <strong>15%</strong></li>
<li>Analysis — <strong>20%</strong></li>
<li>Conclusions — <strong>10%</strong></li>
<li>Recommendation — <strong>5%</strong></li>
<li>Literature Citation — <strong>5%</strong></li>
<li>Layout (graphic design) — <strong>10%</strong></li>
<li>Presentation — <strong>10%</strong></li>
</ul>
<p class="text-sm text-muted-foreground mt-2">The content sections above total 80%. Layout and Presentation make up the remaining 20%.</p>
</div>`,
      },
      {
        title: 'Abstract (5%)',
        content: `
<h3>Abstract — 5% of your poster grade</h3>
<p>The abstract is the <strong>opening section</strong> — the first part evaluators' eyes will focus on. It must have impeccable grammar, punctuation, and writing. <strong>No numbers, figures, or images are allowed in this section.</strong></p>

<div class="level-card level-blue">
<h4>Accomplished criteria</h4>
<ul>
<li>Provides a concise overview of the entire work — understandable without reading the whole poster.</li>
<li>Includes these exact keywords (highlighted — do NOT use synonyms):</li>
<li><strong>Purpose of the study:</strong> clearly states the objective of the research.</li>
<li><strong>A brief statement of what was done:</strong> summarized description of research methods, no minor details.</li>
<li><strong>A brief statement of major findings:</strong> highlights the significant discoveries made.</li>
<li><strong>Major conclusions:</strong> presents the primary conclusions drawn from the research.</li>
</ul>
<p class="text-sm text-muted-foreground">You must use these exact keywords. Evaluators actively search for them.</p>
</div>

<div class="level-card level-high-blue">
<h4>Distinguished criteria (all Accomplished + these)</h4>
<ol>
<li>The abstract, on its own, generates excitement and a desire to learn more.</li>
<li>Writing is professional, organized, and well-developed.</li>
<li>Clearly ties together the entire project by including ALL of these with their exact keywords:
  <ul>
  <li><strong>Grand Challenges</strong> — those in the official challenge document, not the ones you used.</li>
  <li><strong>The Chosen solution</strong></li>
  <li><strong>The design requirements and how you achieved them</strong></li>
  <li><strong>The Prototype Testing Results and Conclusions</strong></li>
  </ul>
</li>
</ol>
<p class="text-sm text-muted-foreground">Evaluators will be actively searching for these exact keywords. Do not use synonyms.</p>
</div>

<div class="tip-box">
<h4>💡 Quick rule</h4>
<p>No numbers. No images. No figures. Just precise, professional, keyword-rich text. Evaluators read this before they read anything else — make it count.</p>
</div>`,
      },
      {
        title: 'Introduction (10%)',
        content: `
<h3>Introduction — 10% of your poster grade</h3>
<p>Provides specific details about the grand challenge, prior solutions, and design requirements. Think of it as a condensed version of the first and second chapters of your portfolio.</p>

<div class="level-card level-blue">
<h4>Accomplished criteria — all 6 must be present</h4>
<ol>
<li><strong>Connection to Egypt's Grand Challenges:</strong> Identify all Grand Challenges first, then discuss two in full detail with percentages, numbers, and statistics.</li>
<li><strong>Connection to current semester Capstone Challenge:</strong> Demonstrate alignment with the official challenge document for this semester.</li>
<li><strong>Problem Identification:</strong> Objectively identify and emphasize the significance of the problem — why it must be resolved and what happens if it is solved.</li>
<li><strong>Prior Solution Summaries:</strong> Select and summarize TWO prior solutions — their names, locations, how they work, one strength and one weakness each.</li>
<li><strong>Design Requirements:</strong> Specify testable design requirements. Avoid vague criteria like "cost efficiency" unless you can test them.</li>
<li><strong>Solution Selection:</strong> Summarize how the team arrived at its chosen solution and how it addresses the design requirements.</li>
</ol>
</div>

<div class="level-card level-high-blue">
<h4>Distinguished criteria (all Accomplished + these)</h4>
<ul>
<li><strong>Visual References (graphs or figures):</strong> especially in the Grand Challenge section discussed in full detail.</li>
<li><strong>Progressive Focus:</strong> transitions cohesively from a broad overview of the Grand Challenge → various solutions → chosen solution → design requirements → prototype. Each choice is thoroughly justified.</li>
<li><strong>Seamless Transition:</strong> moves smoothly from explaining "what" choices were made to "why" those specific choices were made, leading into the next section.</li>
</ul>
</div>

<div class="mistake-box">
<h4>❌ Common mistakes in the Introduction</h4>
<ul>
<li>Mentioning Grand Challenges without statistics or numbers</li>
<li>Describing a prior solution without naming its location</li>
<li>Writing design requirements that cannot be tested (e.g. "it should be beautiful")</li>
<li>Not explaining how the chosen solution connects to the design requirements</li>
</ul>
</div>`,
      },
      {
        title: 'Materials & Methods (10%)',
        content: `
<h3>Materials and Methods — 10% of your poster grade</h3>
<p>Gives specific details about the materials used and explains how the prototype was built, step by step.</p>

<div class="level-card level-blue">
<h4>Accomplished criteria</h4>
<ul>
<li><strong>Materials Summary:</strong> A table with: material name · picture · quantity used · brief description of its specific characteristics essential for its function.
  <ul>
  <li>If you used sheets or rods: include dimensions (length, width, height, or radius) with measurement errors.</li>
  <li>Do NOT mention price — that is only in the portfolio.</li>
  <li>Do NOT include test equipment (buckets simulating water, lighters simulating fire) in the material table.</li>
  </ul>
</li>
<li><strong>Construction Process:</strong> Describe how the prototype was built step by step, with real photos of each step.</li>
<li><strong>Design Requirements:</strong> List design requirements in bullet points. Each requirement must be supported by a scientific rationale.</li>
<li><strong>Test Plan Overview:</strong> Outline the tests conducted and how they address the design requirements. Include images of the test plan. Include safety precautions.</li>
</ul>
</div>

<div class="level-card level-high-blue">
<h4>Distinguished criteria (all Accomplished + this)</h4>
<ul>
<li>The methods are clear enough that a reader could explain the method to another professional — without needing to ask you anything.</li>
</ul>
</div>

<div class="tip-box">
<h4>💡 The materials table format</h4>
<p>Your table must have four columns: <strong>Name · Picture · Description · Quantities</strong>. The description must state the specific characteristic that makes the material useful — not just what it is.</p>
</div>`,
      },
      {
        title: 'Results (15%)',
        content: `
<h3>Results — 15% of your poster grade</h3>
<p>All outcomes of the prototype testing, regardless of whether they are positive or negative. Divided into two subsections: negative results (typically two points) and positive results (multiple points), all supported by graphs and tables.</p>

<div class="level-card level-blue">
<h4>Accomplished criteria</h4>
<ul>
<li><strong>Inclusive Presentation:</strong> ALL prototype testing results are presented — positive and negative. Do not hide negative results.</li>
<li><strong>Supporting Documentation:</strong> Data from tests conducted for the prototype is accessible and referenced from the Capstone Portfolio.</li>
<li><strong>Effective Visualization:</strong> At least one figure AND one table that match the nature of the test results. The scientific rationale behind chosen figures is clearly explained.</li>
</ul>
</div>

<div class="level-card level-high-blue">
<h4>Distinguished criteria (all Accomplished + these)</h4>
<ul>
<li><strong>Highly Organized Results:</strong> So well organized that they could be handed to a new team to replicate the work with complete fidelity. All collected data is in the Portfolio.</li>
<li><strong>Impactful Visual Representation:</strong> The visuals alone — even without reading the text — guide the reader to a decisive conclusion about the outcomes.</li>
<li>If a specific law or calculation was used in this section, it is explicitly mentioned.</li>
<li>Multiple figures are included, all with measurement error considerations and correct units.</li>
</ul>
</div>

<div class="mistake-box">
<h4>❌ What drops you out of Distinguished</h4>
<ul>
<li>Showing only positive results and hiding the negative ones</li>
<li>Tables or graphs without units, labels, or error bars</li>
<li>Graphs that do not help the reader draw a conclusion</li>
<li>Not mentioning the scientific law used in the calculation</li>
</ul>
</div>`,
      },
      {
        title: 'Analysis (20%)',
        content: `
<h3>Analysis — 20% of your poster grade</h3>
<p>The most heavily weighted content section. It is the differentiating factor between teams — a robust idea with a solid scientific foundation is what determines project success.</p>

<div class="level-card level-blue">
<h4>Accomplished criteria</h4>
<ul>
<li><strong>Discussion of Results:</strong> Comprehensively discusses both positive and negative results, explaining the reasons behind each. Shows how results contribute to the grand challenge and the chosen solution.</li>
<li><strong>Alignment with Design Requirements:</strong> Links the test results to the design requirements. Each design requirement must be supported by a specific scientific rationale.</li>
<li><strong>Visual Support:</strong> Reinforced by pictures, graphs, charts. Whenever possible, each section of analysis should be accompanied by a graph.</li>
<li><strong>Scientific Foundation:</strong> Draws on scientific laws and theories. Provides evidence of learning transfer by referencing specific learning outcomes. Example: "In the tenth learning outcome in chemistry (Ch1.10), the properties of the solution concept have been discussed."</li>
</ul>
</div>

<div class="level-card level-high-blue">
<h4>Distinguished criteria (all Accomplished + these)</h4>
<ul>
<li><strong>Clarity and Organization:</strong> Exceptionally clear, well-organized, and extensively developed. Skillfully crafted for the intended audience.</li>
<li>Effectively explains, raises pertinent questions, or persuades the audience.</li>
<li>Addresses ALL possible questions that may arise — leaves no ambiguity. Example: if a substance was melted, the analysis explains why it was melted, how melting occurred, what bond formed, whether it is robust, and how it contributes to the overall purpose.</li>
</ul>
</div>

<div class="tip-box">
<h4>💡 Analysis = 20% — take it most seriously</h4>
<p>This is not a summary of results. It is your scientific argument for why the results happened, how they connect to the science, and what they mean for the Grand Challenge. Every claim needs a scientific law or learning outcome citation behind it.</p>
</div>`,
      },
      {
        title: 'Conclusions & Recommendation (10% + 5%)',
        content: `
<h3>Conclusions (10%) and Recommendation (5%)</h3>
<p>These two are separate sections with separate grades. Note the spelling carefully — the rubric uses <strong>Conclusions</strong> (plural) and <strong>Recommendation</strong> (singular). If an evaluator questions this, tell them your work aligns with the rubric.</p>

<div class="level-card level-blue">
<h4>Conclusions — Accomplished</h4>
<p>Conclusions are derived from both the prototype test results and the analysis. They reflect all findings, the impact of results on the grand challenge, and how findings contribute to solving the problem.</p>
</div>

<div class="level-card level-high-blue">
<h4>Conclusions — Distinguished (Accomplished + these)</h4>
<ul>
<li><strong>Your Problem to Be Solved:</strong> Clearly articulates the problem addressed.</li>
<li><strong>Your Conclusion from Analysis:</strong> Presents comprehensive conclusions drawn from the analysis.</li>
<li><strong>The Conclusion of Testing Results Connecting to Analysis:</strong> Establishes a clear link between the testing results and the analysis.</li>
<li><strong>Comparison to Prior Solution:</strong> Thorough comparison with the prior solutions introduced in the introduction — highlights how the prototype addresses their weaknesses.</li>
<li><strong>Introduction to Recommendation:</strong> Sets the stage for the subsequent recommendation section.</li>
</ul>
</div>

<div class="level-card level-green">
<h4>Recommendation — Accomplished</h4>
<p>An expression for future research. Guides researchers on what to address to continue improving the project. Provides specific ways the project could be improved in the future.</p>
</div>

<div class="level-card level-yellow">
<h4>Recommendation — Distinguished (Accomplished + these)</h4>
<ul>
<li>Your specific location and the reason for choosing it.</li>
<li>Specific materials that are difficult to use for small-scale prototypes due to high cost or unavailability in Egypt.</li>
<li>Recommendations are practical and directed towards future research, engineering, or policy groups.</li>
<li>Clearly informed by the problem and proposed solutions — mentions in one sentence what limitations prevented their inclusion in the small-scale prototype.</li>
</ul>
</div>`,
      },
      {
        title: 'Literature Citation (5%)',
        content: `
<h3>Literature Citation — 5% of your poster grade</h3>
<p>Includes all sources your research depends on. Gives credit to original authors and helps readers verify information.</p>

<div class="level-card level-blue">
<h4>Accomplished criteria</h4>
<ul>
<li>Includes only sources <strong>cited in the poster text</strong> — at least 5 credible sources.</li>
<li>Different kinds of sources can be used (books, encyclopedias) — websites are not recommended.</li>
<li>Includes only papers actually read by the students — do not list sources you have not read.</li>
<li>Must follow <strong>APA style guidelines.</strong></li>
</ul>
</div>

<div class="level-card level-high-blue">
<h4>APA format — exact format to use</h4>
<p><strong>For an article:</strong></p>
<p class="font-mono text-xs bg-white/5 p-2 rounded">Author's last name, initials (year). Title of the Article. Title of the Journal, volume(issue), pages. DOI or URL.</p>
<p><strong>For a book:</strong></p>
<p class="font-mono text-xs bg-white/5 p-2 rounded">Author's last name, initials (year). Title of the Book. Publisher.</p>
<p class="text-sm text-muted-foreground mt-2">Using <strong>Citation Machine</strong> will produce better results than writing manually.</p>
</div>

<div class="level-card level-green">
<h4>Distinguished criteria (Accomplished + this)</h4>
<ul>
<li>At least five citations are from <strong>peer-reviewed publications</strong> (academic articles).</li>
</ul>
</div>

<div class="mistake-box">
<h4>❌ Common citation mistakes</h4>
<ul>
<li>Listing sources you did not actually cite in the poster text</li>
<li>Listing sources you did not read</li>
<li>Using websites as your primary sources</li>
<li>Writing citations in a format other than APA</li>
<li>Fewer than 5 credible sources</li>
</ul>
</div>`,
      },
    ],
    keyTakeaways: [
      'The poster = 40% of the project grade and 24% of overall GPA — treat it as your most important document',
      'Abstract: no numbers or images — use exact keywords: purpose of the study, major findings, conclusions',
      'Introduction: 2 prior solutions with name + location + strength + weakness + how it influenced your design',
      'Analysis = 20% — the heaviest section. Cite scientific laws and specific learning outcomes (e.g. Ch1.10)',
      'Conclusions (plural) and Recommendation (singular) — the rubric spells it this way intentionally',
      'Literature Citation: at least 5 credible sources, APA format, only sources you actually cited and read',
    ],
  },

  'presentation-skills': {
    title: 'Exhibition & Communication',
    subtitle: 'Poster, verbal communication, and teamwork — the 6 exhibition criteria',
    readingTime: '12 min',
    sections: [
      {
        title: 'The 6 Exhibition Criteria',
        content: `
<h3>You are scored on 6 things at the exhibition</h3>
<p>Source: <em>Exhibition Rubric 2023-2024 (Egypt STEM Schools / USAID)</em></p>

<div class="level-card level-blue">
<h4>Criterion 1 — Understanding the Challenge</h4>
<p><strong>Blue:</strong> Strong understanding + thorough explanation of why solving this challenge matters.</p>
<p><strong>Green:</strong> Clear understanding + clear explanation.</p>
<p><strong>Yellow:</strong> Developing understanding + basic explanation.</p>
<p><strong>Red:</strong> Limited understanding, unclear explanation.</p>
</div>

<div class="level-card level-high-blue">
<h4>Criterion 2 — Understanding the EDP</h4>
<p><strong>Blue:</strong> Thorough and nuanced understanding. Can synthesize EDP information AND transfer EDP knowledge to new contexts when evaluators ask unexpected questions.</p>
<p><strong>Green:</strong> Clear understanding, can formulate responses about the EDP.</p>
<p><strong>Yellow:</strong> Developing understanding, some ability to respond.</p>
<p><strong>Red:</strong> Limited or incorrect understanding of the EDP.</p>
</div>

<div class="level-card level-green">
<h4>Criterion 3 — Understanding the Science</h4>
<p><strong>Blue:</strong> Thorough and nuanced understanding of the science. Can synthesize AND transfer scientific knowledge to new contexts.</p>
<p><strong>Green:</strong> Clear understanding, can formulate responses.</p>
<p><strong>Yellow:</strong> Developing understanding.</p>
<p><strong>Red:</strong> Limited or incorrect scientific understanding.</p>
</div>

<div class="level-card level-yellow">
<h4>Criteria 4, 5, 6 — Communication (Poster) · Communication (Verbal) · Teamwork</h4>
<p>These three criteria are covered in full detail in the sections below.</p>
</div>

<div class="tip-box">
<h4>💡 Key insight</h4>
<p>Criteria 1, 2, and 3 are about depth of knowledge. Evaluators will ask follow-up questions to probe what you actually understand — not just what is on the poster. Blue = you can explain things in new ways, not just repeat rehearsed lines.</p>
</div>`,
      },
      {
        title: 'Poster Design (Criterion 4)',
        content: `
<h3>What the official rubric requires</h3>
<p>Source: <em>Capstone Poster Rubric</em> and <em>"What Makes the Best Poster?" — Farida El-Rashedy & Hana Darwish (Egypt STEM Schools)</em></p>

<div class="level-card level-blue">
<h4>All required sections — missing any = not Blue</h4>
<ol>
<li><strong>Title</strong> — specific, readable from 2+ meters away</li>
<li><strong>Problem and Importance</strong> — what problem you are solving and why it matters</li>
<li><strong>Prior Solutions</strong> — at least one prior solution with strength and weakness</li>
<li><strong>Design Requirements</strong> — measurable criteria with numbers and units</li>
<li><strong>Our Solution</strong> — what you built and how it works</li>
<li><strong>Pictures of prototype in use</strong> + labeled diagrams of the mechanism</li>
<li><strong>Results and Analysis</strong> — data with charts, labeled axes, and units</li>
<li><strong>Future Recommendations</strong> — what you would improve next</li>
<li><strong>References</strong> — at least 3 trusted sources properly cited</li>
</ol>
</div>

<div class="level-card level-high-blue">
<h4>Design rules from the official poster guide</h4>
<ul>
<li>Maximum 30% text — the rest must be visuals</li>
<li>Use bullet points and numbered lists, not paragraphs</li>
<li>Title: minimum 100pt font (readable from 2m+)</li>
<li>Section headers: minimum 60pt · Body text: minimum 30pt</li>
<li>2–3 colors maximum · High contrast between text and background</li>
<li>No clip art — use real photos of your actual work</li>
<li>Every image must have a caption</li>
<li>All charts must have: title + labeled axes + units</li>
<li>Use white space intentionally — do not fill every inch</li>
</ul>
</div>

<div class="mistake-box">
<h4>❌ Common poster mistakes — official list</h4>
<ul>
<li>Too much text — becomes unreadable from 1.5m away</li>
<li>No visuals or low-quality images</li>
<li>Poor contrast (white text on light background)</li>
<li>Missing required sections from the rubric</li>
<li>Charts without titles, axes, or units</li>
<li>No captions on images or unlabeled diagrams</li>
<li>Copying from online — poster must show YOUR actual work</li>
<li>Inconsistent formatting across sections</li>
</ul>
</div>`,
      },
      {
        title: 'Verbal Communication (Criterion 5)',
        content: `
<h3>Blue verbal communication at the exhibition</h3>
<p>The rubric says: Blue = student is <strong>engaged, articulate, and personable</strong>. Provides <strong>clear, correct, and precise</strong> verbal communication.</p>

<div class="level-card level-blue">
<h4>What Blue looks like when you speak</h4>
<ul>
<li>You do NOT read from the poster — you explain it in your own words</li>
<li>You make eye contact with the evaluator, not the poster</li>
<li>You are specific: numbers, units, tool names, not "it worked well"</li>
<li>You can answer follow-up questions — not just recite a script</li>
<li>You are personable — you speak like a human, not like you are reading</li>
</ul>
</div>

<div class="level-card level-high-blue">
<h4>Prepare answers to these evaluator questions</h4>
<ul>
<li>"Why did you choose this problem?"</li>
<li>"What is the weakness of your solution?"</li>
<li>"How is your solution different from prior solutions?"</li>
<li>"What would you change if you had more time?"</li>
<li>"How does this connect to Egypt's Grand Challenges?"</li>
<li>"Walk me through your design requirements and how you tested them."</li>
<li>"What does this number on your chart mean?"</li>
</ul>
</div>

<div class="tip-box">
<h4>💡 When you don't know the answer</h4>
<p>Say: "That is a great question. Based on our results, I believe... however, this is something we would investigate further in the next iteration." This shows intellectual honesty + scientific thinking = Blue level. Going silent or guessing randomly = Red.</p>
</div>

<div class="level-card level-green">
<h4>Levels summary for verbal communication</h4>
<p><strong>Blue:</strong> Engaged, articulate, personable. Clear, correct, and precise.</p>
<p><strong>Green:</strong> Engaged and articulate. Clear and correct.</p>
<p><strong>Yellow:</strong> Appropriate communication but some difficulty with clarity or accuracy.</p>
<p><strong>Red:</strong> Difficulty providing appropriate verbal communication.</p>
</div>`,
      },
      {
        title: 'Teamwork (Criterion 6)',
        content: `
<h3>How teamwork is scored at the exhibition</h3>
<p>The rubric says Blue = student <strong>actively contributes</strong> to a presentation that represents the work and understanding of <strong>all team members</strong>.</p>

<div class="level-card level-blue">
<h4>Blue teamwork at the exhibition</h4>
<ul>
<li>Every member can speak about every part of the project — not just their own section</li>
<li>Each person presents the part they know best, but understands the whole</li>
<li>Practice together at least 3 times before exhibition day</li>
<li>Use a clear signal between members to transition smoothly (a nod, a phrase)</li>
<li>No arguments or confusion during the presentation — disagreements stay private</li>
<li>No member dominates — every voice is present in the final presentation</li>
</ul>
</div>

<div class="level-card level-green">
<h4>Real Blue answer about team presentation — from an actual journal</h4>
<p>"To have a good group presentation we should: practice many times, avoid arguments in the exhibition hall, let the leader assign each person the part they know best, make a signal between us to organize transitions, and not interrupt anyone while they are speaking."</p>
</div>

<div class="level-card level-yellow">
<h4>Levels summary for teamwork</h4>
<p><strong>Blue:</strong> Actively contributes. Presentation represents work and understanding of ALL members.</p>
<p><strong>Green:</strong> Contributes. Represents work of all members.</p>
<p><strong>Yellow:</strong> Contributions represent SOME members.</p>
<p><strong>Red:</strong> Contributions represent FEW members.</p>
</div>

<div class="mistake-box">
<h4>❌ What drops you to Yellow or Red on Criterion 6</h4>
<ul>
<li>One member speaks for 90% of the time</li>
<li>A member cannot answer questions about another member's section</li>
<li>Members contradict each other about their own project</li>
<li>Someone freezes or goes silent when asked about a section they didn't personally work on</li>
</ul>
</div>`,
      },
    ],
    keyTakeaways: [
      '6 exhibition criteria: Challenge · EDP · Science · Poster · Verbal · Teamwork',
      'Poster must include ALL 9 sections — missing any section loses Blue for Criterion 4',
      'Max 30% text on poster — use bullet points, visuals, captions, and labeled diagrams',
      'Verbal Blue = engaged, articulate, personable — speak without reading from the poster',
      'Teamwork Blue = every member can speak about every part, not just their own section',
    ],
  },

  'common-mistakes': {
    title: 'Common Mistakes',
    subtitle: 'The exact errors that drop you from Blue to Yellow',
    readingTime: '8 min',
    sections: [
      {
        title: 'Writing Mistakes',
        content: `
<h3>These are the most common journal writing errors</h3>
<div class="mistake-box"><h4>❌ Mistake 1: Description instead of reflection</h4>
<p>Writing what happened without saying what you learned or how you changed. Fix: add "this taught me..." or "looking back, I realize..."</p></div>
<div class="mistake-box"><h4>❌ Mistake 2: Too general</h4>
<p>"We learned a lot." "Teamwork helped us." "The EDP was useful." These sentences say nothing specific. Fix: name exactly what you learned, what teamwork moment helped you, which EDP step you used.</p></div>
<div class="mistake-box"><h4>❌ Mistake 3: Answering the wrong question</h4>
<p>Some students write a good paragraph — but about something different from what was asked. Read the question twice. Answer it directly in your first sentence.</p></div>
<div class="mistake-box"><h4>❌ Mistake 4: No connection to a class subject</h4>
<p>Every journal entry should mention at least one class subject and how it connects to your capstone. If you forget this, you lose the Learning Transfer criterion entirely.</p></div>`,
      },
      {
        title: 'EDP Mistakes',
        content: `
<h3>EDP-specific mistakes that cost marks</h3>
<div class="mistake-box"><h4>❌ Mistake 5: Not naming the EDP step</h4>
<p>If the question says *EDP*, evaluators want to see you use EDP language. Say "In the Research step..." or "During the Define step..." Don't just describe what you did without naming the step.</p></div>
<div class="mistake-box"><h4>❌ Mistake 6: Prior solution with no weakness</h4>
<p>Every prior solution has a weakness. If you only give the strength, evaluators think you didn't fully analyze it. Always give one strength AND one weakness.</p></div>
<div class="mistake-box"><h4>❌ Mistake 7: Design requirement with no measurement</h4>
<p>"Our design requirement is to make clean water" — this is not measurable. Blue level says: "Our design requirement is to achieve TDS below 500 ppm, measured using a digital TDS meter after each test."</p></div>
<div class="tip-box"><h4>💡 Quick fix for all EDP answers</h4>
<p>Add a number, a unit, a tool name, or a specific source to every EDP answer. This immediately makes it more specific and raises your level.</p></div>`,
      },
      {
        title: 'Teamwork Mistakes',
        content: `
<h3>Teamwork questions are worth a lot — don't waste them</h3>
<div class="mistake-box"><h4>❌ Mistake 8: "We worked well together"</h4>
<p>This tells evaluators nothing. They want a specific moment — a conflict, a challenge, a decision — and what you learned from it.</p></div>
<div class="mistake-box"><h4>❌ Mistake 9: Not mentioning your personal role</h4>
<p>Always say what YOUR specific role was. "I was the writer" or "I was responsible for the test plan." Then explain how you performed that role.</p></div>
<div class="mistake-box"><h4>❌ Mistake 10: Only talking about your team, not yourself</h4>
<p>The rubric scores Personal Reflection separately. Even in teamwork questions, you must say what YOU personally learned and how YOU changed. The team's experience is not enough.</p></div>
<div class="level-card level-blue"><h4>✅ The fix for all teamwork answers:</h4>
<p>Name your role → describe a specific challenge or moment → say what you did about it → say what you personally learned from it.</p></div>`,
      },
    ],
    keyTakeaways: [
      'Always end reflection paragraphs with "this taught me..." or "I now realize..."',
      'Name the EDP step explicitly in every *EDP* question',
      'Prior solutions must have BOTH strength AND weakness',
      'Design requirements must be measurable — include a number, unit, or tool',
      'Teamwork answers must include your personal role AND what you personally learned',
    ],
  },

  'writing-formulas': {
    title: 'Writing Formulas',
    subtitle: 'Copy these structures and fill them in',
    readingTime: '10 min',
    sections: [
      {
        title: 'Formula for Every Journal Entry',
        content: `
<h3>The universal Blue formula</h3>
<p>Almost every capstone journal question — regardless of the topic — can be answered with this structure:</p>
<div class="level-card level-blue">
<ol>
<li><strong>Answer directly</strong> — State your answer in the first sentence. Don't build up to it.</li>
<li><strong>Connect to a class subject</strong> — "In [subject] we learned [concept]..."</li>
<li><strong>Give a specific capstone example</strong> — "In our project, this applied when..."</li>
<li><strong>Show personal reflection or growth</strong> — "This taught me... / I realized... / If I repeat this..."</li>
</ol>
</div>
<div class="tip-box"><h4>💡 Example using the formula</h4>
<p><strong>Question:</strong> "What is your individual role in the team this semester?"</p>
<p><strong>Answer:</strong> "My role this semester is the writer and reviewer. In English class, we learned how to write appropriate materials for specific tasks, which directly applies to this role. In our project, I write the portfolio sections and review my teammates' work before submission — I always find one strength in their writing before suggesting changes. This role taught me that good writing is not about being perfect the first time — it is about revising with clear purpose."</p></div>`,
      },
      {
        title: 'Formulas for Specific Question Types',
        content: `
<h3>Templates for the most common question types</h3>
<div class="level-card level-blue"><h4>Learning Transfer question</h4>
<p>"In [subject], we studied [concept]. This connects to our capstone because [specific connection]. For example, when we [specific action in project], I applied [concept] by [specific action]. This helped us [result]."</p></div>
<div class="level-card level-high-blue"><h4>Mistake / improvement question</h4>
<p>"In [semester/week], I made the mistake of [specific mistake]. This affected my work because [specific consequence]. I benefited from this by learning [specific lesson]. To avoid repeating it, I [specific plan or action I took]."</p></div>
<div class="level-card level-green"><h4>Prior solution question</h4>
<p>"One prior solution we found was [name], used in [country/place]. It works by [brief explanation]. Its strength is [specific strength]. Its weakness is [specific weakness]. This influenced our design because [how it changed your decision]."</p></div>
<div class="level-card level-yellow"><h4>Teamwork question</h4>
<p>"My role in the team is [role]. I perform this by [specific actions]. One challenge we faced was [specific challenge]. I dealt with it by [specific action]. This taught me [specific lesson about teamwork or myself]."</p></div>`,
      },
      {
        title: 'Real Question Practice',
        content: `
<h3>Practice with questions from old journals</h3>
<div class="tip-box"><h4>Try answering these using the formulas above:</h4>
<ul>
<li>"Give one example of a mistake you made in semester 1 that affected your work. How did you benefit from it? What is your plan to avoid it?"</li>
<li>"What are the two most challenging personal aspects or skills you need to improve, and how can you improve them?"</li>
<li>"Prior solutions can help you think about new solutions. Explain one prior solution, including one strength and one weakness."</li>
<li>"To have a successful team, pick one factor and show how it affects your team positively."</li>
</ul></div>
<div class="level-card level-blue"><h4>Key rule: answer in your first sentence</h4>
<p>Don't write three sentences of introduction before getting to your answer. Evaluators read hundreds of journals. If your answer isn't clear in the first sentence, they assume you don't know it. Start with: "The mistake I made was..." or "The prior solution we found was..." or "My role in the team is..."</p></div>`,
      },
    ],
    keyTakeaways: [
      'Universal formula: Answer directly → Connect to subject → Specific example → Personal growth',
      'Start every answer with the answer — not with an introduction',
      'Learning Transfer: "In [subject] we studied [concept] which applies to our capstone when..."',
      'Mistake formula: what it was → how it affected you → what you learned → your plan',
      'Prior solution: name + how it works + strength + weakness + how it changed your design',
    ],
  },

  'model-answers': {
    title: 'Real Journal Questions & Answers',
    subtitle: 'Actual questions from STEM school journals with Blue-level answers',
    readingTime: '20 min',
    sections: [
      {
        title: 'Team Collaboration Questions',
        content: `
<h3>Real questions — real Blue answers</h3>

<div class="level-card level-blue">
<h4>Q1: "What part of working in a team are you excited about? Why?"</h4>
<p><strong>Blue answer:</strong> "I am most excited about the collective thinking that happens when we share ideas. When I was researching water sanitation alone, I reached only a few conclusions. But when I brought my findings to the team and we discussed them together, we combined our perspectives and reached more refined solutions much faster. This taught me that cooperation is not just about dividing work — it is about multiplying ideas."</p>
</div>

<div class="level-card level-high-blue">
<h4>Q2: "What was the biggest challenge you faced with your teammates? How will you overcome it this semester?"</h4>
<p><strong>Blue answer:</strong> "The biggest challenge last semester was that when two members produced the same section, we chose the better-written one without using the data from the other. This hurt the team member whose work was dismissed. This semester, I introduced the concept of 'effort appreciation' — whenever a teammate submits work, I find the useful parts and incorporate them in a different section rather than discarding it. This solved the tension and made every member feel valued."</p>
</div>

<div class="level-card level-green">
<h4>Q3: "If two teammates argue about a point, suggest two strategies to use the argument positively."</h4>
<p><strong>Blue answer:</strong> "Strategy 1: Present the ideas openly before assigning a leader — we show both ideas and each person identifies what is wrong with the other's idea. This removes ego from the decision and focuses on the design. Strategy 2: We write all competing ideas and compare them against the design requirements and rubric criteria — the idea that best matches the requirements wins, not the person who argued loudest. I applied this when our team argued about using CaCl versus a Peltier device, and we chose the Peltier because it better matched our efficiency design requirement."</p>
</div>

<div class="level-card level-yellow">
<h4>Q4: "Within the capstone, you were assigned a role that was not suitable for you. Explain two points to convince the leader to change this."</h4>
<p><strong>Blue answer:</strong> "Point 1: No one should perform the same role permanently, because the capstone is designed to develop all skills in every member. One of my teammates only worked on the prototype last semester and arrived at the exhibition without any writing or research skills. I will present this example to the leader as evidence that role rotation benefits the team as a whole. Point 2: We can switch roles weekly — the current writer becomes the researcher next week, and so on. The responsible person collects and edits that week's output, but all members contribute. This ensures quality while building everyone's abilities."</p>
</div>`,
      },
      {
        title: 'EDP Questions',
        content: `
<h3>Engineering Design Process — real exam questions</h3>

<div class="level-card level-blue">
<h4>Q5: "Explain how you will use the first two steps of the EDP to begin your energy project." *EDP*</h4>
<p><strong>Blue answer:</strong> "Step 1 — Define the Problem: Egypt and the world face a shortage of renewable energy, and we need a new energy source that costs nothing and is generated from human behavior. We defined our problem as: producing electricity from biomechanical energy on a personal scale. Step 2 — Research: We searched for prior solutions using Google Scholar and found three energy types — bio-thermal, biogas, and biomechanical. We focused on bio-thermal first, but after consulting experts, we discovered it was not practically feasible at our scale. This sent us back to the research step — which is normal in the EDP — and we pivoted to biomechanical energy, specifically a rope-and-motor system that generates electricity when pulled downward."</p>
</div>

<div class="level-card level-high-blue">
<h4>Q6: "Explain one prior solution for clean water. Include one strength, one weakness, and how it helped your design." *EDP*</h4>
<p><strong>Blue answer:</strong> "A prior solution used in Saudi Arabia desalinates seawater using solar panels. The panels collect sun energy, store it in batteries, and use that energy to heat large quantities of water and isolate impurities. Strength: it uses renewable energy with no ongoing fuel cost. Weakness: the initial installation cost of solar panels is extremely high, making it inaccessible for low-income communities. This influenced our design — instead of solar panels, we used a Peltier device that generates the same heating and cooling effect at a fraction of the cost, making our solution affordable for rural arid areas."</p>
</div>

<div class="level-card level-green">
<h4>Q7: "If you had a second chance on last year's capstone, which EDP step would you improve and how?" *EDP*</h4>
<p><strong>Blue answer:</strong> "The step I would improve is Ask and Research. Last year I worked mostly alone and made decisions based on limited expert input. This led to scientific errors and a repeated test plan. This year, I proactively visited the physics lab to have my introduction reviewed by my teacher, and I contacted researchers at the National Research Center in Dokki for external feedback. Each round of expert feedback improved my work and gave me more confidence at the exhibition. The lesson: research develops through humility — you have to be willing to hear your mistakes."</p>
</div>

<div class="level-card level-yellow">
<h4>Q8: "Design requirements are objective measures of success. What are your design requirements and how do they connect to the use of your solution?" *EDP*</h4>
<p><strong>Blue answer:</strong> "We have two design requirements: (1) Measurable efficiency — we measure the quantity of water collected (in ml) and the electricity consumed (in watts), then apply the conservation of energy equation to calculate the efficiency ratio. (2) Water purity — we use a pH meter and a TDS meter to measure how pure the collected water is and whether it meets standards for household or agricultural use. These requirements connect directly to the real-world use of our solution: the water is intended for households in arid areas, so it must be both affordable to produce and safe to use."</p>
</div>`,
      },
      {
        title: 'Material Connection Questions',
        content: `
<h3>Learning Transfer — connecting class subjects to your capstone</h3>

<div class="level-card level-blue">
<h4>Q9: (Physics) "Explain the relationship between pump power (P), pipe radius (r), well depth (h), and the amount of water pulled up." *PH*</h4>
<p><strong>Blue answer:</strong> "From Physics LO1, gravity is an attractive force described by F = GMm/r². To pull water upward, we need a force that overcomes gravity — similar to the escape velocity concept (V = √GM/r) that allows satellites to leave Earth's gravitational field. For underground water, the required velocity relates to V = GM/(r+h), where h is the depth of the well. The power P is the applied force equivalent to gravitational acceleration g. As for pipe radius r: by the continuity equation, a wider pipe allows greater flow rate for the same pressure. This connects to our capstone — we use electric field forces (from our Peltier's power supply) to generate the thermal gradient needed to evaporate and condense water."</p>
</div>

<div class="level-card level-high-blue">
<h4>Q10: (Chemistry) "You studied factors that affect chemical reaction rates. Suggest two factors that could improve the efficiency or decrease the cost of water purification." *CH*</h4>
<p><strong>Blue answer:</strong> "Factor 1 — Concentration: From the rate law K[A]^n[B]^m, increasing the concentration of the purification agent increases the reaction rate. In our project, increasing the concentration of the desiccant salt inside the collection chamber increases the rate of moisture absorption from the air, producing more water per hour without increasing energy cost. Factor 2 — Temperature: Increasing temperature increases kinetic energy and collision frequency. In our Peltier device, the hot side heats the air to increase humidity and evaporation rate, while the cold side condenses the water vapor. By optimizing the temperature differential, we increase the purification rate while keeping electricity consumption constant — directly improving our efficiency design requirement."</p>
</div>

<div class="level-card level-green">
<h4>Q11: (Biology) "You studied GMOs. How could you apply genetic modification to treat underground water in the absence of light?" *BI*</h4>
<p><strong>Blue answer:</strong> "In Biology we studied recombinant DNA technology — cutting a gene of interest with restriction enzymes and inserting it into a plasmid vector, which is then introduced into a host organism using heat shock or electrophoresis with CaCl₂ to stabilize the cell membrane. We could apply this by using purple sulphur bacteria, which can treat water in the absence of light by oxidizing hydrogen sulphide — a common underground water contaminant. We could also consider genetically modifying Plantago major, a plant studied in our ecology unit that has natural water purification properties, to enhance its purification efficiency and resistance to the chemical reactions in underground reservoirs."</p>
</div>

<div class="level-card level-yellow">
<h4>Q12: (Math) "In your project you must produce 150 joules in 5 minutes. Select a mathematical function that models the relationship between energy produced and time." *MA*</h4>
<p><strong>Blue answer:</strong> "I would use a linear function to model the relationship between time and energy produced, because each footstep press produces approximately the same amount of energy (constant rate of generation assuming consistent foot traffic). The function would be E = kt, where E is energy in joules, t is time in seconds, and k is the average energy per second. To produce 150J in 300 seconds, k = 0.5 J/s. However, I would also use a quadratic function to model the relationship between the number of people pressing and total energy, because as more people use the footstep simultaneously, there may be a non-linear increase in output due to overlapping magnetic fields — this gives a parabola opening upward, representing growing returns with increased use."</p>
</div>`,
      },
      {
        title: 'More Real Questions',
        content: `
<h3>Additional questions from Grade 10 & 11 journals</h3>

<div class="level-card level-blue">
<h4>Q13: "Give one example of a mistake you made in semester 1 that affected your work. How did you benefit? What is your plan?"</h4>
<p><strong>Blue answer:</strong> "The mistake I made in semester 1 was submitting my portfolio writing at the last minute every Wednesday. Because I was rushing, the quality was poor and unreviewed. I benefited from this by recognizing that the problem was not the workload but the absence of structure. This semester, I created a weekly timeline that splits capstone tasks into three parallel tracks — portfolio, prototype, and poster — with internal deadlines three days before the official submission. I also scheduled peer review sessions every Friday. This plan improved both the quality of my writing and my confidence, because I arrived at each submission having already revised the work twice."</p>
</div>

<div class="level-card level-high-blue">
<h4>Q14: "What are two most challenging personal skills you need to improve and how?"</h4>
<p><strong>Blue answer:</strong> "Skill 1 — Work distribution in smaller teams: This year the capstone team was reduced to 4 members. With fewer people, each member carries more responsibility. I improved this by increasing our meeting frequency and using a shared task tracker, which prevents cramming and ensures every task is completed on time. Skill 2 — Communicating ideas to external experts: Explaining our capstone idea to professors at E-JUST and scientific research platforms required me to simplify complex technical ideas without losing accuracy. I improved this by preparing structured notes using the design thinking steps before each meeting, which helped me present our idea clearly and receive more useful feedback."</p>
</div>

<div class="level-card level-green">
<h4>Q15: "You are about to finish your capstone and you have a mid-year exam. Explain in three points how you will organize your time."</h4>
<p><strong>Blue answer:</strong> "Point 1 — Fixed daily routine: After school, I study until dinner, then work on the capstone. On exam weeks, I shift more time to studying but maintain a minimum of 30 minutes on capstone tasks to avoid falling behind. Point 2 — Task prioritization: I list all pending capstone tasks by deadline and urgency. During exam periods, I focus only on tasks that are blockers for the next step — for example, finishing the test plan before the prototype build session. Point 3 — Physical health management: I sleep at least 7 hours and eat regularly during both exam and capstone weeks. I learned that being physically depleted made both my studying and my capstone writing significantly worse — so health is not optional, it is part of time management."</p>
</div>

<div class="level-card level-yellow">
<h4>Q16: "Explain two evidences to persuade evaluators that your capstone work is authentic."</h4>
<p><strong>Blue answer:</strong> "Evidence 1 — Step-by-step prototype photos: We photographed every stage of our build — materials before use, the assembly process, and the completed prototype. These photos are included in our video and can be shown to any evaluator who questions the authenticity of our work. Evidence 2 — Material receipts and sourcing details: We kept the receipts for every material we bought, including the supplier, price, and date of purchase. During the presentation, I can explain exactly why we chose each material, where we bought it, and where it is used in the prototype. A student who copied another team's work would not be able to answer these specific, practical questions."</p>
</div>`,
      },
    ],
    keyTakeaways: [
      'Every Blue answer starts with a direct response — never with an introduction',
      'Blue teamwork answers always include: your role + a specific conflict or challenge + what you learned',
      'Blue EDP answers always include: the step name + what you did + specific project example + what changed',
      'Blue Learning Transfer always includes: subject name + concept learned + how it connects to your project',
      'The difference between Blue and Yellow is specificity — names, numbers, tools, and real moments',
    ],
  },

  'practice-tests': {
    title: 'Practice Tests',
    subtitle: '5 full tests with real questions from STEM school exams',
    readingTime: '30 min',
    sections: [
      {
        title: 'Test 1 — Water Capstone',
        content: `
<h3>Test 1 — Capstone Theme: Water Collection & Purification</h3>
<p class="text-muted-foreground mb-4">Answer all 4 questions. For each, aim for Blue level using the formulas from the Writing Formulas chapter.</p>

<div class="level-card level-blue">
<h4>Question 1 — Team Collaboration</h4>
<p>"Working in a team for Capstones may be new for you. What part of working in a team are you most excited about? Why are you excited about that part?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name a specific aspect (e.g. idea sharing, role division). Give a concrete example from your actual team. Explain what it taught you or how it changed your approach.</p>
</div>

<div class="level-card level-high-blue">
<h4>Question 2 — EDP *EDP*</h4>
<p>"It is important to choose trusted sources for your Capstone project. Your friend wants to use Facebook for scientific information. Do you think this is a trusted source? Why or why not?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Say no with 3 specific reasons. Name trusted alternatives (.edu, .gov, Google Scholar). Connect it to a source you actually used in your capstone research.</p>
</div>

<div class="level-card level-green">
<h4>Question 3 — Material Connection (Chemistry) *CH*</h4>
<p>"(CH.1.01) In Chemistry, variables can be related in different ways. What are the two variables you could use in your rainwater collection project? As the first variable changes, how do you think the other one will change?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name both variables precisely (e.g. time of collection vs. quantity of water collected). State the type of relationship (positive/negative correlation). Apply the slope formula and connect it to your test plan.</p>
</div>

<div class="level-card level-yellow">
<h4>Question 4 — Material Connection (Biology) *BI*</h4>
<p>"(BI.2.02) Plants depend on water. In some regions, new water sources are needed. Provide a detailed example of how GMOs might be used to address the increasing demand for water."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Explain the GMO mechanism (restriction enzyme, vector, plasmid). Give a specific example (e.g. drought-resistant genes from cactus). Connect it to your capstone water challenge.</p>
</div>`,
      },
      {
        title: 'Test 2 — Energy Capstone',
        content: `
<h3>Test 2 — Capstone Theme: Renewable Energy from Human Behavior</h3>

<div class="level-card level-blue">
<h4>Question 1 — Personal Reflection</h4>
<p>"Are you the type of person who likes to complete your work near the deadline, or do you distribute it over time? Explain."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Be honest about your actual habit. Describe a specific week where your approach caused a problem or a success. Explain what you changed and what it taught you about yourself.</p>
</div>

<div class="level-card level-high-blue">
<h4>Question 2 — EDP *EDP*</h4>
<p>"In this semester you will select and solve a problem associated with energy. Explain how you will use the first two steps of the EDP to begin your energy project."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name Step 1 (Define) and Step 2 (Research). Give a specific energy problem you identified. Name actual sources you researched. Show how research changed or confirmed your initial hypothesis.</p>
</div>

<div class="level-card level-green">
<h4>Question 3 — Material Connection (Physics) *PH*</h4>
<p>"(PH.2.02) Egypt suffers from shortage of clean water. We can raise water from a well of depth (h) using a pump of power (P) through pipes of radius (r). Explain the relationship between each of these three factors and the amount of water pulled up."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Explain each factor separately using a physics law or equation. Show how P, r, and h each affect water output. Connect at least one factor to your actual capstone design.</p>
</div>

<div class="level-card level-yellow">
<h4>Question 4 — Material Connection (Math) *MA*</h4>
<p>"In your project, you are asked to produce at least 150 joules in at most 5 minutes. In Math you studied modeling with functions. Select a relation (linear or quadratic) and explain your choice."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name the function type. Write the equation with variables defined. Explain why this function fits your data pattern. Show how it would appear on a graph in your poster.</p>
</div>`,
      },
      {
        title: 'Test 3 — Recycling Capstone',
        content: `
<h3>Test 3 — Capstone Theme: Recycle and Retain Garbage</h3>

<div class="level-card level-blue">
<h4>Question 1 — Team Collaboration</h4>
<p>"Capstone requires teamwork. Each member has a role. What is your role in your Capstone group? Why did you choose this role?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name your exact role. Explain a specific skill that makes you suited for it. Give one example of how you performed this role well and one thing you want to improve.</p>
</div>

<div class="level-card level-high-blue">
<h4>Question 2 — EDP *EDP*</h4>
<p>"You are working on the Grand Challenge of recycling. Mention one design requirement you are working on this semester. Explain how you will test your prototype for it."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> State the design requirement with a measurable value (e.g. "the block must support a minimum load of 5kg"). Describe the exact test procedure — what you measure, how, and using what tool. Explain what result would count as success.</p>
</div>

<div class="level-card level-green">
<h4>Question 3 — Material Connection (Physics) *PH*</h4>
<p>"In Physics you studied the system of forces, equilibrium, and Newton's Third Law. Explain how you would use ONE of these concepts in your building block capstone."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> State the law clearly. Describe exactly how you applied it when testing your block (e.g. hanging a weight and measuring the reaction force). Explain what the results told you about your prototype's performance.</p>
</div>

<div class="level-card level-yellow">
<h4>Question 4 — Material Connection (Earth Science) *ES*</h4>
<p>"In Earth Science you are learning about comparing resources used by different countries to meet energy needs. How would you benefit from this in your capstone work about wasted energy?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name a specific country and its energy resource. Explain what you learned from comparing resources globally. Show how this learning directly influenced a decision in your capstone project.</p>
</div>`,
      },
      {
        title: 'Test 4 — Industry & Biomimicry',
        content: `
<h3>Test 4 — Capstone Theme: Improving Industry Using Nature (Biomimicry)</h3>

<div class="level-card level-blue">
<h4>Question 1 — Personal Reflection</h4>
<p>"It's very challenging to work on a new capstone this semester. What are the two most challenging personal aspects or skills you need to improve, and how can you improve them?"</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name two very specific skills (not generic ones like "time management"). For each, describe a moment this semester where the weakness caused a problem. For each, give a specific action you took or will take to improve.</p>
</div>

<div class="level-card level-high-blue">
<h4>Question 2 — EDP *EDP*</h4>
<p>"Your capstone focuses on replacing a traditional manufacturing process using a feedback control mechanism. Explain how the problem you chose is a good candidate for improvement by a feedback control mechanism."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Define what a feedback control mechanism is in your own words. Name your chosen industry. Explain the current inputs, process, and outputs. Identify which part your solution improves and why feedback control is the right method.</p>
</div>

<div class="level-card level-green">
<h4>Question 3 — Material Connection (Biology) *BI*</h4>
<p>"'Nature is the best teacher for us.' Do you agree? Explain why and support your answer with an example from industry."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Agree or disagree with a clear position. Give a specific biomimicry example (e.g. the Shinkansen bullet train nose modeled on the kingfisher beak — 15% less electricity, 10% faster). Connect the natural principle to an engineering solution.</p>
</div>

<div class="level-card level-yellow">
<h4>Question 4 — Material Connection (Chemistry) *CH*</h4>
<p>"In Chemistry you are learning about industrial chemical processes. Choose one process, explain it, and give an example of how it occurs in nature."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name a specific process (e.g. oxidation-reduction, electrolysis). Explain the chemistry clearly with an equation if possible. Give a natural example (e.g. photosynthesis: CO₂ + H₂O + light → O₂ + glucose). Show how this could apply to your capstone.</p>
</div>`,
      },
      {
        title: 'Test 5 — Mixed Topics',
        content: `
<h3>Test 5 — Mixed Capstone Topics (G10 + G11 + G12 style)</h3>

<div class="level-card level-blue">
<h4>Question 1 — Team Collaboration</h4>
<p>"To have a successful team, there are many factors: (1) Definite roles and responsibilities, (2) Mutual respect for different areas of expertise, (3) Good leadership skills. Pick ONE factor and show how it affected your team positively."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Choose one factor. Give a specific team moment where this factor was tested (e.g. a disagreement about the prototype design). Explain exactly what you did. Show the positive outcome with specific detail.</p>
</div>

<div class="level-card level-high-blue">
<h4>Question 2 — EDP *EDP*</h4>
<p>"During the first EDP step, we want to focus on the Grand Challenge. Water is one of the most valuable resources. Determine two other Grand Challenges affected by water availability and explain how increasing water sources could contribute to solving them."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name two Grand Challenges clearly (e.g. urban congestion, arid areas). For each, explain the specific mechanism by which more water solves or reduces the challenge. Use specific Egyptian geographic or population data if possible.</p>
</div>

<div class="level-card level-green">
<h4>Question 3 — Material Connection (Biology) *BI*</h4>
<p>"(BI.1.09) Each plant consists of many types of tissues adapted to their functions. Explain the similarities between plant tissue structure and the design of your project which is based on producing, storing, and implementing energy."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name and describe 2 plant tissues (e.g. epidermal, vascular). For each, identify the analogous component in your prototype (e.g. the circuit = vascular tissue, copper wire = xylem/phloem). Explain the functional similarity precisely.</p>
</div>

<div class="level-card level-yellow">
<h4>Question 4 — Material Connection (Chemistry) *CH*</h4>
<p>"(CH.2.04) You studied factors affecting chemical reaction rates. If your design requirements include decreasing cost and increasing productivity of a water purification process, suggest two factors affecting reaction rates that could achieve at least one design requirement. Explain the role of each."</p>
<p class="text-sm text-muted-foreground mt-2"><strong>What Blue looks like:</strong> Name two specific factors (concentration, temperature, surface area, catalyst). For each, state the relevant chemistry law or equation. Explain exactly how changing that factor in your purification process would reduce cost or increase productivity. Use numbers if possible.</p>
</div>`,
      },
    ],
    keyTakeaways: [
      'Every test has 4 questions: 1 Team/Reflection + 1 EDP + 2 Material Connection',
      'For EDP questions: always name the step, give a specific example, show what changed',
      'For Material Connection: Subject name → concept → equation if applicable → connection to your capstone',
      'For Team questions: your role → specific challenge → what you did → what you learned',
      'Practice by writing your own answer first, then compare it to the Blue-level hints',
    ],
  },

  'ai-prompts': {
    title: 'Using AI for Your Journal',
    subtitle: 'Use AI to think better, not to write for you',
    readingTime: '8 min',
    sections: [
      {
        title: 'What AI Can and Cannot Do',
        content: `
<h3>The simple rule</h3>
<div class="tip-box"><h4>💡 Use AI to: help you think, improve your language, get feedback</h4>
<p>AI can explain concepts you don't understand, suggest better words, give feedback on your writing, and help you see if your answer misses something. This is completely fine.</p></div>
<div class="mistake-box"><h4>❌ Do NOT use AI to: write your reflection for you</h4>
<p>Your reflection must come from your real experience. An AI cannot know what happened in your team, what mistake you made, or how you felt when your hypothesis failed. If you copy AI-generated reflection, it will sound generic — and evaluators who read hundreds of journals will notice immediately.</p></div>
<div class="level-card level-blue"><h4>The key distinction</h4>
<p>AI-generated: "I learned that teamwork requires communication and collaboration."<br/>
Your real reflection: "When my teammate dismissed my introduction without reading it, I felt hurt. I introduced 'effort appreciation' as a rule for our team and it changed our dynamic."<br/>
Only you can write the second version. That's why it gets Blue.</p></div>`,
      },
      {
        title: 'Good AI Prompts for Journals',
        content: `
<h3>Prompts that actually help</h3>
<div class="level-card level-blue"><h4>To check if your answer is Blue level:</h4>
<p>"Here is my journal answer: [paste your answer]. Does this show Learning Transfer, Personal Reflection, Team Collaboration, and EDP usage? What is missing or too vague?"</p></div>
<div class="level-card level-high-blue"><h4>To improve your language:</h4>
<p>"I wrote: [your sentence]. Can you rewrite this at an academic level while keeping the same meaning and my own voice?"</p></div>
<div class="level-card level-green"><h4>To understand a concept you don't get:</h4>
<p>"Explain [systematic error / Peltier effect / biodegradable materials] simply, then explain how it could connect to a water treatment capstone project."</p></div>
<div class="level-card level-yellow"><h4>To prepare for evaluator questions:</h4>
<p>"I am presenting a capstone project about [your project]. What are 5 tough questions an evaluator might ask, and what should a Blue-level answer include?"</p></div>`,
      },
      {
        title: 'AI Honesty Rule',
        content: `
<h3>One rule to always follow</h3>
<div class="level-card level-blue"><h4>Always treat AI output as a first draft</h4>
<p>If you use AI to help improve a sentence, read it carefully and make it sound like you. Add your specific project details. Remove anything generic. The final version must match your real experience.</p></div>
<div class="mistake-box"><h4>❌ Never do this</h4>
<p>Ask AI to write your full journal entry and submit it as is. Even if it sounds good, it lacks specific details from your real project. Evaluators will see that it is generic. You also won't be prepared when they ask follow-up questions at the exhibition.</p></div>
<div class="tip-box"><h4>💡 The best use of AI for journals</h4>
<p>Write your answer first — based on your real experience. Then ask AI: "Is this specific enough? Is any part too vague? What could I add to make this Blue level?" Then you revise. This way, the ideas stay yours, and AI helps you express them better.</p></div>`,
      },
    ],
    keyTakeaways: [
      'Use AI to: check your answer, improve your language, understand concepts',
      'Do NOT use AI to: write your reflection — it will sound generic and lose marks',
      'Always write your answer first, then use AI to improve it',
      'The best AI prompt: "What is missing or too vague in my answer to make it Blue level?"',
      'Your real specific experiences are what make a Blue journal — AI cannot invent them',
    ],
  },
}

type ChapterId = keyof typeof chapterContent

export default function ChapterPage() {
  const params = useParams()
  const chapterId = params.chapter as ChapterId
  const chapter = chapterContent[chapterId]
  const [currentSection, setCurrentSection] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)

  if (!chapter) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Chapter not found</h2>
          <p className="text-muted-foreground">This chapter doesn&apos;t exist yet.</p>
          <Link href="/bible">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
              <ChevronLeft className="w-4 h-4 mr-2" />Back to Bible
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const progress = ((currentSection + 1) / chapter.sections.length) * 100
  const chapterIndex = Object.keys(chapterContent).indexOf(chapterId) + 1

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sticky nav */}
        <div className="sticky top-20 z-40 glass rounded-2xl p-4 mb-8 border border-white/10">
          <div className="flex items-center justify-between">
            <Link href="/bible">
              <Button variant="ghost" size="sm" className="hover:bg-white/10">
                <ChevronLeft className="w-4 h-4 mr-2" />Back
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {currentSection + 1} / {chapter.sections.length}
              </span>
              <Progress value={progress} className="w-28" />
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost" size="icon"
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? 'text-purple-400' : ''}
              >
                <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-sm text-purple-400 font-medium">Chapter {chapterIndex}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />{chapter.readingTime}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2 gradient-text">{chapter.title}</h1>
            <p className="text-muted-foreground">{chapter.subtitle}</p>
          </div>

          {/* Section tabs */}
          <div className="flex gap-2 flex-wrap mb-6">
            {chapter.sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrentSection(i)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  currentSection === i
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="glass border-white/10 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-5">
                    {chapter.sections[currentSection].title}
                  </h2>
                  <div
                    className="bible-prose"
                    dangerouslySetInnerHTML={{ __html: chapter.sections[currentSection].content }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-between mb-10">
            <Button
              variant="outline" className="glass"
              onClick={() => setCurrentSection(s => Math.max(0, s - 1))}
              disabled={currentSection === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500"
              onClick={() => setCurrentSection(s => Math.min(chapter.sections.length - 1, s + 1))}
              disabled={currentSection === chapter.sections.length - 1}
            >
              Next<ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Key takeaways */}
          <Card className="glass border-white/10 mb-8">
            <CardContent className="p-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />Key Takeaways
              </h3>
              <div className="grid gap-3">
                {chapter.keyTakeaways.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chapter complete */}
          {currentSection === chapter.sections.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chapter Complete! 🎉</h3>
              <p className="text-muted-foreground mb-5 text-sm">
                Now apply these ideas to your actual journal entry.
              </p>
              <div className="flex justify-center gap-3">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Sparkles className="w-4 h-4 mr-2" />Practice Quiz
                </Button>
                <Link href="/bible">
                  <Button variant="outline" className="glass">
                    All Chapters<ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  )
}
