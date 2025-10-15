'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Diviser le texte en segments pour l'animation progressive
  const textSegments = [
    { text: 'We are a next-generation platform combining', normal: false },
    { text: 'AI-driven property analytics', normal: true },
    { text: 'and', normal: false },
    { text: 'blockchain-secured transactions', normal: true },
    { text: 'to', normal: false },
    { text: 'revolutionize', normal: true },
    { text: 'real estate investments', normal: false }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small Title */}
          <p 
            className={`text-orange-400 text-sm md:text-base font-light mb-12 tracking-wider uppercase transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            Who We Are
          </p>
          
          {/* Main Heading avec animation mot par mot */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-16">
            {textSegments.map((segment, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } ${segment.normal ? 'font-normal' : ''}`}
                style={{ 
                  transitionDelay: `${200 + index * 150}ms`,
                  marginRight: '0.3em'
                }}
              >
                {segment.text}
              </span>
            ))}
          </h2>
          
          {/* CTA Button */}
          <button 
            className={`bg-gray-900 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${200 + textSegments.length * 150 + 200}ms` }}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  )
}

