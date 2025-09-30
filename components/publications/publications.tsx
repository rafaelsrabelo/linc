"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Calendar, Download, ExternalLink, FileText, Newspaper, Users } from 'lucide-react';
import { useState } from 'react';

interface Publication {
  id: string;
  title: string;
  type: 'noticias' | 'artigos' | 'materiais' | 'relatos' | 'press';
  category: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  link?: string;
  download?: string;
}

const publications: Publication[] = [
  // Notícias da Liga
  {
    id: '1',
    title: 'LINC Academy Realiza Simpósio de Neurologia Clínica 2024',
    type: 'noticias',
    category: 'Notícias da Liga',
    description: 'Evento reuniu mais de 200 profissionais para discussão de casos clínicos complexos e atualizações terapêuticas.',
    date: '15 de Dezembro, 2024',
    author: 'Equipe LINC',
    tags: ['Simpósio', 'Neurologia', 'Evento'],
    link: '/noticias/simposio-2024'
  },
  {
    id: '2',
    title: 'Nova Parceria com Hospital Universitário',
    type: 'noticias',
    category: 'Notícias da Liga',
    description: 'LINC Academy estabelece parceria estratégica para ampliar oportunidades de estágio e pesquisa.',
    date: '10 de Dezembro, 2024',
    author: 'Equipe LINC',
    tags: ['Parceria', 'Hospital', 'Pesquisa'],
    link: '/noticias/parceria-hospital'
  },
  // Artigos/Resumos
  {
    id: '3',
    title: 'Abordagem Multidisciplinar no Tratamento da Epilepsia Refratária',
    type: 'artigos',
    category: 'Artigos/Resumos',
    description: 'Revisão sistemática sobre as melhores práticas no tratamento de pacientes com epilepsia refratária.',
    date: '5 de Dezembro, 2024',
    author: 'Dr. João Silva et al.',
    tags: ['Epilepsia', 'Tratamento', 'Multidisciplinar'],
    download: '/downloads/artigo-epilepsia.pdf'
  },
  {
    id: '4',
    title: 'Impacto da Telemedicina na Neurologia Clínica Pós-Pandemia',
    type: 'artigos',
    category: 'Artigos/Resumos',
    description: 'Análise do uso da telemedicina em consultas neurológicas e sua eficácia no diagnóstico.',
    date: '1 de Dezembro, 2024',
    author: 'Dra. Maria Santos et al.',
    tags: ['Telemedicina', 'Neurologia', 'Pandemia'],
    download: '/downloads/artigo-telemedicina.pdf'
  },
  // Materiais Didáticos
  {
    id: '5',
    title: 'Guia Prático de Interpretação de EEG',
    type: 'materiais',
    category: 'Materiais Didáticos',
    description: 'Material didático completo para interpretação de eletroencefalogramas com casos clínicos.',
    date: '28 de Novembro, 2024',
    author: 'Prof. Dr. Roberto Lima',
    tags: ['EEG', 'Didático', 'Interpretação'],
    download: '/downloads/guia-eeg.pdf'
  },
  {
    id: '6',
    title: 'Protocolo de Avaliação Neurológica Pediátrica',
    type: 'materiais',
    category: 'Materiais Didáticos',
    description: 'Protocolo padronizado para avaliação neurológica em pacientes pediátricos.',
    date: '25 de Novembro, 2024',
    author: 'Dra. Ana Costa',
    tags: ['Pediatria', 'Protocolo', 'Avaliação'],
    download: '/downloads/protocolo-pediatrico.pdf'
  },
  // Relatos de Experiência
  {
    id: '7',
    title: 'Experiência com Terapia Ocupacional em Pacientes com AVC',
    type: 'relatos',
    category: 'Relatos de Experiência',
    description: 'Relato de experiência sobre a integração da terapia ocupacional no tratamento de pacientes com AVC.',
    date: '20 de Novembro, 2024',
    author: 'Dra. Julia Ferreira',
    tags: ['AVC', 'Terapia Ocupacional', 'Reabilitação'],
    link: '/relatos/terapia-ocupacional-avc'
  },
  // Press
  {
    id: '8',
    title: 'LINC Academy é Destaque em Revista Médica',
    type: 'press',
    category: 'Press',
    description: 'Matéria sobre os avanços da Liga de Neurologia Clínica em revista especializada.',
    date: '15 de Novembro, 2024',
    author: 'Revista Médica',
    tags: ['Mídia', 'Destaque', 'Reconhecimento'],
    link: '/press/revista-medica'
  }
];

export const Publications = () => {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    { key: 'todos', title: 'Todos', icon: FileText },
    { key: 'noticias', title: 'Notícias da Liga', icon: Newspaper },
    { key: 'artigos', title: 'Artigos/Resumos', icon: FileText },
    { key: 'materiais', title: 'Materiais Didáticos', icon: BookOpen },
    { key: 'relatos', title: 'Relatos de Experiência', icon: Users },
    { key: 'press', title: 'Press', icon: ExternalLink }
  ];

  const getFilteredPublications = () => {
    if (filter === 'todos') return publications;
    return publications.filter(pub => pub.type === filter);
  };

  const filteredPublications = getFilteredPublications();

  const getIconForType = (type: string) => {
    const category = categories.find(cat => cat.key === type);
    return category ? category.icon : FileText;
  };

  const getColorForType = (type: string) => {
    const colorMap: Record<string, string> = {
      'noticias': 'bg-blue-100 text-blue-600',
      'artigos': 'bg-green-100 text-green-600',
      'materiais': 'bg-purple-100 text-purple-600',
      'relatos': 'bg-orange-100 text-orange-600',
      'press': 'bg-red-100 text-red-600'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Publicações & Notícias
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conteúdo e Notícias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as últimas publicações, notícias e materiais didáticos da Liga de Neurologia Clínica.
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
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              {filteredPublications.map((publication) => {
                const Icon = getIconForType(publication.type);
                const colorClass = getColorForType(publication.type);
                
                return (
                  <CarouselItem key={publication.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${colorClass}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${colorClass} mb-2`}>
                            {publication.category}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                            {publication.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {publication.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.date}</span>
                        </div>
                        <span>{publication.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.tags.map((tag, index) => (
                          <span key={index.toString()} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        {publication.link && (
                          <a 
                            href={publication.link}
                            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Ler mais
                          </a>
                        )}
                        {publication.download && (
                          <a 
                            href={publication.download}
                            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary to-blue-600 text-white rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Mantenha-se Atualizado
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Receba as últimas publicações e notícias da Liga de Neurologia Clínica 
            diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="button" className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};