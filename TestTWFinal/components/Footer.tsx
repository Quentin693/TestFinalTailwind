'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-gray-50 text-gray-600 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - Logo, Tagline, Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <span className="text-xl font-light text-gray-900">Dubai<br/>Realty</span>
              </div>
              <p className="text-gray-500 text-sm">Building Your Dreams<br/>In Real Estate</p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-gray-900 text-lg font-light mb-4">Subscribe to our news</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay informed and never miss a beat; subscribe to our exclusive news updates!
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Column 2 - Quick Navigation */}
          <div>
            <h4 className="text-gray-900 font-light text-lg mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Our Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Our Advantages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Mission and Values</a></li>
            </ul>
          </div>

          {/* Column 3 - Properties */}
          <div>
            <h4 className="text-gray-900 font-light text-lg mb-6">Properties</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Apartments for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Villas for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Townhouses for Sale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">New Developments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Luxury Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Sea View Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Downtown Properties</a></li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-gray-900 font-light text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Buying Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Selling Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Area Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Real Estate News</a></li>
            </ul>
          </div>

          {/* Column 5 - CTA and Map */}
          <div>
            <div className="mb-6">
              <h3 className="text-gray-900 text-xl font-light mb-6 leading-tight">
                We are here to change your future.
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Contact Us
                </button>
                <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Map Interactive */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-4 h-64 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.06290492677!2d55.14542649999999!3d25.0761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7f1b6d0a5%3A0x8e9f7a7c8c5e5c5e!2sDubai%20Marina%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Overlay pour afficher le pin personnalisé */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-900 text-sm font-medium">
              123 Zayed Road,<br />
              Dubai Marina,<br />
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright 2025 © Dubai Realty
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Terms Of Service</a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

