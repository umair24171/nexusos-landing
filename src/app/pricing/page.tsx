'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Github, Twitter } from 'lucide-react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

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

      {/* Pricing Header */}
      <section className="py-20 border-b border-nexus-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-nexus-text mb-8">
            Scale from prototype to production. Pay only for what you use.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'border border-nexus-border text-nexus-text hover:border-nexus-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'border border-nexus-border text-nexus-text hover:border-nexus-text'
              }`}
            >
              Annual
              <span className="ml-2 text-green-400 text-sm font-normal">(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: 'Free',
                price: '0',
                description: 'Perfect for getting started',
                features: [
                  '3 agents',
                  '10K logs/month',
                  '7-day retention',
                  'Basic dashboard',
                  'Community support',
                  'Email alerts (10/month)',
                ],
              },
              {
                name: 'Starter',
                price: billingCycle === 'monthly' ? '29' : '276',
                period: billingCycle === 'monthly' ? '/month' : '/year',
                description: 'For growing teams',
                features: [
                  '10 agents',
                  '100K logs/month',
                  '30-day retention',
                  'Advanced dashboard',
                  'Email & Slack alerts',
                  'API access',
                  'Role-based access',
                ],
              },
              {
                name: 'Pro',
                price: billingCycle === 'monthly' ? '99' : '950',
                period: billingCycle === 'monthly' ? '/month' : '/year',
                description: 'Most popular',
                features: [
                  '50 agents',
                  '1M logs/month',
                  '90-day retention',
                  'Custom dashboard',
                  'Webhooks & integrations',
                  'Priority support',
                  'SSO (OIDC)',
                  'Audit log export',
                ],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: billingCycle === 'monthly' ? '499' : '4990',
                period: billingCycle === 'monthly' ? '/month' : '/year',
                description: 'For large scale',
                features: [
                  'Unlimited agents',
                  'Unlimited logs',
                  '365-day retention',
                  'Dedicated account manager',
                  'Custom integrations',
                  'SLA guarantee (99.99%)',
                  'On-premises option',
                  '24/7 priority support',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && <div className="badge-popular">MOST POPULAR</div>}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-nexus-text text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  {plan.period && <span className="text-nexus-muted text-sm">{plan.period}</span>}
                </div>
                <Link href="#" className={plan.popular ? 'btn-primary block text-center mb-8' : 'btn-secondary block text-center mb-8'}>
                  Get Started
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-nexus-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 bg-nexus-darker border-t border-nexus-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Detailed feature comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-nexus-border">
                  <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-nexus-text font-semibold">Free</th>
                  <th className="text-center py-4 px-6 text-nexus-text font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 text-nexus-text font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Agent instances', '3', '10', '50', 'Unlimited'],
                  ['Monthly logs', '10K', '100K', '1M', 'Unlimited'],
                  ['Log retention', '7 days', '30 days', '90 days', '365 days'],
                  ['Audit logs', 'Basic', 'Full', 'Full', 'Full + export'],
                  ['Dashboard', 'Read-only', 'Custom views', 'Advanced', 'Custom + embed'],
                  ['Kill switch', 'Yes', 'Yes', 'Yes', 'Yes'],
                  ['Anomaly detection', 'No', 'Yes', 'Yes', 'Yes'],
                  ['Alerts', '10/month', 'Unlimited', 'Unlimited', 'Unlimited'],
                  ['Webhooks', 'No', '50/month', 'Unlimited', 'Unlimited'],
                  ['API rate limit', '100/min', '1000/min', '10K/min', 'Custom'],
                  ['SSO/OIDC', 'No', 'No', 'Yes', 'Yes'],
                  ['API access', 'No', 'Yes', 'Yes', 'Yes'],
                  ['Role-based access', 'No', 'Yes', 'Yes', 'Yes'],
                  ['Custom integrations', 'No', 'No', 'Yes', 'Yes'],
                  ['SLA guarantee', 'No', 'No', '99%', '99.99%'],
                  ['Priority support', 'No', 'Email', 'Email + Slack', '24/7 phone'],
                  ['Onboarding support', 'Self-serve', 'Self-serve', 'Included', 'Dedicated'],
                  ['Account manager', 'No', 'No', 'No', 'Yes'],
                ].map((row, index) => (
                  <tr key={index} className="border-b border-nexus-border hover:bg-nexus-card/50 transition-colors">
                    <td className="py-4 px-6 text-nexus-text font-medium">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-nexus-text">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-nexus-text">{row[2]}</td>
                    <td className="py-4 px-6 text-center text-white">{row[3]}</td>
                    <td className="py-4 px-6 text-center text-nexus-text">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-nexus-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer:
                  'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. If you upgrade mid-cycle, we\'ll prorate the difference.',
              },
              {
                question: 'What happens when I exceed my plan limits?',
                answer:
                  'We\'ll notify you when you\'re approaching your limits. You can upgrade immediately without losing data. We never silently drop logs or alerts.',
              },
              {
                question: 'Do you offer discounts for annual billing?',
                answer:
                  'Yes! Annual plans are 20% cheaper than paying monthly. Plus, Enterprise customers get custom pricing.',
              },
              {
                question: 'What\'s included in the Free plan?',
                answer:
                  'The Free plan includes 3 agents, 10K logs per month, 7-day retention, and basic dashboard access. Perfect for prototyping and learning.',
              },
              {
                question: 'Can I self-host NexusOS?',
                answer:
                  'Self-hosting is available for Enterprise customers. Contact our sales team to discuss on-premises deployment options.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-nexus-border bg-nexus-card/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-nexus-text">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-nexus-text mb-4">Still have questions?</p>
            <a href="#" className="text-blue-500 hover:text-blue-400 font-semibold flex items-center justify-center gap-2">
              Contact our sales team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden border-y border-nexus-border">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start your free trial today
            </h2>
            <p className="text-lg text-nexus-text mb-8">
              No credit card required. Upgrade anytime as you grow.
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
