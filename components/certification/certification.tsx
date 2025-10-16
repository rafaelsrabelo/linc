import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Clock, Users } from "lucide-react";

export const Certification = () => {
  const requirements = [
    "Presença mínima de 75% nas aulas",
    "Participação nas atividades práticas",
    "Conclusão dos exercícios propostos",
    "Avaliação final do curso"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Certificação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificado LINC/UniChristus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certificação de 10 horas condicionada à presença e participação nas atividades práticas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações da Certificação */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certificado Oficial</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-700 mb-2">10h</div>
                  <p className="text-yellow-800 font-semibold">Carga Horária</p>
                  <p className="text-yellow-700 text-sm mt-2">LINC/UniChristus</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-gray-700">Certificado oficial da instituição</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-gray-700">Reconhecimento acadêmico</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-gray-700">Valorização do currículo</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-gray-700">Diferencial competitivo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requisitos */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Requisitos</h3>
              </div>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={`req-${requirement.slice(0, 10)}`} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Importante</h4>
                <p className="text-green-800 text-sm">
                  O certificado será emitido apenas para participantes que cumprirem todos os requisitos. 
                  A presença é fundamental para o aproveitamento completo do curso.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefícios da Certificação */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Por que ter este Certificado?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Diferencial</h4>
                  <p className="text-blue-100 text-sm">
                    Primeiro curso de IA em Medicina da UniChristus
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Networking</h4>
                  <p className="text-blue-100 text-sm">
                    Conecte-se com profissionais e estudantes
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Futuro</h4>
                  <p className="text-blue-100 text-sm">
                    Prepare-se para a medicina do futuro
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
