import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexusOS - The Control Tower for Your AI Agents',
  description: 'Ship AI agents with confidence. Get cryptographic identity, real-time audit logs, kill switches, and anomaly detection — in 3 lines of code.',
  keywords: 'AI agents, monitoring, audit logs, kill switch, compliance',
  authors: [{ name: 'NexusOS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-nexus-dark text-nexus-text font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
