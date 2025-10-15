import SocialLinks from "./SocialLinks";
import PortfolioPreview from "./PortfolioPreview";

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen relative flex flex-col justify-between px-8 pt-32 pb-16 overflow-hidden"
      style={{
        background: 'radial-gradient(105% 75% at 50% 90%,#FFFFFF 0%, #E5E5F7 30%, #6B4CF6 50%, #2A0C7A 85%, #000000 100%)'
      }}
    >
      {/* Effet de lumière centrale */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(107, 76, 246, 0.3)' }}
        ></div>
      </div>

      {/* Top Right Text */}
      <div className="absolute top-32 right-8 text-right max-w-xs z-10">
        <p className="text-gray-400 text-sm leading-relaxed">
          We believe good design is key to<br />
          building strong connections.
        </p>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-12">
          <span className="text-white">Crafting</span>
          <br />
          <span className="text-white">narrative</span>
          <br />
          <span className="bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent">
            through
          </span>
          <br />
          <span className="bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent">
            design
          </span>
        </h1>

        {/* Social Links */}
        <div className="mb-16">
          <SocialLinks />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end relative z-10">
        {/* See Our Portfolio */}
        <div>
          <a 
            href="#portfolio"
            className="text-black text-sm tracking-wide hover:text-gray-700 transition-colors uppercase font-medium"
          >
            SEE OUR PORTFOLIO
          </a>
        </div>

        {/* Portfolio Preview */}
        <div className="flex-1 flex justify-center">
          <PortfolioPreview />
        </div>

        {/* Scroll Now */}
        <div className="flex items-center gap-3">
          <span className="text-black text-sm tracking-wide uppercase font-medium">
            SCROLL NOW
          </span>
          <div className="w-12 h-12 rounded-full border-2 border-black/30 flex items-center justify-center hover:border-black transition-colors">
            <svg 
              className="w-5 h-5 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

