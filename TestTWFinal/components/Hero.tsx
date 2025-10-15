export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 via-sky-700/30 to-sky-900/50 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/dubaifps.mp4" type="video/mp4" />
          {/* Fallback image si la vidéo ne charge pas */}
          <img 
            src="https://images.unsplash.com/photo-512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          AI Driven Real Estate
          <br />
          <span className="text-sky-300">Investments Opportunities</span>
        </h1>
        
        <button className="mt-8 bg-white text-sky-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-xl">
          Get Started
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

