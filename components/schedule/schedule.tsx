import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Clock } from "lucide-react";

export const Schedule = () => {
  const scheduleData = [
    {
      date: "20 de Outubro",
      duration: "3h30",
      day: "Segunda-feira",
      topics: [
        "Fundamentos da Inteligência Artificial",
        "IA na Medicina: Panorama Geral",
        "Aplicações Clínicas Básicas"
      ]
    },
    {
      date: "22 de Outubro", 
      duration: "3h30",
      day: "Quarta-feira",
      topics: [
        "Machine Learning em Diagnóstico",
        "Processamento de Linguagem Natural",
        "Casos Práticos e Simulações"
      ]
    },
    {
      date: "27 de Outubro",
      duration: "3h",
      day: "Segunda-feira",
      topics: [
        "Limitações e Ética da IA",
        "Futuro da IA na Medicina",
        "Apresentação de Projetos"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Cronograma
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programação do Curso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Período noturno com 10 horas de conteúdo distribuídas em 3 dias de atividades práticas e teóricas.
          </p>
        </div>

        {/* Grid de Dias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleData.map((day, index) => (
            <Card key={`day-${day.date}`} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Cabeçalho do Dia */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{day.date}</h3>
                  <p className="text-sm text-gray-600 mb-3">{day.day}</p>
                  <Badge className="bg-blue-100 text-blue-800">
                    <Clock className="w-4 h-4 mr-1" />
                    {day.duration}
                  </Badge>
                </div>

                {/* Tópicos do Dia */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                    Conteúdo Programático
                  </h4>
                  <ul className="space-y-3">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={`${day.date}-${topicIndex}`} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumo Total */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Resumo do Curso</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold">10h</p>
                  <p className="text-blue-100">Total de Horas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-blue-100">Dias de Atividades</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">Noturno</p>
                  <p className="text-blue-100">Período</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
