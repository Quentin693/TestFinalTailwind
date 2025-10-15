import Image from "next/image";

export default function PortfolioPreview() {
  const images = [
    { id: 1, alt: "Tomford", src: "/tomford.jpg" },
    { id: 2, alt: "Hotel", src: "/hotel.jpg" },
    { id: 3, alt: "Voiture", src: "/chiron.jpg" },
  ];

  return (
    <div className="flex gap-4 justify-center items-center">
      {images.map((img) => (
        <div
          key={img.id}
          className="relative w-28 h-28 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          style={{
            background: 'linear-gradient(to bottom, #0B0225 0%, #2A0C7A 30%, #6B4CF6 60%, #E5E5F7 85%, #FFFFFF 100%)'
          }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
          {/* Overlay avec dégradé */}
          <div 
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background: 'linear-gradient(to bottom, #0B0225 0%, #2A0C7A 30%, #6B4CF6 60%, #E5E5F7 85%, transparent 100%)'
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

