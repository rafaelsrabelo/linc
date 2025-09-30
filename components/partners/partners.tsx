"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Building2, ExternalLink, Handshake, Mail, Star } from 'lucide-react';
import { useState } from 'react';

interface Partner {
  id: string;
  name: string;
  type: 'parceiro' | 'patrocinador';
  category: string;
  description: string;
  logo?: string;
  website?: string;
  contact?: string;
  benefits: string[];
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Hospital Universitário',
    type: 'parceiro',
    category: 'Instituição de Saúde',
    description: 'Parceria estratégica para estágios e pesquisa em neurologia clínica.',
    website: 'https://hospitaluniversitario.com.br',
    contact: 'parcerias@hospitaluniversitario.com.br',
    benefits: ['Estágios clínicos', 'Pesquisa colaborativa', 'Acesso a casos complexos']
  },
  {
    id: '2',
    name: 'Laboratório de Neurociências',
    type: 'parceiro',
    category: 'Centro de Pesquisa',
    description: 'Colaboração em projetos de pesquisa em neurociências e desenvolvimento de novos tratamentos.',
    website: 'https://labneurociencias.org',
    contact: 'contato@labneurociencias.org',
    benefits: ['Pesquisa avançada', 'Tecnologia de ponta', 'Publicações científicas']
  },
  {
    id: '3',
    name: 'Farmacêutica MedTech',
    type: 'patrocinador',
    category: 'Indústria Farmacêutica',
    description: 'Patrocínio para eventos e desenvolvimento de materiais educacionais em neurologia.',
    website: 'https://medtech.com.br',
    contact: 'relacionamento@medtech.com.br',
    benefits: ['Patrocínio de eventos', 'Materiais educacionais', 'Bolsas de estudo']
  },
  {
    id: '4',
    name: 'Sociedade Brasileira de Neurologia',
    type: 'parceiro',
    category: 'Sociedade Médica',
    description: 'Parceria institucional para desenvolvimento de diretrizes e protocolos clínicos.',
    website: 'https://sbn.org.br',
    contact: 'parcerias@sbn.org.br',
    benefits: ['Diretrizes clínicas', 'Certificação', 'Networking profissional']
  },
  {
    id: '5',
    name: 'Universidade Federal',
    type: 'parceiro',
    category: 'Instituição de Ensino',
    description: 'Colaboração acadêmica para programas de pós-graduação e pesquisa em neurologia.',
    website: 'https://uf.edu.br',
    contact: 'neurologia@uf.edu.br',
    benefits: ['Programas de pós-graduação', 'Orientação acadêmica', 'Recursos educacionais']
  },
  {
    id: '6',
    name: 'TechHealth Solutions',
    type: 'patrocinador',
    category: 'Tecnologia em Saúde',
    description: 'Patrocínio para desenvolvimento de plataformas digitais e telemedicina em neurologia.',
    website: 'https://techhealth.com.br',
    contact: 'parcerias@techhealth.com.br',
    benefits: ['Tecnologia digital', 'Telemedicina', 'Inovação em saúde']
  }
];

export const Partners = () => {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    { key: 'todos', title: 'Todos', icon: Building2 },
    { key: 'parceiro', title: 'Parceiros', icon: Handshake },
    { key: 'patrocinador', title: 'Patrocinadores', icon: Star }
  ];

  const getFilteredPartners = () => {
    if (filter === 'todos') return partners;
    return partners.filter(partner => partner.type === filter);
  };

  const filteredPartners = getFilteredPartners();

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            Parceiros & Patrocinadores
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizações que compartilham nossa missão de avançar o conhecimento em neurologia clínica.
          </p>
        </div>


        {/* Carousel de Parceiros com botões laterais */}
        <div className="relative mb-16">
          {/* Botão Anterior - Esquerda */}
          <button 
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              const carousel = document.querySelector('#partners-carousel [data-slot="carousel"]');
              if (carousel) {
                const prevButton = carousel.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement;
                if (prevButton) prevButton.click();
              }
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Seta para esquerda</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botão Próximo - Direita */}
          <button 
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              const carousel = document.querySelector('#partners-carousel [data-slot="carousel"]');
              if (carousel) {
                const nextButton = carousel.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement;
                if (nextButton) nextButton.click();
              }
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Seta para direita</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <Carousel
            id="partners-carousel"
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.filter(partner => partner.type === 'parceiro').map((partner) => (
                <CarouselItem key={partner.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Conteúdo principal */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-primary font-medium mb-2">
                            {partner.category}
                          </p>
                          <p className="text-sm text-gray-600 mb-3">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Links sempre na parte inferior */}
                    <div className="flex gap-2 mt-auto">
                      {partner.website && (
                        <a 
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Website
                        </a>
                      )}
                      {partner.contact && (
                        <a 
                          href={`mailto:${partner.contact}`}
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Contato
                        </a>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Setas ocultas para funcionalidade */}
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </div>

        {/* Seção de Patrocinadores */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Patrocinadores</h3>
            <p className="text-gray-600">
              Empresas que apoiam nossa missão de promover a excelência em neurologia clínica
            </p>
          </div>
          
          {/* Carousel Automático de Patrocinadores */}
          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partners.filter(partner => partner.type === 'patrocinador').map((partner) => (
                  <CarouselItem key={partner.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full text-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {partner.description}
                      </p>
                      {partner.website && (
                        <a 
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Website
                        </a>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};