import Image from "next/image";

export default function BestProject() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-sm font-semibold tracking-wider text-black uppercase">
            BEST PROJECT
          </h2>
          <a 
            href="#projects"
            className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-wide"
          >
            SEE MORE
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>

        <div className="mb-4">
          <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden group cursor-pointer">
            <Image src="/tomford.jpg" alt="Tomford" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-6xl font-bold mb-2">TOM FORD</p>
                <p className="text-white text-2xl tracking-widest">OMBRÉ LEATHER</p>
                <p className="text-white text-xl mt-4 tracking-widest">TOM FORD</p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-3xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/hotel.jpg" alt="Hotel" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Image Voiture */}
          <div className="relative h-[400px] bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 rounded-3xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/chiron.jpg" alt="Voiture" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

