'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Lock,
  ScrollText,
  Zap,
  Shield,
  AlertTriangle,
  Zap as ZapIcon,
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
              <a href="#features" className="text-nexus-text hover:text-white transition-colors">
                Features
              </a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-nexus-dark pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Control Tower for Your
              <br />
              <span className="gradient-text">AI Agents</span>
            </h1>
            <p className="text-lg md:text-xl text-nexus-text max-w-3xl mx-auto mb-8">
              Ship AI agents with confidence. Get cryptographic identity, real-time audit logs,
              kill switches, and anomaly detection — in 3 lines of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="#" className="btn-primary text-lg">
                Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/docs" className="btn-outline text-lg">
                View Documentation
              </Link>
            </div>

            <p className="text-sm text-nexus-muted">
              Free plan available — no credit card required
            </p>
          </div>

          {/* Terminal Code Block */}
          <div className="max-w-2xl mx-auto">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="text-xs text-nexus-muted ml-2">nexus-agent.js</span>
              </div>
              <div className="terminal-content">
                <div>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-property">agent</span>{' '}
                  <span className="code-keyword">=</span>{' '}
                  <span className="code-keyword">new</span>{' '}
                  <span className="code-builtin">NexusAgent</span>
                  <span className="code-keyword">(&#123;&#39;</span>
                </div>
                <div className="ml-4">
                  <span className="code-property">apiKey</span>
                  <span className="code-keyword">:</span> <span className="code-string">'nxs_live_xxxx'</span>,
                </div>
                <div className="ml-4">
                  <span className="code-property">agentId</span>
                  <span className="code-keyword">:</span> <span className="code-string">'nexus_agt_xxxx'</span>
                </div>
                <div>
                  <span className="code-keyword">});</span>
                </div>
                <div className="mt-4">
                  <span className="code-keyword">await</span>{' '}
                  <span className="code-property">agent</span>
                  <span className="code-keyword">.</span>
                  <span className="code-function">logLLMCall</span>
                  <span className="code-keyword">(&#123;&#39;</span>
                </div>
                <div className="ml-4">
                  <span className="code-property">model</span>
                  <span className="code-keyword">:</span> <span className="code-string">'gpt-4'</span>,
                </div>
                <div className="ml-4">
                  <span className="code-property">tokensUsed</span>
                  <span className="code-keyword">:</span> <span className="code-number">1240</span>
                </div>
                <div>
                  <span className="code-keyword">});</span>
                </div>
                <div className="mt-4">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-property">alive</span>{' '}
                  <span className="code-keyword">=</span>{' '}
                  <span className="code-keyword">await</span>{' '}
                  <span className="code-property">agent</span>
                  <span className="code-keyword">.</span>
                  <span className="code-function">isAlive</span>
                  <span className="code-keyword">();</span> <span className="code-comment">// Kill switch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-nexus-darker border-y border-nexus-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Shipping AI agents without NexusOS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'No Visibility',
                description:
                  'You have no idea what your agents are doing. No logs, no traces, no way to debug when things go wrong.',
              },
              {
                icon: AlertCircle,
                title: 'No Control',
                description:
                  'A rogue agent can keep running indefinitely. There\'s no kill switch, no pause, no rate limiting.',
              },
              {
                icon: AlertTriangle,
                title: 'No Audit Trail',
                description:
                  'When something goes wrong, you have nothing. No evidence, no compliance records, no forensics.',
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-red-900/30 bg-red-950/10 hover:border-red-700/50 transition-all"
              >
                <problem.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-nexus-text">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Everything you need to govern AI agents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Cryptographic Agent Identity',
                description:
                  'Every agent gets a unique cryptographic identity. Impossible to spoof, impossible to impersonate.',
              },
              {
                icon: ScrollText,
                title: 'Real-Time Audit Logs',
                description:
                  'Every action your agent takes is logged immutably with a tamper-proof hash chain. Full forensics, always.',
              },
              {
                icon: Zap,
                title: 'Kill Switch',
                description:
                  'One click to stop a rogue agent dead in its tracks. Agents check in; if killed, the SDK halts immediately.',
              },
              {
                icon: Shield,
                title: 'Permission Scoping',
                description:
                  'Define exactly which tools, domains, and models an agent can use. Block everything else automatically.',
              },
              {
                icon: AlertTriangle,
                title: 'Anomaly Detection',
                description:
                  'Rate exceeded, unknown tool used, blocked domain called — get alerted in real-time before things escalate.',
              },
              {
                icon: ChevronRight,
                title: 'SDK in 3 Lines',
                description:
                  'npm install nexusos-sdk and you\'re live. Works with LangChain, OpenAI, AutoGPT, or any custom agent.',
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card group">
                <feature.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-nexus-text text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-20 bg-nexus-darker border-y border-nexus-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Integrate in minutes, not days
          </h2>
          <p className="text-center text-nexus-text mb-12">
            Copy-paste ready examples for your language of choice
          </p>

          <div className="flex gap-4 mb-8 border-b border-nexus-border">
            {['nodejs', 'python'].map((tab) => (
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
              <span className="text-xs text-nexus-muted ml-2">
                {activeTab === 'nodejs' ? 'agent.js' : 'agent.py'}
              </span>
            </div>
            <div className="terminal-content">
              {activeTab === 'nodejs' ? (
                <>
                  <div>
                    <span className="code-keyword">const</span> <span className="code-keyword">{'{'}</span>{' '}
                    <span className="code-property">NexusAgent</span> <span className="code-keyword">{'}'}</span>{' '}
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
                    <span className="code-keyword">(&#123;&#39;</span>
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
                  <div>
                    <span className="code-keyword">});</span>
                  </div>
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
                    <span className="code-keyword">async</span> <span className="code-keyword">() =></span>{' '}
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
                    <span className="code-keyword">if</span> <span className="code-keyword">(!</span>
                    <span className="code-keyword">await</span>{' '}
                    <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">isAlive</span>
                    <span className="code-keyword">())</span> <span className="code-property">process</span>
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
                    <span className="code-keyword">from</span> <span className="code-property">nexusos</span>{' '}
                    <span className="code-keyword">import</span> <span className="code-builtin">NexusAgent</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-property">agent</span> <span className="code-keyword">=</span>{' '}
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
                  <div>
                    <span className="code-keyword">)</span>
                  </div>
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
                    <span className="code-keyword">return</span> <span className="code-property">results</span>
                  </div>
                  <div className="mt-4">
                    <span className="code-keyword">with</span> <span className="code-property">agent</span>
                    <span className="code-keyword">.</span>
                    <span className="code-function">trace</span>
                    <span className="code-keyword">(</span>
                    <span className="code-string">"process_data"</span>
                    <span className="code-keyword">)</span> <span className="code-keyword">as</span>{' '}
                    <span className="code-property">t</span>
                    <span className="code-keyword">:</span>
                  </div>
                  <div className="ml-4">
                    <span className="code-property">result</span> <span className="code-keyword">=</span>{' '}
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

      {/* Pricing Section */}
      <section className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-nexus-text mb-16">
            Choose the plan that fits your scale
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Free',
                price: '0',
                period: '/mo',
                features: [
                  '3 agents',
                  '10K logs/month',
                  '7-day retention',
                  'No alerts',
                ],
              },
              {
                name: 'Starter',
                price: '29',
                period: '/mo',
                features: [
                  '10 agents',
                  '100K logs/month',
                  '30-day retention',
                  'Email alerts',
                ],
              },
              {
                name: 'Pro',
                price: '99',
                period: '/mo',
                popular: true,
                features: [
                  '50 agents',
                  '1M logs/month',
                  '90-day retention',
                  'Webhooks & alerts',
                  'Custom integrations',
                ],
              },
              {
                name: 'Enterprise',
                price: '499',
                period: '/mo',
                features: [
                  'Unlimited agents',
                  'Unlimited logs',
                  '365-day retention',
                  'Priority support',
                  'SLA guarantees',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && <div className="badge-popular">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-nexus-muted">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span className="text-nexus-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#" className={plan.popular ? 'btn-primary block text-center' : 'btn-secondary block text-center'}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start monitoring your agents in 5 minutes
            </h2>
            <p className="text-lg text-nexus-text mb-8">
              Join the developers already using NexusOS to ship AI agents with confidence.
            </p>
            <Link href="#" className="btn-primary text-lg">
              Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

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
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
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
