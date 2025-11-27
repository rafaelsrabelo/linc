"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Download, FileText, GraduationCap } from "lucide-react";

export const Certificates = () => {
  return (
    <section id="certificados" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gray-700 text-gray-300 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Certificados
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Seus Certificados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acesse seus certificados de participação em eventos e atividades da LINC
          </p>
        </div>

        {/* Certificates Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4A261] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Certificados Disponíveis
                </h3>
                <p className="text-gray-300 mb-6">
                  Todos os certificados de eventos, cursos e atividades da LINC estão disponíveis 
                  em nossa pasta do Google Drive. Acesse e baixe seus certificados quando necessário.
                </p>
                
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://forms.gle/FR6r1Dw4b3aBDnhdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Acessar Certificados
                </a>
              </div>
            </div>
          </Card>
        </div>

        
      </div>
    </section>
  );
};

