"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Calendar, Eye, Heart, Sparkles, Users, Zap } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#0f1729] overflow-hidden">
      {/* Owl Background - Main */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/owl.png"
            alt="Coruja sábia - símbolo da Liga Acadêmica em Neurologia"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Overlay to blend with background */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(15, 23, 41, 0.85)'}} />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}} />
        <div className="absolute top-60 left-32 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}} />
        <div className="absolute top-80 right-40 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}} />
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse opacity-90" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-72 right-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse opacity-80" style={{animationDelay: '2.5s'}} />
        <div className="absolute bottom-60 right-32 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse opacity-70" style={{animationDelay: '3.5s'}} />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12 pt-20 md:pt-0">

          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
              <span className="block font-bold">LIGA ACADÊMICA</span>
              <span className="block bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#D4AF37] bg-clip-text text-transparent font-bold">
                EM NEUROLOGIA
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-[#D4AF37] font-medium tracking-wider">
                CLÍNICA
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-3xl">
            Explore o infinito do conhecimento neurológico. Desperte sua mente para a sabedoria médica através de uma educação de excelência.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="group bg-[#D4AF37] hover:bg-[#B8860B] text-black px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#F4A261]/25"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Entre em Contato
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#D4AF37]/30">
              <div className="text-3xl font-bold text-[#D4AF37]">3</div>
              <div className="text-sm text-white/80 font-medium">Anos de Experiência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#D4AF37]/30">
              <div className="text-3xl font-bold text-[#D4AF37]">50+</div>
              <div className="text-sm text-white/80 font-medium">Profissionais</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1729] to-transparent" />
    </section>
  )
}
