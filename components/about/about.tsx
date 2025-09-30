import { Award, BookOpen, Brain, Heart, Star, Target, Users } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            LIGA ACADÊMICA DE NEUROLOGIA CLÍNICA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Sobre a LINC
          </h2>
        </div>

        {/* Conteúdo lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Sobre a LINC */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Sobre a LINC</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A Liga Acadêmica em Neurologia Clínica da Unichristus reúne estudantes de Medicina com interesse em compreender de forma ampla e aplicada o funcionamento do sistema nervoso e as principais condições neurológicas que impactam a prática médica.
              </p>
            </div>
          </div>

          {/* Nossos Objetivos - Introdução */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Nossos Objetivos</h3>
            <p className="text-lg text-gray-300">
            O objetivo central da liga é estimular o pensamento crítico, a pesquisa e o desenvolvimento de competências clínicas, preparando seus membros para enfrentar os desafios diagnósticos e terapêuticos da Neurologia com excelência.            </p>
          </div>
        </div>

        {/* Cards dos Objetivos */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Promover Conhecimento</h4>
              <p className="text-gray-300">
                Fomentar o estudo e pesquisa em neurologia clínica através de atividades 
                acadêmicas e científicas.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Formar Profissionais</h4>
              <p className="text-gray-300">
                Desenvolver competências técnicas e humanísticas em estudantes e 
                profissionais da área neurológica.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Cuidar de Pacientes</h4>
              <p className="text-gray-300">
                Melhorar a qualidade de vida de pacientes com doenças neurológicas 
                através de cuidados especializados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
