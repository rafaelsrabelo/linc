"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award, GraduationCap, User } from 'lucide-react';

interface Orientador {
  id: string;
  name: string;
  title: string;
  image: string;
  qualifications: string[];
  specializations: string[];
}

const orientadores: Orientador[] = [
  {
    id: '1',
    name: 'Dra. Àlissa Formiga',
    title: 'Neurologista',
    image: '/orientadores/alissa-formiga.jpg',
    qualifications: [
      'Neurologista pelo Hospital Geral de Fortaleza',
      'Médica do Sono pelo Hospital Walter Cantídio - UFC',
      'Mestre em Ciências Médicas - UFC',
      'Professora do curso de Medicina da Unichristus',
      'Especialista em Saúde Pública - UFC',
      'Pós-graduanda em Gestão em Saúde - CBI of Miami',
      'Doutoranda em Medicina Translacional'
    ],
    specializations: ['Neurologia', 'Medicina do Sono', 'Saúde Pública']
  },
  {
    id: '2',
    name: 'Dr. Marcelo Pinheiro',
    title: 'Neurologista',
    image: '/orientadores/marcelo-pinheiro.jpg',
    qualifications: [
      'Neurologista Adulto e Infantil pela USP - Ribeirão Preto',
      'Pós-graduado em Cuidados Paliativos pela USP - RP',
      'Membro titular da SBNI e ABN',
      'Professor do curso de Medicina da Unichristus',
      'Pós-graduando em Transtorno do Espectro Autista - CBI of Miami',
      'Doutorando em Neurologia pela USP - RP'
    ],
    specializations: ['Neurologia Adulto', 'Neurologia Infantil', 'Cuidados Paliativos']
  },
  {
    id: '3',
    name: 'Dr. Bruno Iepsen',
    title: 'Neurologista',
    image: '/orientadores/bruno-iepsen.jpg',
    qualifications: [
      'Neurologista pelo HCFMUSP',
      'Complementação especializada em neurologia da cognição e comportamento pelo HCFMUSP',
      'Membro titular da Academia Brasileira de Neurologia',
      'Editor do @neuropsigeri',
      'Preceptor da Residência Médica em Neurologia do HGF',
      'Preceptor do curso de Medicina da Unichristus'
    ],
    specializations: ['Neurologia Cognitiva', 'Neuropsiquiatria', 'Residência Médica']
  },
  {
    id: '4',
    name: 'Dr. André Borges',
    title: 'Neurologista',
    image: '/orientadores/andre-borges.jpg',
    qualifications: [
      'Neurologista pelo Hospital Geral de Fortaleza',
      'Especialização em Doenças Neurodegenerativas e Toxina Botulínica Terapêutica no HGF',
      'Mestre em Ciências Médicas pela Universidade de Fortaleza',
      'Membro titular da Academia Brasileira de Neurologia',
      'Preceptor da Residência Médica em Neurologia do HGF',
      'Professor do curso de Medicina da Unichristus'
    ],
    specializations: ['Doenças Neurodegenerativas', 'Toxina Botulínica', 'Residência Médica']
  },
  {
    id: '5',
    name: 'Dra. Renata Carvalho',
    title: 'Neurologista',
    image: '/orientadores/renata-carvalho.jpg',
    qualifications: [
      'Médica pela Faculdade de Medicina de Juazeiro do Norte (FMJ-CE)',
      'Neurologista pelo Hospital Geral de Fortaleza (HGF)',
      'Docente e preceptora do curso de Medicina da UNICHRISTUS',
      'Mestranda em Tecnologia e Inovação em Saúde no Centro Universitário Christus',
      'Coordenadora do Serviço de Neurologia do Hospital Monte Klinikum',
      'Membro da Sociedade Brasileira de Cefaleia (SBCe) e da International Headache Society (IHS)'
    ],
    specializations: ['Neurologia', 'Cefaleia', 'Tecnologia em Saúde']
  },
  {
    id: '6',
    name: 'Dr. João José Carvalho',
    title: 'Neurologista',
    image: '/orientadores/joao-jose-carvalho.jpg',
    qualifications: [
      'Mestre em Neurologia pela UFRJ',
      'Doutorado em Neurologia pela UNIFESP',
      'Professor e Coordenador Adjunto do curso de Medicina da Unichristus',
      'Membro fundador do Núcleo de Cefaleias e do Programa de AVC do Serviço de Neurologia do HGF',
      'Professor do curso de Medicina da UECE (2005-2010)'
    ],
    specializations: ['Neurologia', 'Cefaleia', 'AVC']
  }
];

export const Orientadores = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Conheça nossos orientadores
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Orientadores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profissionais especializados em neurologia que orientam e guiam nossos estudantes 
            no desenvolvimento de competências clínicas e pesquisa.
          </p>
        </div>

        {/* Carousel de Orientadores com botões laterais */}
        <div className="relative">
          {/* Botão Anterior - Esquerda */}
          <button 
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              const carousel = document.querySelector('#orientadores-carousel [data-slot="carousel"]');
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
              const carousel = document.querySelector('#orientadores-carousel [data-slot="carousel"]');
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
            id="orientadores-carousel"
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {orientadores.map((orientador) => (
                <CarouselItem key={orientador.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow h-full">
                    {/* Foto do Orientador */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Nome e Título */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {orientador.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {orientador.title}
                      </p>
                    </div>
                    
                    {/* Especializações */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {orientador.specializations.map((spec) => (
                          <span 
                            key={spec}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Qualificações (primeiras 3) */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white mb-2">Principais Qualificações:</h4>
                      <ul className="space-y-1">
                        {orientador.qualifications.slice(0, 3).map((qualification) => (
                          <li key={qualification} className="text-xs text-gray-300 flex items-start gap-2">
                            <Award className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{qualification}</span>
                          </li>
                        ))}
                        {orientador.qualifications.length > 3 && (
                          <li className="text-xs text-primary font-medium">
                            +{orientador.qualifications.length - 3} outras qualificações
                          </li>
                        )}
                      </ul>
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
      </div>
    </section>
  );
};
