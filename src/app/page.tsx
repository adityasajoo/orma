import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import VideoSection from "@/components/VideoSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <VideoSection />
    </main>
  );
}
