import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BestProject from "@/components/BestProject";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Best Project Section */}
      <BestProject />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
