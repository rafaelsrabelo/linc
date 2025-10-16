import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Target, Users } from "lucide-react";

export const CourseInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Sobre o Curso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Objetivo do Curso
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Este será o primeiro curso de Inteligência Artificial em Medicina do Centro Universitário Christus.
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivo Principal</h3>
              <p className="text-gray-600">
                Promover e expandir o conhecimento dos estudantes de Medicina sobre Inteligência Artificial (IA).
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foco do Curso</h3>
              <p className="text-gray-600">
                Fundamentos, aplicações clínicas, limitações e boas práticas da IA na medicina.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aplicações</h3>
              <p className="text-gray-600">
                Como a IA pode aprimorar estratégias de aprendizado e apoiar a tomada de decisão.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsabilidade</h3>
              <p className="text-gray-600">
                Sempre com responsabilidade ética e técnica na aplicação da IA.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Descrição Detalhada */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Sobre a LINC
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Somos a Liga Acadêmica em Neurologia do Centro Universitário Christus (LINC). 
                  Nosso propósito é melhorar a jornada das pessoas com doenças neurológicas, 
                  fortalecendo ensino, pesquisa e extensão, e combatendo a &quot;neurofobia&quot; por meio de uma 
                  formação médica crítica, ética e prática.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Atuamos em projetos que conectam ciência, tecnologia e cuidado centrado na pessoa, 
                  aproximando estudantes dos desafios reais da neurologia contemporânea.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

