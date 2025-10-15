'use client'

import { useState, useEffect, useRef } from 'react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Residential')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const categories = [
    { name: 'Retail', count: 6 },
    { name: 'Interior Design', count: 7 },
    { name: 'Residential', count: 13 },
    { name: 'Commercial', count: 10 }
  ]

  const articles = [
    // Retail Articles (12)
    {
      id: 1,
      category: 'Retail',
      date: '7 Jan 2025',
      title: 'Urban design trends',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Retail',
      date: '5 Jan 2025',
      title: 'Modern retail spaces in Dubai',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Retail',
      date: '2 Jan 2025',
      title: 'Shopping mall architecture',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'Retail',
      date: '28 Dec 2024',
      title: 'Luxury boutique design',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'Retail',
      date: '20 Dec 2024',
      title: 'Retail innovation in UAE',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'Retail',
      date: '15 Dec 2024',
      title: 'Future of retail spaces',
      image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2070&auto=format&fit=crop'
    },
    
    // Interior Design Articles (15)
    {
      id: 13,
      category: 'Interior Design',
      date: '6 Jan 2025',
      title: 'Principles of interior design',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 14,
      category: 'Interior Design',
      date: '4 Jan 2025',
      title: 'Minimalist luxury interiors',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 15,
      category: 'Interior Design',
      date: '30 Dec 2024',
      title: 'Color psychology in design',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 16,
      category: 'Interior Design',
      date: '27 Dec 2024',
      title: 'Biophilic design trends',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 17,
      category: 'Interior Design',
      date: '22 Dec 2024',
      title: 'Smart home integration',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 18,
      category: 'Interior Design',
      date: '18 Dec 2024',
      title: 'Lighting design essentials',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 19,
      category: 'Interior Design',
      date: '14 Dec 2024',
      title: 'Texture and material selection',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2070&auto=format&fit=crop'
    },

    {
      id: 28,
      category: 'Residential',
      date: '8 Jan 2025',
      title: 'Dubai Marina penthouses',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 29,
      category: 'Residential',
      date: '3 Jan 2025',
      title: 'Luxury villa architecture',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 30,
      category: 'Residential',
      date: '31 Dec 2024',
      title: 'Smart home technology',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 31,
      category: 'Residential',
      date: '26 Dec 2024',
      title: 'Sustainable living spaces',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 32,
      category: 'Residential',
      date: '21 Dec 2024',
      title: 'Beachfront properties guide',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 33,
      category: 'Residential',
      date: '16 Dec 2024',
      title: 'High-rise apartment living',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 34,
      category: 'Residential',
      date: '11 Dec 2024',
      title: 'Garden and outdoor spaces',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 35,
      category: 'Residential',
      date: '6 Dec 2024',
      title: 'Townhouse design trends',
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 36,
      category: 'Residential',
      date: '2 Dec 2024',
      title: 'Family home layouts',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 37,
      category: 'Residential',
      date: '27 Nov 2024',
      title: 'Energy-efficient homes',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 38,
      category: 'Residential',
      date: '22 Nov 2024',
      title: 'Pool and spa design',
      image: 'https://stephaniecoutas.com/wp-content/uploads/2023/05/City-view-interior-76-2-1024x683.jpg'
    },
    {
      id: 39,
      category: 'Residential',
      date: '17 Nov 2024',
      title: 'Master bedroom suites',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 40,
      category: 'Residential',
      date: '13 Nov 2024',
      title: 'Home office design',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop'
    },
    // Commercial Articles (18)
    {
      id: 52,
      category: 'Commercial',
      date: '9 Jan 2025',
      title: 'Office space optimization',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 53,
      category: 'Commercial',
      date: '1 Jan 2025',
      title: 'Coworking space design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 54,
      category: 'Commercial',
      date: '29 Dec 2024',
      title: 'Hotel and hospitality design',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 55,
      category: 'Commercial',
      date: '25 Dec 2024',
      title: 'Restaurant interior concepts',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 56,
      category: 'Commercial',
      date: '19 Dec 2024',
      title: 'Healthcare facility design',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 57,
      category: 'Commercial',
      date: '13 Dec 2024',
      title: 'Educational space planning',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 58,
      category: 'Commercial',
      date: '9 Dec 2024',
      title: 'Corporate office trends',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 59,
      category: 'Commercial',
      date: '4 Dec 2024',
      title: 'Sustainable commercial buildings',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 60,
      category: 'Commercial',
      date: '30 Nov 2024',
      title: 'Mixed-use developments',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 61,
      category: 'Commercial',
      date: '26 Nov 2024',
      title: 'Tech company offices',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
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

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`flex items-start justify-between mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <p className="text-sm text-gray-600 mb-4">• Blog</p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">Latest Insights</h2>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105">
            View Blog
          </button>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap gap-8 mb-12 border-b border-gray-200 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`pb-4 transition-all relative ${
                activeCategory === category.name
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-light">{category.name}</span>
                <span className="text-sm font-light">{category.count.toString().padStart(2, '0')} articles</span>
              </div>
              {activeCategory === category.name && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
              )}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative rounded-3xl overflow-hidden mb-4 h-80 bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>

                {/* Date and Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/80 text-sm mb-2">{article.date}</p>
                  <h3 className="text-white text-xl font-light leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show article count */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Showing {filteredArticles.length} {activeCategory !== 'All' ? activeCategory : ''} articles
          </p>
        </div>
      </div>
    </section>
  )
}

