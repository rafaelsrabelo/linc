"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award, GraduationCap, Instagram, User } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface Orientador {
  id: string;
  name: string;
  title: string;
  image: string;
  qualifications: string[];
  specializations: string[];
  instagram?: string;
}

const orientadores: Orientador[] = [
  {
    id: '1',
    name: 'Dra. Álissa Formiga',
    title: 'Neurologista',
    image: '/orientadores/alissa-formiga.png',
    qualifications: [
      'Neurologista pelo Hospital Geral de Fortaleza',
      'Médica do Sono pelo Hospital Walter Cantídio - Universidade Federal do Ceará - UFC',
      'Mestre em Ciências Médicas - Universidade Federal do Ceará - UFC',
      'Professora do curso de Medicina da Unichristus - Fortaleza - CE',
      'Especialista em Saúde Pública - Universidade Federal do Ceará - UFC',
      'Doutoranda em Medicina Translacional'
    ],
    specializations: ['Neurologia', 'Medicina do Sono', 'Saúde Pública'],
    instagram: 'alissaformiga'
  },
  {
    id: '2',
    name: 'Dr. Marcelo Pinheiro',
    title: 'Neurologista',
    image: '/orientadores/marcelo.png',
    qualifications: [
      'Neurologista Adulto e Infantil pela USP - Ribeirão Preto',
      'Pós-graduado em Cuidados Paliativos pela USP - RP',
      'Membro titular da SBNI e ABN',
      'Professor do curso de Medicina da Unichristus',
      'Pós-graduando em Transtorno do Espectro Autista - CBI of Miami',
      'Doutorando em Neurologia pela USP - RP'
    ],
    specializations: ['Neurologia Adulto', 'Neurologia Infantil', 'Cuidados Paliativos'],
    instagram: 'dr.marcelopinheiro'
  },
  {
    id: '3',
    name: 'Dr. Bruno Iepsen',
    title: 'Neurologista',
    image: '/orientadores/bruno.png',
    qualifications: [
      'Neurologista pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP)',
      'Complementação especializada em neurologia da cognição e comportamento pelo HCFMUSP',
      'Membro titular da Academia Brasileira de Neurologia (ABN)',
      'Editor do @neuropsigeri',
      'Coordenador da Residência Médica em Neurologia do Hospital Geral de Fortaleza',
      'Preceptor do curso de Medicina da Unichristus',
      'Diretor científico da associação brasileira de Alzheimer (ABRAZ)'
    ],
    specializations: ['Neurologia Cognitiva', 'Neuropsiquiatria', 'Residência Médica'],
    instagram: 'drbrunoiepsen.neuro'
  },
  {
    id: '4',
    name: 'Dr. André Borges',
    title: 'Neurologista',
    image: '/orientadores/andre-borges.png',
    qualifications: [
      'Neurologista pelo Hospital Geral de Fortaleza',
      'Especialização em Doenças Neurodegenerativas e uso de Toxina Botulínica Terapêutica no Hospital Geral de Fortaleza',
      'Mestre em Ciências Médicas pela Universidade de Fortaleza',
      'Membro titular da Academia Brasileira de Neurologia (ABN)',
      'Preceptor da Residência Médica em Neurologia do Hospital Geral de Fortaleza',
      'Professor do curso de Medicina da Unichristus'
    ],
    specializations: ['Doenças Neurodegenerativas', 'Toxina Botulínica', 'Residência Médica'],
    instagram: 'andreborgesfg'
  },
  {
    id: '5',
    name: 'Dra. Renata Carvalho',
    title: 'Neurologista',
    image: '/orientadores/renata-carvalho.png',
    qualifications: [
      'Médica pela Faculdade de Medicina de Juazeiro do Norte (FMJ-CE)',
      'Neurologista pelo Hospital Geral de Fortaleza (HGF)',
      'Docente do curso de medicina do centro universitário christus (UNICHRISTUS)',
      'Mestrado em Tecnologia e Inovação em Saúde no Centro Universitário Christus (UNICHRISTUS)',
      'Coordenadora do Serviço de Neurologia do Hospital Monte Klinikum',
      'Membro da Sociedade Brasileira de Cefaleia (SBCe) e da International Headache Society (IHS)'
    ],
    specializations: ['Neurologia', 'Cefaleia', 'Tecnologia em Saúde'],
    instagram: 'rcarvalho1983'
  },
  {
    id: '6',
    name: 'Dr. João José Carvalho',
    title: 'Neurologista',
    image: '/orientadores/joao-jose.png',
    qualifications: [
      'Doutor em Neurologia/Neurociências pela UNIFESP - Escola Paulista de Medicina',
      'Mestre em Neurologia pela UFRJ',
      'Membro Fundador do Núcleo de Cefaleias do Servico de Neurologia do Hospital Geral de Fortaleza',
      'Membro da Association for the Advancement of Artificial Intelligence (AAAI) - EUA',
      'Criador do workshop "Inteligência Artificial na Medicina"',
      'Professor de Inteligência Artificial na Medicina',
      'Certificado em Artificial Intelligence in Health Care (MIT)'
    ],
    specializations: ['Neurologia', 'Cefaleia', 'Inteligência Artificial'],
    instagram: 'dr.joaojosecarvalho'
  },
  {
    id: '7',
    name: 'Dr. George Linard',
    title: 'Neurologista',
    image: '/orientadores/george-linard.jpg',
    qualifications: [
      'Médico pela Universidade Federal do Ceará (UFC)',
      'Residência em Neurologia - HC/Unicamp',
      'Residência em Epilepsia e EEG - HC/Unicamp',
      'MBA Executivo em Saúde',
      'Mestre em Ciências Médicas',
      'Diretor da Neuroteste'
    ],
    specializations: ['Neurologia', 'Epilepsia', 'EEG'],
    instagram: undefined
  },
  {
    id: '8',
    name: 'Dra. Stephanie Scott',
    title: 'Neurologista',
    image: '/orientadores/stephanie-scott.jpeg',
    qualifications: [
      'Neurologista pelo Hospital Universitário Walter Cantidio - Universidade Federal do Ceará - UFC',
      'Mestre em Ciências Médicas pela Universidade Federal do Ceará - UFC',
      'Especialista em Saúde da Família pela Universidade Federal do Ceará - UFC',
      'Professora do curso de Medicina da Unichristus',
      'Doutoranda pelo Programa de Ciências Médicas da Universidade Federal do Ceará - UFC'
    ],
    specializations: ['Neurologia', 'Saúde da Família', 'Ciências Médicas'],
    instagram: undefined
  }
];

export const Orientadores = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-900" id='orientadores'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-medium mb-6">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              if (carouselRef.current) {
                const prevButton = carouselRef.current.querySelector('[data-slot="carousel-previous"]') as HTMLButtonElement;
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              if (carouselRef.current) {
                const nextButton = carouselRef.current.querySelector('[data-slot="carousel-next"]') as HTMLButtonElement;
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
            ref={carouselRef}
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
                        <Image 
                          src={orientador.image}
                          alt={`Foto de ${orientador.name}`}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Nome e Título */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {orientador.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium mb-2">
                        {orientador.title}
                      </p>
                      {/* Instagram Link */}
                      {orientador.instagram && (
                        <a 
                          href={`https://instagram.com/${orientador.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs"
                        >
                          <Instagram className="w-3 h-3" />
                          <span>@{orientador.instagram}</span>
                        </a>
                      )}
                    </div>
                    
                    {/* Especializações */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {orientador.specializations.map((spec) => (
                          <span 
                            key={spec}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
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
                            <Award className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{qualification}</span>
                          </li>
                        ))}
                        {orientador.qualifications.length > 3 && (
                          <li className="text-xs text-gray-400 font-medium">
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
