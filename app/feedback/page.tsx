'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  MessageSquare, Phone, Mail, Send,
  Sparkles, Code, Rocket, Heart,
  CheckCircle, Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    // Opens email client with the form data pre-filled
    const subject = encodeURIComponent(`NovaSTEM Feedback from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:eyad.1625205@stemredsea.moe.edu.eg?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── About Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-pink-900/50 border border-white/10 p-10 mb-12"
        >
          {/* Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About the Creator
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Hey! I&apos;m{' '}
              <span className="gradient-text">Eyad</span> 👋
            </h1>

            {/* Bio text */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A STEM student from Egypt who&apos;s obsessed with{' '}
                <span className="text-foreground font-medium">coding, AI, and building cool stuff</span>{' '}
                that actually helps people.
              </p>
              <p>
                I got tired of jumping between a million random websites just to find one decent lesson,
                so I thought — <span className="text-purple-400 font-semibold">&quot;Nah... why not build my own?&quot;</span>{' '}
                That&apos;s how this website was born.
              </p>
              <p>
                My goal is pretty simple:{' '}
                <span className="text-foreground font-medium">
                  make studying way less painful and way more organized.
                </span>{' '}
                I want this place to be the go-to hub where students can learn, explore, practice,
                and level up without wasting hours searching the internet.
              </p>
              <p>
                I&apos;m also using this project to push my coding skills, experiment with new tech,
                and prove that <span className="text-foreground font-medium">students can build things that actually make a difference.</span>
              </p>
              <p>
                This is just the beginning. I&apos;ve got a ton of ideas coming — AI tools, better learning
                resources, interactive features, and a whole lot more.
              </p>
            </div>

            {/* Sign-off */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 inline-block">
              <p className="text-lg font-medium">
                So yeah... welcome to my little corner of the internet.
              </p>
              <p className="text-2xl font-bold gradient-text mt-1">
                Learn. Build. Level up. 🚀💜
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: Code,    label: 'Full-Stack Dev' },
                { icon: Sparkles, label: 'AI Enthusiast' },
                { icon: Rocket,  label: 'STEM Student' },
                { icon: Heart,   label: 'Egypt 🇪🇬' },
              ].map(tag => (
                <div
                  key={tag.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm"
                >
                  <tag.icon className="w-4 h-4 text-purple-400" />
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Contact + Form grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Have feedback, a feature idea, or just want to say hi? Reach out — I read everything.
            </p>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'eyad.1625205@stemredsea.moe.edu.eg',
                href: 'mailto:eyad.1625205@stemredsea.moe.edu.eg',
              },
              {
                icon: Phone,
                label: 'Phone / WhatsApp',
                value: '+20 103 608 8928',
                href: 'https://wa.me/201036088928',
              },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer mb-3">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium break-all">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Response time note */}
            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-sm text-muted-foreground">
              <span className="text-purple-400 font-medium">Usually replies within 24 hours.</span>
              {' '}All feedback helps shape what gets built next.
            </div>
          </motion.div>

          {/* Feedback form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <Card className="glass border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Send Feedback</h3>
                    <p className="text-xs text-muted-foreground">Your message opens in your email app</p>
                  </div>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Thanks! 🎉</h4>
                    <p className="text-muted-foreground text-sm mb-6">Your email client should have opened. Talk soon!</p>
                    <Button
                      variant="outline"
                      className="glass"
                      onClick={() => setSent(false)}
                    >
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Your name</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Ahmed"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60 placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Your email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60 placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Your feedback, ideas, bug reports, or just a hello..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60 placeholder:text-muted-foreground resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 h-11 font-semibold"
                    >
                      {sending
                        ? <Loader2 className="w-4 h-4 animate-spin" />
                        : <><Send className="w-4 h-4 mr-2" />Send Feedback</>}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
