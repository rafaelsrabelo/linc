import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Partners } from "@/components/partners";
import { Publications } from "@/components/publications";

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <Header />
      <HeroSection />
      <About />
      <Events />
      <Publications />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
