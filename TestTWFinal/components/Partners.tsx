'use client'

import { useEffect, useState } from 'react'

export default function Partners() {
  const [isHovered, setIsHovered] = useState(false)

  const partners = [
    { name: 'MERAAS', logo: '/logos/meraas.svg' },
    { name: 'DAMAC', logo: '/logos/damac.svg' },
    { name: 'EMAAR', logo: '/logos/emaar.svg' },
    { name: 'NAKHEEL', logo: '/logos/nakheel.svg' },
    { name: 'SOBHA', logo: '/logos/sobha.svg' },
    { name: 'MAJID AL FUTTAIM', logo: '/logos/maf.svg' },
  ]

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-700 text-center mb-16">
          Our valued partners
        </h2>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <div 
              className={`flex gap-16 ${isHovered ? '' : 'animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  {/* Placeholder for logos - you'll replace with actual logo images */}
                  <div className="text-center">
                    <p className="text-2xl font-light text-gray-800 tracking-wider">
                      {partner.name}
                    </p>
                    {partner.name === 'DAMAC' && (
                      <p className="text-xs text-gray-500 mt-1">LIVE THE LUXURY</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

