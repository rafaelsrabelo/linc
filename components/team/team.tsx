"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award, GraduationCap, Linkedin, Mail, Star, Users } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  description: string;
  image?: string;
  email?: string;
  linkedin?: string;
  category: 'directoria' | 'docentes' | 'membros' | 'ex-alunos';
}

const teamMembers: TeamMember[] = [
  // Diretoria
  {
    id: '1',
    name: 'Dr. João Silva',
    role: 'Presidente',
    position: 'Neurologista Clínico',
    description: 'Especialista em neurologia clínica com mais de 15 anos de experiência.',
    category: 'directoria',
    email: 'joao.silva@linc.com',
    linkedin: 'joao-silva-neurologia'
  },
  {
    id: '2',
    name: 'Dra. Maria Santos',
    role: 'Vice-Presidente',
    position: 'Neurofisiologista',
    description: 'Especialista em neurofisiologia e eletroencefalografia.',
    category: 'directoria',
    email: 'maria.santos@linc.com',
    linkedin: 'maria-santos-neurofisiologia'
  },
  {
    id: '3',
    name: 'Dr. Carlos Oliveira',
    role: 'Secretário',
    position: 'Neurologista Pediátrico',
    description: 'Especialista em neurologia pediátrica e desenvolvimento infantil.',
    category: 'directoria',
    email: 'carlos.oliveira@linc.com',
    linkedin: 'carlos-oliveira-neurologia-pediatrica'
  },
  // Docentes
  {
    id: '4',
    name: 'Prof. Dr. Roberto Lima',
    role: 'Coordenador Acadêmico',
    position: 'Professor Titular',
    description: 'Professor titular de neurologia com foco em pesquisa clínica.',
    category: 'docentes',
    email: 'roberto.lima@linc.com',
    linkedin: 'roberto-lima-neurologia'
  },
  {
    id: '5',
    name: 'Dra. Ana Costa',
    role: 'Preceptora',
    position: 'Neurologista Hospitalar',
    description: 'Preceptora de residentes em neurologia com vasta experiência clínica.',
    category: 'docentes',
    email: 'ana.costa@linc.com',
    linkedin: 'ana-costa-neurologia'
  },
  // Membros
  {
    id: '6',
    name: 'Dr. Pedro Almeida',
    role: 'Membro Ativo',
    position: 'Neurologista',
    description: 'Membro ativo da liga, participando de projetos de pesquisa.',
    category: 'membros',
    email: 'pedro.almeida@linc.com'
  },
  {
    id: '7',
    name: 'Dra. Julia Ferreira',
    role: 'Membro Ativo',
    position: 'Residente em Neurologia',
    description: 'Residente em neurologia, participando ativamente das atividades da liga.',
    category: 'membros',
    email: 'julia.ferreira@linc.com'
  },
  // Ex-alunos
  {
    id: '8',
    name: 'Dr. Marcos Rodrigues',
    role: 'Ex-aluno',
    position: 'Neurologista',
    description: 'Ex-aluno da liga, hoje neurologista em hospital de referência.',
    category: 'ex-alunos',
    email: 'marcos.rodrigues@linc.com',
    linkedin: 'marcos-rodrigues-neurologia'
  }
];

export const Team = () => {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    { key: 'todos', title: 'Todos', icon: Users },
    { key: 'directoria', title: 'Diretoria', icon: Award },
    { key: 'docentes', title: 'Docentes/Preceptores', icon: GraduationCap },
    { key: 'membros', title: 'Membros', icon: Users },
    { key: 'ex-alunos', title: 'Ex-alunos', icon: Star }
  ];

  const getFilteredMembers = () => {
    if (filter === 'todos') return teamMembers;
    return teamMembers.filter(member => member.category === filter);
  };

  const filteredMembers = getFilteredMembers();

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Nossa Equipe
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais dedicados e experientes que formam a base da Liga Acadêmica de Neurologia Clínica.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = filter === category.key;
            
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setFilter(category.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredMembers.map((member) => (
                <CarouselItem key={member.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm font-medium text-primary mb-1">
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {member.position}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          {member.description}
                        </p>
                        <div className="flex gap-2">
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                            >
                              <Mail className="w-3 h-3" />
                              Email
                            </a>
                          )}
                          {member.linkedin && (
                            <a 
                              href={`https://linkedin.com/in/${member.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                            >
                              <Linkedin className="w-3 h-3" />
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer Fazer Parte da Nossa Equipe?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Junte-se à Liga Acadêmica de Neurologia Clínica e faça parte de uma comunidade 
            dedicada ao avanço do conhecimento em neurologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Tornar-se Membro
            </button>
            <button type="button" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};