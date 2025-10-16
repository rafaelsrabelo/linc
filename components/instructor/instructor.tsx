import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

export const Instructor = () => {
  const qualifications = [
    "Mestre em Neurologia pela UFRJ",
    "Doutor em Neurologia pela UNIFESP", 
    "Professor e Coordenador Adjunto do curso de Medicina da UniChristus",
    "Professor de Inteligência Artificial na Medicina",
    "Certificado em Artificial Intelligence in Health Care (MIT)",
    "Membro da Association for the Advancement of Artificial Intelligence (AAAI) - EUA",
    "Criador do workshop 'Inteligência Artificial na Medicina'"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Docente
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prof. Dr. João José Freitas de Carvalho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialista em Neurologia e Inteligência Artificial na Medicina com vasta experiência acadêmica e internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto e Informações Básicas */}
          <div className="text-center lg:text-left">
            <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
              <Image
                src="/instrutor-joao-jose.jpg"
                alt="Prof. Dr. João José Freitas de Carvalho"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professor Titular</p>
                  <p className="text-sm text-gray-600">UniChristus - Fortaleza/CE</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certificação MIT</p>
                  <p className="text-sm text-gray-600">AI in Health Care</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Membro AAAI</p>
                  <p className="text-sm text-gray-600">Association for AI - EUA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualificações Detalhadas */}
          <div>
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Qualificações Acadêmicas
                </h3>
                
                <div className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <div key={`qual-${qualification.slice(0, 15)}`} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{qualification}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Especialização</h4>
                  <p className="text-gray-700 text-sm">
                    Professor especializado em Inteligência Artificial na Medicina com experiência 
                    internacional e reconhecimento acadêmico. Criador de workshops pioneiros na área 
                    e membro de associações internacionais de IA.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
