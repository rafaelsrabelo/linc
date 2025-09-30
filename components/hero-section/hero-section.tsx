import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Calendar, Heart, Users } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[20rem] md:h-[36rem] items-center">
          <div className="flex flex-col items-center justify-center gap-6 md:items-start lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Brain className="w-4 h-4" />
              LIGA DE NEUROLOGIA CLÍNICA
            </div>

            <h1 className="text-foreground text-balance font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Transforme Seu Conhecimento em <span className="text-primary">Neurologia Clínica</span>
            </h1>

            <p className="text-muted-foreground text-pretty text-lg md:text-xl leading-relaxed">
              Acesse recursos avançados, diagnósticos precisos e tratamentos atualizados. Junte-se a uma comunidade de
              profissionais que estão revolucionando o cuidado neurológico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Button size="lg" className="group">
                Começar Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-border w-full">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3 Anos</p>
                  <p className="text-sm text-muted-foreground">Desde 2022</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Profissionais</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Melhorando</p>
                  <p className="text-sm text-muted-foreground">Jornada Neurológica</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
            {/* <Image
              src="/hero-section.svg"
              alt="Ilustração representando neurologia clínica"
              width={200}
              height={400}
              className="h-full w-auto object-contain"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
