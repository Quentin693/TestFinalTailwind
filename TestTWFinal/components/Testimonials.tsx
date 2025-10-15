'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Elisa',
      location: 'Dubai, January 2025',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      text: "I'm beyond grateful for the exceptional service I received. They understood exactly what I was looking for and guided me every step of the way. Thanks to their dedication, I now own my dream property!"
    },
    {
      id: 2,
      name: 'Mohammed Al-Rashid',
      location: 'Abu Dhabi, December 2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      text: "The AI-driven analytics helped me identify the perfect investment opportunity. The team's expertise in blockchain transactions made the entire process seamless and secure. Highly recommended!"
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      location: 'Dubai Marina, November 2024',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      text: "Outstanding service from start to finish. The platform's technology combined with personalized attention made buying my first property in Dubai an absolute breeze. Couldn't be happier!"
    }
  ]

  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop'
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-20">
            What Our Clients Say
          </h2>

          {/* Testimonial Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Avatars and Reviews Count */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4">
                {/* Arrow */}
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Avatars Stack */}
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div 
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img 
                        src={avatar}
                        alt={`Client ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Reviews Count */}
                <div className="ml-2">
                  <div className="text-3xl font-light text-gray-900">125+</div>
                  <div className="text-sm text-gray-400">Reviews</div>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="lg:col-span-9">
              <div className="space-y-8">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                  {currentTestimonial.text}
                </p>

                {/* Separator Line */}
                <div className="w-1/3 h-px bg-gray-900"></div>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img 
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-400">{currentTestimonial.location}</p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

