import SocialLinks from "./SocialLinks";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-white px-8 py-24 flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-16">
          {/* Main Text */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-black">At oxaley — we believe</span>
              <br />
              <span className="text-black">that design is not just</span>
              <br />
              <span className="text-black">about appearance but</span>
              <br />
              <span className="text-black">also </span>
              <span className="text-gray-400">about creating</span>
              <br />
              <span className="text-gray-400">immersive and</span>
              <br />
              <span className="text-gray-400">meaningful — experiences</span>
            </h2>
          </div>

          {/* Social Icons */}
          <div className="pt-8">
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold hover:bg-gray-800 transition-all hover:scale-110"
                >
                  {item === 1 && "FB"}
                  {item === 2 && "TW"}
                  {item === 3 && "IG"}
                  {item === 4 && "IN"}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

