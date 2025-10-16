import { About } from "@/components/about";
import { Certification } from "@/components/certification";
import { Contact } from "@/components/contact";
import { CourseInfo } from "@/components/course-info";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSectionIA } from "@/components/hero-section-ia";
import { Instructor } from "@/components/instructor";
import { Logistics } from "@/components/logistics";
import { Schedule } from "@/components/schedule";
import { TargetAudience } from "@/components/target-audience";

export default function CursoIAPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSectionIA />
        <CourseInfo />
        <Schedule />
        <Instructor />
        <TargetAudience />
        <Certification />
        <Logistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

