"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Wifi } from "lucide-react";

export const Logistics = () => {
  return (
    <section id="inscricao" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 px-4 py-2 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Informações Logísticas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local e Infraestrutura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curso presencial com infraestrutura completa para uma experiência de aprendizado excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Local e Formato */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Local do Curso</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Auditório Térreo</h4>
                  <p className="text-blue-800 text-sm">
                    UniChristus Parque Ecológico<br />
                    Fortaleza/CE
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-700">Formato presencial</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-700">Auditório com projeção</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-700">Acesso à internet</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-700">Ambiente climatizado</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infraestrutura */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Infraestrutura</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Wifi className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-green-800 font-semibold text-sm">Wi-Fi</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-800 font-semibold text-sm">60 Lugares</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Projeção de alta qualidade</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Sistema de som</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Mesas para atividades práticas</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-gray-700">Coffee breaks inclusos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações de Contato */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Informações de Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Presidente</h4>
                  <p className="text-blue-100 text-sm">João Vitor Moreira</p>
                  <p className="text-blue-200 text-xs">(85) 98786-0505</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Vice-Presidente</h4>
                  <p className="text-blue-100 text-sm">Marina Marques Maia</p>
                  <p className="text-blue-200 text-xs">(85) 99794-0075</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Coordenador</h4>
                  <p className="text-blue-100 text-sm">Davi Feitosa Gonçalves</p>
                  <p className="text-blue-200 text-xs">(85) 98982-8694</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Endereço</h4>
                  <p className="text-blue-100 text-sm">R. João Adolfo Gurgel, 133</p>
                  <p className="text-blue-200 text-xs">Cocó, Fortaleza - CE</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-blue-100 mb-4">
                  <strong>E-mail:</strong> lincunichristus@gmail.com
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    type="button"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    onClick={() => {
                      window.open('mailto:lincunichristus@gmail.com', '_blank');
                    }}
                  >
                    Enviar E-mail
                  </button>
                  <button 
                    type="button"
                    className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                    onClick={() => {
                      window.open('https://wa.me/5585987860505', '_blank');
                    }}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
