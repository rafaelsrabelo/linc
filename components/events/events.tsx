"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, Clock, MapPin, MessageCircle, Users } from 'lucide-react';
import { useRef } from 'react';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers: number;
  duration: string;
  image?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Simpósio de Neurologia Clínica 2024',
    date: '15 de Dezembro',
    time: '08:00',
    location: 'Auditório Principal - Campus Universitário',
    description: 'Evento anual que reúne os principais especialistas em neurologia para discussão de casos clínicos complexos e atualizações terapêuticas.',
    speakers: 12,
    duration: '8h'
  },
  {
    id: '2',
    title: 'Workshop de Eletroencefalografia',
    date: '22 de Dezembro',
    time: '14:00',
    location: 'Laboratório de Neurofisiologia',
    description: 'Curso prático sobre interpretação de EEG com casos reais e discussão de padrões anormais.',
    speakers: 3,
    duration: '4h'
  },
  {
    id: '3',
    title: 'Jornada de Neuroimagem',
    date: '10 de Janeiro',
    time: '09:00',
    location: 'Centro de Diagnóstico por Imagem',
    description: 'Atualizações em técnicas de neuroimagem e interpretação de exames de ressonância magnética.',
    speakers: 8,
    duration: '6h'
  },
  {
    id: '4',
    title: 'Curso de Neurologia Pediátrica',
    date: '25 de Janeiro',
    time: '08:30',
    location: 'Hospital Pediátrico',
    description: 'Especialização em neurologia pediátrica com foco em desenvolvimento infantil e distúrbios neurológicos.',
    speakers: 5,
    duration: '12h'
  },
  {
    id: '5',
    title: 'Simpósio de Epilepsia',
    date: '5 de Fevereiro',
    time: '09:00',
    location: 'Centro de Epilepsia',
    description: 'Atualizações no diagnóstico e tratamento da epilepsia com casos clínicos complexos.',
    speakers: 6,
    duration: '6h'
  },
  {
    id: '6',
    title: 'Workshop de Neurofisiologia',
    date: '15 de Fevereiro',
    time: '14:00',
    location: 'Laboratório de Neurofisiologia',
    description: 'Técnicas avançadas em neurofisiologia clínica e interpretação de exames.',
    speakers: 4,
    duration: '4h'
  }
];

export const Events = () => {
  const [filter, setFilter] = useState<string>('todos');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filters = [
    { key: 'todos', title: 'Todos' },
    { key: 'proximos', title: 'Próximos' },
    { key: 'passados', title: 'Passados' }
  ];

  const getFilteredEvents = () => {
    if (filter === 'todos') return events;
    if (filter === 'proximos') return events.slice(0, 4); // Simulando eventos próximos
    if (filter === 'passados') return events.slice(4); // Simulando eventos passados
    return events;
  };

  const filteredEvents = getFilteredEvents();

  return (
    <section id="eventos" className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Próximos Eventos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Eventos e Atividades
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Participe dos nossos eventos, workshops e simpósios para se manter atualizado 
            com as últimas tendências em neurologia clínica.
          </p>
        </div>


        {/* Carousel com botões laterais */}
        <div className="relative">
          {/* Botão Anterior - Esquerda */}
          <button 
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
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
              {filteredEvents.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Conteúdo principal */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time} - {event.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{event.speakers} palestrantes</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Botões sempre na parte inferior */}
                    <div className="flex gap-2 mt-auto">
                      <button type="button" className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Inscrever-se
                      </button>
                      <button type="button" className="px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
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

        {/* Destaque do Curso de IA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Destaque Especial
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Curso de Inteligência Artificial
              </h3>
              
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Objetivo: apresentar curso de IA aplicado à Medicina/Neurologia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button type="button" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Saiba Mais
                </button>
                <button type="button" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};