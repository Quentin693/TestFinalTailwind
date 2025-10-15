'use client'

import { useState } from 'react'

export default function Leadership() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const leaders = [
    {
      name: 'Sophia Patel',
      title: 'CEO & Co-Founder',
      description: 'Specializes in high-yield investment opportunities with a client-first approach.',
      experience: '12 years',
      areasOfFocus: 'Dubai Marina, Bluewaters Island',
      images: [
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      name: 'Marcus Chen',
      title: 'Chief Investment Officer',
      description: 'Expert in AI-driven analytics and blockchain technology for real estate transactions.',
      experience: '15 years',
      areasOfFocus: 'Downtown Dubai, Palm Jumeirah',
      images: [
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      name: 'Layla Al-Rashid',
      title: 'Head of Operations',
      description: 'Leading operational excellence with a focus on sustainable luxury developments.',
      experience: '10 years',
      areasOfFocus: 'Business Bay, DIFC',
      images: [
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leaders.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + leaders.length) % leaders.length)
  }

  const currentLeader = leaders[currentSlide]

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6">Leadership</h2>
            <div className="inline-block px-4 md:px-6 py-1.5 md:py-2 border border-gray-300 rounded-full">
              <span className="text-sm md:text-base text-gray-600 font-light">
                {currentSlide + 1}/{leaders.length}
              </span>
            </div>
          </div>

          {/* Layout Grid */}
          <div className="relative grid lg:grid-cols-12 gap-6 md:gap-8 items-start min-h-[300px] md:min-h-[400px]">
            
            {/* Left Column - Name, Title */}
            <div className="lg:col-span-3 space-y-2 relative z-10 lg:pt-64 order-1 lg:order-none">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-2 md:mb-3">
                  {currentLeader.name}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-light">
                  {currentLeader.title}
                </p>
              </div>
            </div>

            {/* Center Column - Images Collage */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[550px] mx-auto w-full order-2 lg:order-none">
              {/* Image 1 - Top Left - Leader précédent */}
              <div 
                onClick={() => prevSlide()}
                className="absolute top-0 left-1/4 transform -translate-x-1/2 w-32 h-40 md:w-44 md:h-52 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl z-10 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl"
              >
                <img 
                  src={leaders[(currentSlide - 1 + leaders.length) % leaders.length].images[1]}
                  alt={`${leaders[(currentSlide - 1 + leaders.length) % leaders.length].name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300"></div>
              </div>

              {/* Image 2 - Center (Main) - Leader actuel */}
              <div className="absolute top-10 md:top-16 left-1/2 transform -translate-x-1/2 w-48 h-60 md:w-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-20 transition-all duration-500">
                <img 
                  src={currentLeader.images[1]}
                  alt={`${currentLeader.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 - Bottom Right - Leader suivant */}
              <div 
                onClick={() => nextSlide()}
                className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-36 h-48 md:w-48 md:h-60 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl z-10 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl"
              >
                <img 
                  src={leaders[(currentSlide + 1) % leaders.length].images[1]}
                  alt={`${leaders[(currentSlide + 1) % leaders.length].name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300"></div>
              </div>
            </div>

            {/* Right Column - Experience and Areas */}
            <div className="lg:col-span-3 space-y-2 relative z-10 lg:pt-64 order-3 lg:order-none">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <p className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2 font-light">Experience</p>
                  <p className="text-base md:text-xl font-light text-gray-900">{currentLeader.experience}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2 font-light">Areas of Focus</p>
                  <p className="text-sm md:text-base font-light text-gray-900">{currentLeader.areasOfFocus}</p>
                </div>
              </div>
            </div>

            {/* Ligne de vie - Traverse tout le layout au milieu des images */}
            <div className="absolute z-0 left-0 right-0 top-[280px] md:top-[350px] h-px bg-gray-300 hidden lg:block"></div>
          </div>

          {/* Description - En dessous de la ligne */}
          <div className="mt-6 md:mt-8 max-w-md">
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              {currentLeader.description}
            </p>
          </div>

          {/* Hidden Navigation for functionality */}
          <div className="hidden">
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
          </div>
        </div>
      </div>

      {/* Down Arrow - Bottom Right */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all shadow-lg">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
