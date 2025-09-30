import { About } from "@/components/about";
import { Atividades } from "@/components/atividades";
import { Contact } from "@/components/contact";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Membros } from "@/components/membros";
import { Orientadores } from "@/components/orientadores";
// import { Partners } from "@/components/partners";
import { Publications } from "@/components/publications";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Orientadores />
      <Atividades />
      <Membros />
      <Events />
      <Publications />
      {/* <Partners /> */}
      <Contact />
      <Footer />
    </div>
  );
}
