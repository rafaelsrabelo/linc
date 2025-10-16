"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Brain, Calendar, Users } from "lucide-react";
import Image from "next/image";

export const HeroSectionIA = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[20rem] lg:h-[36rem] items-center">
          {/* Conteúdo Principal - Lado Esquerdo */}
          <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-4 py-2 text-sm font-medium mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Imersão Glia: Inteligência Artificial na Medicina
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left leading-tight">
              Curso de Inteligência Artificial na Medicina
            </h1>

            <p className="text-lg md:text-xl text-blue-100 font-medium text-center lg:text-left leading-relaxed">
              O primeiro curso de IA em Medicina do Centro Universitário Christus. 
              Promova conhecimento sobre IA com foco em aplicações clínicas, 
              limitações e boas práticas éticas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Button 
                size="lg" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inscrever-se Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Estatísticas - Layout Horizontal */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-blue-400/30 w-full">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3 Dias</p>
                  <p className="text-sm text-blue-200">20, 22 e 27 de Outubro</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">60 Vagas</p>
                  <p className="text-sm text-blue-200">Limitadas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10h</p>
                  <p className="text-sm text-blue-200">Certificação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem - Lado Direito */}
          <div className="relative h-[20rem] lg:h-full order-first lg:order-last flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg">
              <Image
                src="/curso-ia-hero.jpg"
                alt="Inteligência Artificial na Medicina - Curso LINC"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Overlay sutil para melhor contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

