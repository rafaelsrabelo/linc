import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <Header />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}
