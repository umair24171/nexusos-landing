'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, ChevronRight } from 'lucide-react'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('quick-start')

  const sections = [
    { id: 'quick-start', title: 'Quick Start' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'agents-api', title: 'Agents API' },
    { id: 'logging', title: 'Logging' },
    { id: 'kill-switch', title: 'Kill Switch' },
    { id: 'sdks', title: 'SDKs' },
    { id: 'webhooks', title: 'Webhooks' },
    { id: 'billing', title: 'Billing' },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'quick-start':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>
              <p className="text-nexus-text mb-6">
                Get up and running with NexusOS in less than 5 minutes. This guide walks you through the essential steps.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Installation</h3>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-xs text-nexus-muted ml-2">bash</span>
                </div>
                <div className="terminal-content">
                  <div>
                    <span className="code-keyword">$</span> <span className="code-function">npm</span> <span className="code-property">install</span> <span className="code-string">nexusos-sdk</span>
                  </div>
                  <div className="mt-2">
                    <span className="code-keyword">$</span> <span className="code-function">npm</span> <span className="code-property">install</span> <span className="code-string">@types/node</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Create Your First Agent</h3>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-xs text-nexus-muted ml-2">agent.ts</span>
                </div>
                <div className="terminal-content">
                  <div>
                    <span className="code-keyword">import</span> <span className="code-keyword">{'{'}</span> <span className="code-property">NexusAgent</span> <span className="code-keyword">{'}'}</span> <span className="code-keyword">from</span> <span className="code-string">'nexusos-sdk'</span><span className="code-keyword">;</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-keyword">const</span> <span className="code-property">agent</span> <span className="code-keyword">=</span> <span className="code-keyword">new</span> <span className="code-builtin">NexusAgent</span><span className="code-keyword">({'</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">apiKey</span><span className="code-keyword">:</span> <span className="code-string">'nxs_live_xxxx'</span><span className="code-keyword">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">agentId</span><span className="code-keyword">:</span> <span className="code-string">'nexus_agt_xxxx'</span>
                  </div>
                  <div>
                    <span className="code-keyword">});</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-comment">// Your agent is now live</span>
                  </div>
                </div>
              </div>
              <p className="text-nexus-text mt-4">
                That's it! Your agent is now connected to NexusOS and all its actions are being logged and monitored.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Getting Your Credentials</h3>
              <ol className="space-y-3 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">1.</span>
                  <span>Sign up at nexusos.dev and create a project</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">2.</span>
                  <span>Navigate to the API Keys section in your dashboard</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">3.</span>
                  <span>Create a new API key and agent ID (use the generated values)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">4.</span>
                  <span>Store them in your .env file (never commit to Git!)</span>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Next Steps</h3>
              <ul className="space-y-3 text-nexus-text">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  <button onClick={() => setActiveSection('authentication')} className="hover:text-white">
                    Learn about authentication and security
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  <button onClick={() => setActiveSection('agents-api')} className="hover:text-white">
                    Explore the full Agents API
                  </button>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  <button onClick={() => setActiveSection('logging')} className="hover:text-white">
                    Configure logging and audit trails
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )

      case 'authentication':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Authentication</h2>
              <p className="text-nexus-text mb-6">
                NexusOS uses API keys for authentication. Each agent gets a cryptographically unique identifier that cannot be spoofed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">API Key Formats</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-nexus-card border border-nexus-border">
                  <p className="text-white font-mono text-sm">nxs_live_xxxx</p>
                  <p className="text-nexus-text text-sm mt-2">Production API key</p>
                </div>
                <div className="p-4 rounded-lg bg-nexus-card border border-nexus-border">
                  <p className="text-white font-mono text-sm">nxs_test_xxxx</p>
                  <p className="text-nexus-text text-sm mt-2">Test/development API key</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Setting Environment Variables</h3>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-xs text-nexus-muted ml-2">.env</span>
                </div>
                <div className="terminal-content">
                  <div>
                    <span className="code-property">NEXUS_API_KEY</span><span className="code-keyword">=</span><span className="code-string">nxs_live_xxxx</span>
                  </div>
                  <div>
                    <span className="code-property">NEXUS_AGENT_ID</span><span className="code-keyword">=</span><span className="code-string">nexus_agt_xxxx</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Security Best Practices</h3>
              <ul className="space-y-3 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Never commit API keys to version control. Use .env files and .gitignore</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Rotate your API keys regularly (monthly recommended)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Use separate keys for development, staging, and production</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>All API requests are encrypted with TLS 1.3</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Each agent gets a cryptographic signature that's verified on every call</span>
                </li>
              </ul>
            </div>
          </div>
        )

      case 'agents-api':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Agents API</h2>
              <p className="text-nexus-text mb-6">
                The core API for managing and monitoring your agents. All operations are immutable and tamper-proof.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Core Methods</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-nexus-border bg-nexus-card/50">
                  <p className="text-white font-mono text-sm mb-3">agent.trace(name, fn)</p>
                  <p className="text-nexus-text mb-4">Wrap an async function to automatically trace its execution</p>
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot red" />
                      <div className="terminal-dot yellow" />
                      <div className="terminal-dot green" />
                      <span className="text-xs text-nexus-muted ml-2">example.ts</span>
                    </div>
                    <div className="terminal-content">
                      <div>
                        <span className="code-keyword">const</span> <span className="code-property">result</span> <span className="code-keyword">=</span> <span className="code-keyword">await</span> <span className="code-property">agent</span><span className="code-keyword">.</span><span className="code-function">trace</span><span className="code-keyword">('search', async () => {'{'}</span>
                      </div>
                      <div className="ml-4">
                        <span className="code-keyword">return</span> <span className="code-keyword">await</span> <span className="code-function">searchAPI</span><span className="code-keyword">('query');</span>
                      </div>
                      <div>
                        <span className="code-keyword">{'}'});</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-nexus-border bg-nexus-card/50">
                  <p className="text-white font-mono text-sm mb-3">agent.isAlive()</p>
                  <p className="text-nexus-text mb-4">Check if the agent should continue running. Returns false if killed.</p>
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot red" />
                      <div className="terminal-dot yellow" />
                      <div className="terminal-dot green" />
                      <span className="text-xs text-nexus-muted ml-2">example.ts</span>
                    </div>
                    <div className="terminal-content">
                      <div>
                        <span className="code-keyword">if</span> <span className="code-keyword">(!</span><span className="code-keyword">await</span> <span className="code-property">agent</span><span className="code-keyword">.</span><span className="code-function">isAlive</span><span className="code-keyword">())</span> <span className="code-keyword">{'{'}</span>
                      </div>
                      <div className="ml-4">
                        <span className="code-keyword">console</span><span className="code-keyword">.</span><span className="code-function">log</span><span className="code-keyword">('Agent killed')</span>
                      </div>
                      <div className="ml-4">
                        <span className="code-property">process</span><span className="code-keyword">.</span><span className="code-function">exit</span><span className="code-keyword">(0);</span>
                      </div>
                      <div>
                        <span className="code-keyword">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'logging':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Logging & Audit Trails</h2>
              <p className="text-nexus-text mb-6">
                Every action is logged immutably with a cryptographic hash chain. Your audit trail is tamper-proof.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Log Types</h3>
              <ul className="space-y-4 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">LLM Calls</span>
                  <span>Track every AI model invocation with tokens, latency, and cost</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">Tool Executions</span>
                  <span>Log all tool/function calls with inputs and outputs</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">Agent State</span>
                  <span>Capture agent decisions and reasoning</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">Errors & Anomalies</span>
                  <span>Automatic detection and alerting</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Log Retention</h3>
              <div className="p-4 rounded-lg bg-nexus-card border border-nexus-border">
                <p className="text-nexus-text">
                  <strong>Free:</strong> 7 days | <strong>Starter:</strong> 30 days | <strong>Pro:</strong> 90 days | <strong>Enterprise:</strong> 365 days + export
                </p>
              </div>
            </div>
          </div>
        )

      case 'kill-switch':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Kill Switch</h2>
              <p className="text-nexus-text mb-6">
                Instantly stop a rogue agent with a single click. The agent checks in regularly and will halt immediately if killed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">How It Works</h3>
              <ol className="space-y-4 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">1.</span>
                  <span>Agent periodically calls isAlive() to check its status</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">2.</span>
                  <span>When you click "Kill Agent" in the dashboard, the status flips</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">3.</span>
                  <span>Next isAlive() call returns false, agent halts immediately</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500 font-bold">4.</span>
                  <span>All in-flight operations are cancelled gracefully</span>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Typical Response Time</h3>
              <p className="text-nexus-text">
                Kill signals are delivered in under 100ms. Most agents will halt within 1 second of the kill signal.
              </p>
            </div>
          </div>
        )

      case 'sdks':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">SDKs</h2>
              <p className="text-nexus-text mb-6">
                Official SDKs for Node.js, Python, and more. Community SDKs also available.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Official SDKs</h3>
              <div className="space-y-4">
                {[
                  { name: 'Node.js / TypeScript', repo: 'nexusos/sdk-nodejs' },
                  { name: 'Python', repo: 'nexusos/sdk-python' },
                  { name: 'Go', repo: 'nexusos/sdk-go' },
                  { name: 'Java', repo: 'nexusos/sdk-java' },
                ].map((sdk, i) => (
                  <div key={i} className="p-4 rounded-lg bg-nexus-card border border-nexus-border hover:border-blue-600 transition-colors">
                    <p className="text-white font-semibold">{sdk.name}</p>
                    <p className="text-nexus-text text-sm">github.com/{sdk.repo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'webhooks':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Webhooks</h2>
              <p className="text-nexus-text mb-6">
                Real-time event notifications for your agents. Triggered for critical events like anomalies, errors, and state changes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Webhook Events</h3>
              <ul className="space-y-3 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>agent.created — New agent activated</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>agent.killed — Agent manually stopped</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>anomaly.detected — Rate limit exceeded, unknown tool, etc.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>error.occurred — Unhandled exception</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>quota.exceeded — Monthly quota reached</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Available on</h3>
              <p className="text-nexus-text">Starter plan and above</p>
            </div>
          </div>
        )

      case 'billing':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Billing</h2>
              <p className="text-nexus-text mb-6">
                Simple, usage-based pricing. Only pay for what you use.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Billing Cycles</h3>
              <p className="text-nexus-text mb-4">
                We bill monthly on your subscription anniversary date. Annual plans are discounted 20%.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">What Gets Counted</h3>
              <ul className="space-y-3 text-nexus-text">
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Active agents per month (billed on day 1)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>Log entries (counted in real-time, capped by plan)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-500">•</span>
                  <span>API requests above plan limits ($0.01 per 1000 requests)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Overage Handling</h3>
              <p className="text-nexus-text">
                We never stop your agents or drop logs. When you exceed limits, we notify you and you can upgrade anytime.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-nexus-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-nexus-dark/80 backdrop-blur border-b border-nexus-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              NexusOS
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#features" className="text-nexus-text hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-nexus-text hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-nexus-text hover:text-white transition-colors">
                Docs
              </Link>
            </div>

            <Link href="#" className="btn-primary">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-nexus-border bg-nexus-darker min-h-screen sticky top-16">
          <div className="p-6 space-y-2">
            <p className="text-xs font-semibold text-nexus-muted uppercase tracking-wide mb-4">Documentation</p>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-nexus-text hover:text-white hover:bg-nexus-card'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden p-4 border-t border-nexus-border bg-nexus-darker">
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-nexus-card border border-nexus-border text-white"
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>

      {/* Footer */}
      <footer className="bg-nexus-darker border-t border-nexus-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 font-bold text-white mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  N
                </div>
                NexusOS
              </div>
              <p className="text-nexus-text text-sm">
                The control tower for your AI agents
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-nexus-text text-sm">
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-nexus-text text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-nexus-text text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-nexus-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-nexus-muted text-sm">
                Copyright 2024 NexusOS. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-nexus-text hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-nexus-text hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
