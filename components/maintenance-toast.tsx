'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function MaintenanceToast() {
  const [visible, setVisible] = useState(false)

  // slight delay so it doesn't pop instantly on page load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-24 sm:bottom-6 left-1/2 z-[9998] -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm"
        >
          <div
            className="relative flex items-start gap-3 rounded-2xl border border-pink-500/30 px-4 py-3.5 shadow-2xl shadow-pink-500/10"
            style={{
              background: 'linear-gradient(135deg, rgba(20,0,30,0.96) 0%, rgba(40,0,50,0.94) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* glow orb */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />

            {/* emoji */}
            <motion.span
              className="text-2xl shrink-0 mt-0.5"
              animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
              transition={{ duration: 1.4, delay: 1.4, repeat: Infinity, repeatDelay: 4 }}
            >
              💕
            </motion.span>

            {/* text */}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold text-pink-200 leading-snug"
                dir="rtl"
                lang="ar"
              >
                معلش والله الـ AI chatbot فيه مشاكل وبيتصلح
              </p>
              <p className="text-[11px] text-pink-400/70 mt-0.5">
                Sorry for the inconvenience — fix in progress 🛠️
              </p>
            </div>

            {/* close */}
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 mt-0.5 text-pink-400/50 hover:text-pink-300 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
