'use client'

import { useState } from 'react'

interface PropertyDetailsProps {
  property: {
    id: string
    title: string
    subtitle: string
    location: string
    type: string
    price: string
    developer: string
    bedrooms: string
    image: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function PropertyDetails({ property, isOpen, onClose }: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState('General info')

  const tabs = [
    '01. General info',
    '02. About',
    '03. Characteristics',
    '04. Exterior',
    '05. Interior',
    '06. Layout'
  ]

  const characteristics = [
    { label: 'Square', value: '3020m²' },
    { label: 'Number of rooms', value: property.bedrooms },
    { label: 'When booking', value: '50%' },
    { label: 'Delivery Date', value: '01.2025' }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-100">
      <div className="min-h-screen p-4 md:p-8">
        <div className="relative max-w-7xl mx-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Left Column - Info */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                  <h1 className="text-4xl md:text-6xl font-light text-gray-900">{property.id}</h1>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs md:text-sm text-gray-700">{property.location}</span>
                    </div>
                    <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full">
                      <span className="text-xs md:text-sm text-gray-700">{property.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer */}
              <div className="mb-4 md:mb-6">
                <p className="text-xs md:text-sm text-gray-400 mb-1">Developer:</p>
                <p className="text-sm md:text-base text-gray-900">{property.developer}</p>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8 leading-tight">
                {property.bedrooms}-Bedroom {property.subtitle}
              </h2>

              {/* Characteristics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                {characteristics.map((char, index) => (
                  <div key={index}>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">{char.label}</p>
                    <p className="text-base md:text-lg font-light text-gray-900">{char.value}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8">
                <p className="text-xs md:text-sm text-gray-400 mb-1">Price:</p>
                <p className="text-2xl md:text-4xl font-light text-gray-900">{property.price}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <button className="bg-black text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-all flex-1">
                  Callback
                </button>
                <button className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="hidden md:inline">Download catalog</span>
                  <span className="md:hidden">Download</span>
                </button>
              </div>
            </div>

            {/* Right Column - Image and Description */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg">
              {/* Image with overlay text */}
              <div className="relative rounded-2xl overflow-hidden mb-4 md:mb-6 h-48 md:h-80">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Small thumbnail in top left corner */}
                <div className="absolute top-3 left-3 md:top-6 md:left-6 w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 md:border-4 border-white">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Developer and Project info on image */}
                <div className="absolute top-3 right-3 md:top-6 md:right-6 text-right">
                  <p className="text-white text-xs md:text-sm mb-0.5 md:mb-1">Developer:</p>
                  <p className="text-white text-sm md:text-base font-medium mb-2 md:mb-3">{property.developer}</p>
                  <p className="text-white text-xs md:text-sm mb-0.5 md:mb-1">Project:</p>
                  <p className="text-white text-sm md:text-base font-medium">{property.location} Waterfront Villas</p>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg md:text-2xl font-light text-gray-900 mb-3 md:mb-4 leading-tight">
                {property.bedrooms}-Bedroom {property.subtitle}
              </h3>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  Nestled in the heart of Dubai's elite {property.location}, this breathtaking 
                  villa offers {property.bedrooms} bedrooms, a private pool, and panoramic views of the 
                  skyline landscape.
                </p>
                <p>
                  Crafted by {property.developer}, the home boasts expansive living 
                  areas, cutting-edge smart home technology, and impeccable 
                  finishes. A true haven for those seeking privacy and sophistication, 
                  this property redefines waterfront luxury.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Tabs */}
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl shadow-lg overflow-x-auto">
            <div className="flex items-center justify-around md:justify-between px-4 md:px-8 py-4 md:py-6 min-w-max md:min-w-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.split('. ')[1])}
                  className={`text-xs md:text-sm font-light transition-all relative pb-2 px-2 md:px-0 whitespace-nowrap ${
                    activeTab === tab.split('. ')[1]
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab.split('. ')[1] && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

