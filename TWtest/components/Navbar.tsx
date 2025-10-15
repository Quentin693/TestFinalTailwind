import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          Oxaley
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            About Us
          </Link>
          <Link 
            href="#services" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Services
          </Link>
          <Link 
            href="#project" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Project
          </Link>
          <Link 
            href="#faq" 
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            FAQ
          </Link>
          
          {/* Contact Button */}
          <Link 
            href="#contact"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            CONTACT US
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
          </Link>
        </nav>
      </div>
    </header>
  );
}

