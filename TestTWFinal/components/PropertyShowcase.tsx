'use client'

import { useState } from 'react'
import PropertyDetails from './PropertyDetails'

export default function PropertyShowcase() {
  const [buyType, setBuyType] = useState('Buy')
  const [propertyType, setPropertyType] = useState('Any property')
  const [area, setArea] = useState('All areas')
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const openDetails = (property: any) => {
    setSelectedProperty(property)
    setIsDetailsOpen(true)
  }

  const closeDetails = () => {
    setIsDetailsOpen(false)
    setTimeout(() => setSelectedProperty(null), 300)
  }

  const properties = [
    {
      id: '01',
      title: 'Modern studio',
      subtitle: 'in Bluewaters Bay',
      location: 'Bluewaters Island',
      type: 'Villa',
      price: '8 962 000 AED',
      developer: 'LuxeLine Properties',
      bedrooms: '8',
      image: '/images/dubai1.webp'
    },
    {
      id: '02',
      title: 'Luxury apartment',
      subtitle: 'in Downtown Elegance',
      location: 'Downtown Dubai',
      type: 'Apartment',
      price: '5 240 000 AED',
      developer: 'Dubai Prime Estate',
      bedrooms: '3',
      image: '/images/luxury.jpeg'
    },
    {
        id: '03',
        title: '8-Bedroom',
        subtitle: 'Waterfront Villa',
        location: 'Emirates Hills',
        type: 'Villa',
        price: '8 962 000 AED',
        developer: 'LuxeLine Properties',
        bedrooms: '8',
        image: '/images/dubai2.jpg'
      },
      {
        id: '04',
        title: 'Exclusive penthouse',
        subtitle: 'in The Palm Royale',
        location: 'Palm Jumeirah',
        type: 'Penthouse',
        price: '12 500 000 AED',
        developer: 'Palm Properties',
        bedrooms: '5',
        image: '/images/dubai3.jpeg'
      }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          {/* Left side - Filter button and dropdowns */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <span className="font-medium text-gray-700">Filter</span>
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            {/* Play Icon */}
            <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Dropdowns */}
            <div className="flex items-center gap-3">
              <select 
                value={buyType}
                onChange={(e) => setBuyType(e.target.value)}
                className="px-4 py-3 bg-transparent border-none text-gray-700 font-medium cursor-pointer focus:outline-none hover:bg-gray-50 rounded-lg transition-colors"
              >
                <option>Buy</option>
                <option>Rent</option>
                <option>Lease</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 -ml-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex items-center gap-3">
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="px-4 py-3 bg-transparent border-none text-gray-700 font-medium cursor-pointer focus:outline-none hover:bg-gray-50 rounded-lg transition-colors"
              >
                <option>Any property</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Studio</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 -ml-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex items-center gap-3">
              <select 
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="px-4 py-3 bg-transparent border-none text-gray-700 font-medium cursor-pointer focus:outline-none hover:bg-gray-50 rounded-lg transition-colors"
              >
                <option>All areas</option>
                <option>Downtown Dubai</option>
                <option>Dubai Marina</option>
                <option>Palm Jumeirah</option>
                <option>Bluewaters Island</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 -ml-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Right side - View All button */}
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105">
            View All
          </button>
        </div>

        {/* Property Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group h-[500px]"
            >
              {/* Détails qui apparaissent en haut au hover */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-10">
                {/* Header avec ID, Type et Prix + Bouton */}
                <div className="flex items-start justify-between mb-4">
                  {/* Colonne gauche */}
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-gray-900">{property.id}</div>
                    <div className="bg-gray-100 px-4 py-1.5 rounded-full inline-block">
                      <span className="text-gray-900 text-sm font-medium">{property.type}</span>
                    </div>
                  </div>
                  
                  {/* Colonne droite - Prix et Bouton View Details */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-light text-gray-900">{property.price}</div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        openDetails(property)
                      }}
                      className="bg-gray-100 text-gray-900 py-2 px-5 rounded-full text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2 group/btn"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Developer */}
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Developer:</p>
                  <p className="text-sm text-gray-900 font-medium">{property.developer}</p>
                </div>

                {/* Titre */}
                <div>
                  <h3 className="text-xl font-light text-gray-900 leading-tight">
                    {property.bedrooms}-Bedroom
                  </h3>
                  <p className="text-lg font-light text-gray-600">{property.subtitle}</p>
                </div>
              </div>

              {/* Property Image - Se rétrécit vers le bas au hover */}
              <div className="absolute bottom-0 left-0 right-0 h-full group-hover:h-[280px] overflow-hidden transition-all duration-700 ease-out rounded-4xl rounded-t-2xl">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Location Badge - Toujours visible */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full group-hover:opacity-0 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white text-sm font-medium">{property.location}</span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform group-hover:opacity-0 duration-300">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>

                {/* Info de base (visible sans hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="text-white/60 text-5xl font-light mb-2">{property.id}</div>
                  <h3 className="text-white text-3xl font-light mb-1">{property.title}</h3>
                  <p className="text-white text-3xl font-light">{property.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          isOpen={isDetailsOpen}
          onClose={closeDetails}
        />
      )}
    </section>
  )
}

