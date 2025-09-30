"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Calendar, Heart, Users } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-[#fff672] pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[20rem] lg:h-[36rem] items-center">
          {/* Conteúdo Principal - Lado Esquerdo */}
          <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Brain className="w-4 h-4" />
              LIGA ACADÊMICA DE NEUROLOGIA CLÍNICA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center lg:text-left leading-tight">
              Liga Acadêmica em Neurologia Clínica da Unichristus
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-medium text-center lg:text-left leading-relaxed">
              Reúne estudantes de Medicina com interesse em compreender de forma ampla e aplicada o funcionamento do sistema nervoso e as principais condições neurológicas que impactam a prática médica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Entre em Contato
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Estatísticas - Layout Horizontal */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-gray-200 w-full">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3 Anos</p>
                  <p className="text-sm text-gray-600">Desde 2022</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Profissionais</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Melhorando</p>
                  <p className="text-sm text-gray-600">Jornada Neurológica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem - Lado Direito */}
          <div className="relative h-[20rem] lg:h-full order-first lg:order-last flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg">
              <Image
                src="/herosection.jpeg"
                alt="Médicos e estudantes de medicina em ambiente hospitalar"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Overlay sutil para melhor contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
