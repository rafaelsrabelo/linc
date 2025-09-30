import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <Header />
      <HeroSection />
      <About />
      <Events />
      <Footer />
    </div>
  );
}
