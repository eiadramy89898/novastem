// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AIAssistant } from '@/components/ai-assistant'
import { Navbar } from '@/components/navbar'
import { ParticleBackground } from '@/components/particle-background'
import { MaintenanceToast } from '@/components/maintenance-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'NovaSTEM - AI-Powered STEM Journal Platform',
  description: 'Create professional STEM journals with AI assistance. Learn research, scientific writing, and data analysis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ParticleBackground />
          <Navbar />
          <main className="relative min-h-screen">
            {children}
          </main>
          <AIAssistant />
          <MaintenanceToast />
        </ThemeProvider>
      </body>
    </html>
  )
}
