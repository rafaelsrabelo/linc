import { BookOpen, Calendar, Heart, Users } from 'lucide-react';

interface Atividade {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  examples: string[];
  color: string;
}

const atividades: Atividade[] = [
  {
    id: '1',
    title: 'AULAS INTERNAS',
    description: 'Sessões educativas sobre temas específicos da neurologia clínica',
    icon: BookOpen,
    examples: [
      'AVC',
      'Neuroanatomia',
      'Tumores cerebrais e cirurgia oncológica',
      'Epilepsias'
    ],
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'PARTICIPAÇÃO EM CONGRESSOS',
    description: 'Presença em eventos científicos nacionais e internacionais',
    icon: Calendar,
    examples: [
      'BRAIN 2025',
      'CBN 2024',
      'CPN 2025'
    ],
    color: 'bg-green-500'
  },
  {
    id: '3',
    title: 'AÇÕES DE EXTENSÃO',
    description: 'Atividades comunitárias e de conscientização',
    icon: Heart,
    examples: [
      'Caminhada Movimente-se'
    ],
    color: 'bg-purple-500'
  },
  {
    id: '4',
    title: 'ATIVIDADES CIENTÍFICAS',
    description: 'Organização de atividades científicas e educacionais',
    icon: Users,
    examples: [
      'Os Segredos da Neuroftalmologia',
      'Neuroimunologia Clínica',
      'IV Fórum Clínica da Memória'
    ],
    color: 'bg-orange-500'
  }
];

export const Atividades = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            O que a LINC faz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossas Atividades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A LINC desenvolve diversas atividades para promover o conhecimento em neurologia clínica 
            e preparar seus membros para a prática médica especializada.
          </p>
        </div>

        {/* Grid de Atividades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {atividades.map((atividade) => {
            const Icon = atividade.icon;
            return (
              <div 
                key={atividade.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group"
              >
                {/* Ícone */}
                <div className={`w-12 h-12 ${atividade.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {atividade.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-600 mb-4 text-sm">
                  {atividade.description}
                </p>
                
                {/* Exemplos */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Exemplos:</h4>
                  <ul className="space-y-1">
                    {atividade.examples.map((example) => (
                      <li key={example} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 ${atividade.color} rounded-full`} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
