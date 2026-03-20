import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NexusOS — The Control Tower for Your AI Agents',
  description: 'Ship AI agents with confidence. Cryptographic identity, real-time audit logs, kill switches, and anomaly detection — in 3 lines of code.',
  keywords: 'AI agents, monitoring, audit logs, kill switch, compliance',
  authors: [{ name: 'NexusOS' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-nexus-dark text-nexus-text font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
