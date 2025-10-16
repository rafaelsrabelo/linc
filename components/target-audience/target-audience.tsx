"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users } from "lucide-react";

export const TargetAudience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Público-Alvo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Para Quem é o Curso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vagas limitadas propositalmente para garantir atividades práticas eficientes e maior interação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Público-Alvo */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Público-Alvo</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700">Estudantes da graduação em Medicina</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700">Do 1º ao 12º semestre</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700">Interessados em tecnologia e inovação</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-gray-700">Futuros profissionais da saúde</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Perfil Ideal</h4>
                <p className="text-blue-800 text-sm">
                  Estudantes curiosos sobre tecnologia, com interesse em inovação médica 
                  e dispostos a aprender sobre o futuro da medicina.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vagas e Participantes */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vagas e Participantes</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                  <div className="text-4xl font-bold text-green-700 mb-2">60</div>
                  <p className="text-green-800 font-semibold">Vagas Disponíveis</p>
                  <p className="text-green-700 text-sm mt-2">Propositalmente limitadas</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Atividades práticas eficientes</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Maior interação docente-discente</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Ambiente de aprendizado personalizado</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Networking entre participantes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interessado em Participar?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                As vagas são limitadas e a procura é alta. Garante já sua vaga neste curso pioneiro 
                de Inteligência Artificial na Medicina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  type="button"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={() => {
                    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Inscrever-se Agora
                </button>
                <button 
                  type="button"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  onClick={() => {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Mais Informações
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
