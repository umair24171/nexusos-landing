'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Lock,
  ScrollText,
  Zap,
  Shield,
  AlertTriangle,
  AlertCircle,
  Eye,
  Github,
  Twitter,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('nodejs')

  return (
    <div className="bg-nexus-dark min-h-screen">

      {/* ══════════════════════════════
          NAV
      ══════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-nexus-dark/90 backdrop-blur border-b border-nexus-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 border border-nexus-cyan flex items-center justify-center">
                <span className="font-mono text-nexus-cyan text-xs font-bold">NX</span>
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-white uppercase">nexusos</span>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="nav-link">Features</a>
              <Link href="/pricing"  className="nav-link">Pricing</Link>
              <Link href="/docs"     className="nav-link">Docs</Link>
            </div>

            {/* CTA */}
            <Link
              href="https://app.nexusos.buildzn.com/register"
              className="btn-primary text-xs py-2 px-5"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden dot-grid">
        {/* Subtle radial fade over grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nexus-dark pointer-events-none" />
        {/* Cyan ambient glow top-center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-nexus-cyan/[0.04] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: headline + CTAs */}
            <div className="animate-enter">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-nexus-border px-3 py-1 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-nexus-cyan live-dot" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-nexus-cyan">
                  Now in Public Beta
                </span>
              </div>

              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                The Control Tower<br />
                for Your{' '}
                <span className="gradient-text">AI Agents</span>
              </h1>

              <p className="font-sans text-lg text-nexus-text leading-relaxed mb-8 max-w-lg">
                Ship AI agents with confidence. Cryptographic identity, real-time audit logs,
                kill switches, and anomaly detection — in 3 lines of code.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="https://app.nexusos.buildzn.com/register"
                  className="btn-primary"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/docs" className="btn-outline">
                  View Docs
                </Link>
              </div>

              <p className="font-mono text-[11px] text-nexus-muted">
                Free plan available — no credit card required
              </p>
            </div>

            {/* Right: terminal */}
            <div className="animate-enter" style={{ animationDelay: '120ms' }}>
              <div className="terminal-window shadow-cyan-glow">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="font-mono text-[11px] text-nexus-muted ml-2">nexus-agent.js</span>
                  {/* Live status */}
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-cyan live-dot" />
                    <span className="font-mono text-[10px] text-nexus-cyan uppercase tracking-widest">live</span>
                  </div>
                </div>
                <div className="terminal-content">
                  <div>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-property">agent</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-keyword">new</span>{' '}
                    <span className="code-builtin">NexusAgent</span>
                    <span className="code-keyword">(&#123;</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">apiKey</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-string">'nxs_live_xxxx'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-property">agentId</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-string">'nexus_agt_xxxx'</span>
                  </div>
                  <div><span className="code-keyword">&#125;);</span></div>

                  <div className="mt-4">
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">logLLMCall</span>
                    <span className="code-keyword">(&#123;</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">model</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-string">'gpt-4'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-property">tokensUsed</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-number">1240</span>
                  </div>
                  <div><span className="code-keyword">&#125;);</span></div>

                  <div className="mt-4">
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-property">alive</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">isAlive</span>
                    <span className="code-keyword">();</span>
                    {' '}
                    <span className="code-comment">// kill switch</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-nexus-muted text-[11px]">
                    <span className="text-nexus-cyan">$</span>
                    <span>agent registered in</span>
                    <span className="text-nexus-green">142ms</span>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>

              {/* Stats row below terminal */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Agents Monitored", value: "12,400+" },
                  { label: "Logs Processed",   value: "84M+"    },
                  { label: "Kill Switches",     value: "99.9%"   },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-nexus-border p-3 text-center">
                    <p className="font-mono text-lg font-bold text-nexus-cyan">{value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-nexus-muted mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROBLEM SECTION
      ══════════════════════════════ */}
      <section className="py-20 border-y border-nexus-border bg-nexus-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-3">The Problem</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
              Shipping without NexusOS?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'No Visibility',
                description: 'You have no idea what your agents are doing. No logs, no traces, no way to debug when things go wrong.',
              },
              {
                icon: AlertCircle,
                title: 'No Control',
                description: "A rogue agent can run indefinitely. No kill switch, no pause, no rate limiting. It's your API bill.",
              },
              {
                icon: AlertTriangle,
                title: 'No Audit Trail',
                description: "When something goes wrong, you have nothing. No evidence, no compliance records, no forensics.",
              },
            ].map((p, i) => (
              <div key={i} className="problem-card">
                <p.icon className="w-7 h-7 text-nexus-red mb-4 opacity-80" />
                <h3 className="font-mono text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="font-sans text-sm text-nexus-text leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FEATURES
      ══════════════════════════════ */}
      <section id="features" className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-3">Features</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
              Everything to govern AI agents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Lock,
                title: 'Cryptographic Identity',
                description: 'Every agent gets a unique cryptographic identity. Impossible to spoof, impossible to impersonate.',
              },
              {
                icon: ScrollText,
                title: 'Real-Time Audit Logs',
                description: 'Every action logged immutably with a tamper-proof hash chain. Full forensics, always.',
              },
              {
                icon: Zap,
                title: 'Kill Switch',
                description: 'One click to stop a rogue agent. Agents check in on every action; SDK halts immediately if killed.',
              },
              {
                icon: Shield,
                title: 'Permission Scoping',
                description: 'Define which tools, domains, and models an agent can use. Block everything else automatically.',
              },
              {
                icon: AlertTriangle,
                title: 'Anomaly Detection',
                description: 'Rate exceeded, unknown tool, blocked domain — real-time alerts before things escalate.',
              },
              {
                icon: ChevronRight,
                title: 'SDK in 3 Lines',
                description: "npm install nexusos-sdk and you're live. LangChain, OpenAI, AutoGPT, custom — we support all.",
              },
            ].map((f, i) => (
              <div key={i} className="feature-card group">
                <f.icon className="w-8 h-8 text-nexus-cyan mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-mono text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-nexus-text leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CODE EXAMPLES
      ══════════════════════════════ */}
      <section className="py-20 bg-nexus-darker border-y border-nexus-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-3">Integration</p>
            <h2 className="font-mono text-3xl font-bold text-white mb-2">
              Integrate in minutes, not days
            </h2>
            <p className="font-sans text-nexus-text text-sm">Copy-paste ready for your language of choice</p>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 mb-0 border-b border-nexus-border">
            {['nodejs', 'python'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button capitalize ${activeTab === tab ? 'active' : ''}`}
              >
                {tab === 'nodejs' ? 'Node.js' : 'Python'}
              </button>
            ))}
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="font-mono text-[11px] text-nexus-muted ml-2">
                {activeTab === 'nodejs' ? 'agent.js' : 'agent.py'}
              </span>
            </div>
            <div className="terminal-content">
              {activeTab === 'nodejs' ? (
                <>
                  <div>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-keyword">{'{'}</span>{' '}
                    <span className="code-property">NexusAgent</span>{' '}
                    <span className="code-keyword">{'}'}</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-function">require</span>
                    <span className="code-keyword">('</span>
                    <span className="code-string">nexusos-sdk</span>
                    <span className="code-keyword">');</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-property">agent</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-keyword">new</span>{' '}
                    <span className="code-builtin">NexusAgent</span>
                    <span className="code-keyword">(&#123;</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">apiKey</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-string">'nxs_live_xxxx'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-property">agentId</span>
                    <span className="code-keyword">:</span>{' '}
                    <span className="code-string">'nexus_agt_xxxx'</span>
                  </div>
                  <div><span className="code-keyword">&#125;);</span></div>
                  <div className="mt-4">
                    <span className="code-comment">// Auto-trace any function</span>
                  </div>
                  <div>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-property">result</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">trace</span>
                    <span className="code-keyword">(</span>
                    <span className="code-string">'search_news'</span>
                    <span className="code-keyword">,</span>{' '}
                    <span className="code-keyword">async</span>{' '}
                    <span className="code-keyword">() =&gt;</span>{' '}
                    <span className="code-keyword">{'{'}</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">return</span>{' '}
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-function">searchNews</span>
                    <span className="code-keyword">(</span>
                    <span className="code-string">'gold price'</span>
                    <span className="code-keyword">);</span>
                  </div>
                  <div>
                    <span className="code-keyword">{'}'}</span>
                    <span className="code-keyword">);</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-comment">// Kill switch check</span>
                  </div>
                  <div>
                    <span className="code-keyword">if</span>{' '}
                    <span className="code-keyword">(!</span>
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">isAlive</span>
                    <span className="code-keyword">())</span>{' '}
                    <span className="code-property">process</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">exit</span>
                    <span className="code-keyword">(</span>
                    <span className="code-number">0</span>
                    <span className="code-keyword">);</span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="code-keyword">from</span>{' '}
                    <span className="code-property">nexusos</span>{' '}
                    <span className="code-keyword">import</span>{' '}
                    <span className="code-builtin">NexusAgent</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-property">agent</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-builtin">NexusAgent</span>
                    <span className="code-keyword">(</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">api_key</span>
                    <span className="code-keyword">=</span>
                    <span className="code-string">"nxs_live_xxxx"</span>,
                  </div>
                  <div className="ml-4">
                    <span className="code-property">agent_id</span>
                    <span className="code-keyword">=</span>
                    <span className="code-string">"nexus_agt_xxxx"</span>
                  </div>
                  <div><span className="code-keyword">)</span></div>
                  <div className="mt-4">
                    <span className="code-keyword">@</span>
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">monitor</span>
                    <span className="code-keyword">(</span>
                    <span className="code-property">tool</span>
                    <span className="code-keyword">=</span>
                    <span className="code-string">"web_search"</span>
                    <span className="code-keyword">)</span>
                  </div>
                  <div>
                    <span className="code-keyword">def</span>{' '}
                    <span className="code-function">search_web</span>
                    <span className="code-keyword">(</span>
                    <span className="code-property">query</span>
                    <span className="code-keyword">):</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-keyword">return</span>{' '}
                    <span className="code-property">results</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-keyword">with</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">trace</span>
                    <span className="code-keyword">(</span>
                    <span className="code-string">"process_data"</span>
                    <span className="code-keyword">)</span>{' '}
                    <span className="code-keyword">as</span>{' '}
                    <span className="code-property">t</span>
                    <span className="code-keyword">:</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">result</span>{' '}
                    <span className="code-keyword">=</span>{' '}
                    <span className="code-function">process_data</span>
                    <span className="code-keyword">()</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">t</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">set_output</span>
                    <span className="code-keyword">(</span>
                    <span className="code-property">result</span>
                    <span className="code-keyword">)</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING
      ══════════════════════════════ */}
      <section className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-3">Pricing</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-3">
              Simple, transparent pricing
            </h2>
            <p className="font-sans text-nexus-text text-sm">Choose the plan that fits your scale</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                name: 'Free',
                price: '0',
                features: ['3 agents', '10K logs/mo', '7-day retention', 'Community support'],
              },
              {
                name: 'Starter',
                price: '29',
                features: ['10 agents', '100K logs/mo', '30-day retention', 'Email alerts'],
              },
              {
                name: 'Pro',
                price: '99',
                popular: true,
                features: ['50 agents', '1M logs/mo', '90-day retention', 'Webhooks', 'Custom integrations'],
              },
              {
                name: 'Enterprise',
                price: '499',
                features: ['Unlimited agents', 'Unlimited logs', '365-day retention', 'SLA', 'Dedicated support'],
              },
            ].map((plan, i) => (
              <div key={i} className={`pricing-card relative ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && (
                  <div className="badge-popular">Most Popular</div>
                )}

                <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-2">
                  {plan.name}
                </p>
                <div className="mb-6">
                  <span className="font-mono text-4xl font-bold text-white">${plan.price}</span>
                  <span className="font-mono text-xs text-nexus-muted">/mo</span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <span className="text-nexus-cyan mt-0.5 text-xs">✓</span>
                      <span className="font-sans text-sm text-nexus-text">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://app.nexusos.buildzn.com/register"
                  className={plan.popular ? 'btn-primary block text-center text-xs py-2' : 'btn-secondary block text-center text-xs py-2'}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="py-20 border-t border-nexus-border bg-nexus-darker relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-nexus-cyan/[0.04] blur-[60px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-4">
            Get Started
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-4">
            Start monitoring in 5 minutes
          </h2>
          <p className="font-sans text-nexus-text mb-8">
            Join developers already using NexusOS to ship AI agents with confidence.
          </p>
          <Link
            href="https://app.nexusos.buildzn.com/register"
            className="btn-primary text-sm"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="bg-nexus-dark border-t border-nexus-border py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-6 border border-nexus-cyan flex items-center justify-center">
                  <span className="font-mono text-nexus-cyan text-[10px] font-bold">NX</span>
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-white uppercase">nexusos</span>
              </div>
              <p className="font-sans text-sm text-nexus-text">
                The control tower for your AI agents.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-4">Product</p>
              <ul className="space-y-2.5 font-sans text-sm text-nexus-text">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-4">Company</p>
              <ul className="space-y-2.5 font-sans text-sm text-nexus-text">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted mb-4">Legal</p>
              <ul className="space-y-2.5 font-sans text-sm text-nexus-text">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-nexus-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[11px] text-nexus-muted">
              © 2026 NexusOS. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-nexus-muted hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-nexus-muted hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
