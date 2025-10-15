"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Oxaley offer?",
    answer: "Oxaley offers comprehensive design services including branding, web design, mobile app design, and immersive digital experiences."
  },
  {
    question: "How does Oxaley work with clients?",
    answer: "We work closely with our clients through a collaborative process, from initial consultation to final delivery, ensuring your vision is brought to life."
  },
  {
    question: "How long does it take to complete a design project?",
    answer: "Project timelines vary depending on scope and complexity. Typically, projects range from 2-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Does Oxaley accept design projects for mobile apps?",
    answer: "Yes! We specialize in mobile app design for both iOS and Android platforms, creating intuitive and engaging user experiences."
  },
  {
    question: "How to contact Oxaley to start the project?",
    answer: "You can reach us through our contact form, email us directly, or schedule a consultation call. We'll respond within 24 hours."
  },
  {
    question: "How much does it cost to use design services in Oxaley?",
    answer: "Our pricing is tailored to each project's specific needs. Contact us for a custom quote based on your requirements and budget."
  }
];

const socialLinks = [
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "X",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "Telegram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: "Behance",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.07 6.35h-5v1.66h5zM19.12 17.86a3.28 3.28 0 0 1-3.59.61 2.88 2.88 0 0 1-1.78-2.67h6.69a5.75 5.75 0 0 0-1.29-5.52 5.9 5.9 0 0 0-4.44-1.78 6.06 6.06 0 0 0-4.46 1.77 6.38 6.38 0 0 0-1.79 4.67 6.66 6.66 0 0 0 1.77 4.67 6 6 0 0 0 4.5 1.79 5.82 5.82 0 0 0 4-1.23 5.18 5.18 0 0 0 1.85-3.31zM14.77 11.5a2.66 2.66 0 0 1 2.43-1.58 2.49 2.49 0 0 1 2.33 1.58zM11.11 14.18H3.34a3.08 3.08 0 0 0 3.36 2.74 3.1 3.1 0 0 0 2.42-1.09l1.81.79a5 5 0 0 1-4.2 2.13 5.67 5.67 0 0 1-4.16-1.6A5.67 5.67 0 0 1 .96 13a5.75 5.75 0 0 1 1.61-4.15 5.52 5.52 0 0 1 4.1-1.6 5.23 5.23 0 0 1 4 1.61 6.35 6.35 0 0 1 1.47 4.77zm-7.77-1.67h5.09a2.68 2.68 0 0 0-2.53-1.83 2.75 2.75 0 0 0-2.56 1.83z"/>
      </svg>
    )
  }
];

export default function Footer() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Section */}
        <div className="mb-16">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-2">
                <span className="text-white">Frequently</span>
                <br />
                <span className="text-white">asked</span>
                <br />
                <span className="text-gray-500">questions</span>
              </h2>
              <div className="w-32 h-0.5 bg-white/20 mt-4"></div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-right mt-4">
              You can find explanations of our products,<br />
              services, policies, and anything else you<br />
              may need to know.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-3xl ml-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-zinc-800 transition-colors"
                >
                  <span className="text-left text-gray-200 font-medium">
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6 text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-12"></div>

        {/* Social Links */}
        <div className="flex gap-3 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={`#${social.name.toLowerCase()}`}
              className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-all hover:scale-110 text-white"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-400 text-sm">
            © 2024 Oxaley. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Giant Logo */}
        <div className="relative overflow-hidden py-8">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black leading-none tracking-tight flex items-center">
            <span className="text-gray-600 inline-block" style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
              transform: 'rotateY(10deg)',
              transformOrigin: 'left center',
            }}>O</span>
            <span className="text-white ml-9">XALEY</span>
          </h1>
        </div>
      </div>
    </footer>
  );
}
