import { Award, BookOpen, Brain, Heart, Star, Target, Users } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Sobre a LINC
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Liga de Neurologia Clínica é uma organização dedicada ao avanço do conhecimento 
            e prática em neurologia, conectando profissionais e melhorando a jornada dos pacientes.
          </p>
        </div>

        {/* Quem Somos */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada em 2022, a Liga de Neurologia Clínica nasceu da necessidade de 
                  criar uma comunidade unida de profissionais dedicados ao estudo e prática 
                  da neurologia clínica.
                </p>
                <p>
                  Nossa organização está vinculada a instituições de ensino superior e 
                  hospitais de referência, garantindo excelência acadêmica e prática clínica 
                  de alta qualidade.
                </p>
                <p>
                  Desde nossa fundação, temos trabalhado incansavelmente para promover 
                  o conhecimento neurológico e melhorar os cuidados oferecidos aos pacientes 
                  com doenças neurológicas.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900">50+</h4>
                    <p className="text-sm text-gray-600">Profissionais</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900">3 Anos</h4>
                    <p className="text-sm text-gray-600">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Objetivos</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com metas claras para promover a excelência em neurologia clínica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Promover Conhecimento</h4>
              <p className="text-gray-600">
                Fomentar o estudo e pesquisa em neurologia clínica através de atividades 
                acadêmicas e científicas.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Formar Profissionais</h4>
              <p className="text-gray-600">
                Desenvolver competências técnicas e humanísticas em estudantes e 
                profissionais da área neurológica.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Cuidar de Pacientes</h4>
              <p className="text-gray-600">
                Melhorar a qualidade de vida de pacientes com doenças neurológicas 
                através de cuidados especializados.
              </p>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no campo da neurologia clínica
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Excelência Acadêmica</h4>
                  <p className="text-gray-600">
                    Professores e preceptores altamente qualificados com vasta experiência 
                    em ensino e pesquisa neurológica.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Metodologia Inovadora</h4>
                  <p className="text-gray-600">
                    Abordagem pedagógica moderna que combina teoria e prática, 
                    utilizando casos clínicos reais e simulações.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Comunidade Ativa</h4>
                  <p className="text-gray-600">
                    Rede de profissionais engajados que compartilham conhecimentos 
                    e experiências para o crescimento mútuo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Nossos Valores</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Compromisso com a excelência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Ética e transparência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Inovação e criatividade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Colaboração e trabalho em equipe</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Foco no paciente</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Como Atuamos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Como Atuamos</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa metodologia de trabalho e formas de atuação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Aulas Teóricas</h4>
              <p className="text-gray-600 text-sm">
                Sessões de estudo com conteúdo atualizado e baseado em evidências científicas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Prática Clínica</h4>
              <p className="text-gray-600 text-sm">
                Acompanhamento de casos reais com supervisão de profissionais experientes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pesquisa</h4>
              <p className="text-gray-600 text-sm">
                Desenvolvimento de projetos de pesquisa para avanço do conhecimento neurológico.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Extensão</h4>
              <p className="text-gray-600 text-sm">
                Atividades comunitárias e de conscientização sobre saúde neurológica.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Faça Parte da Nossa Comunidade
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e contribua para o avanço da neurologia clínica. 
            Juntos, podemos fazer a diferença na vida de muitos pacientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Saiba Mais
            </button>
            <button type="button" className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
