"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, Clock, MapPin, MessageCircle, Users } from 'lucide-react';
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
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Próximos Eventos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eventos e Atividades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos nossos eventos, workshops e simpósios para se manter atualizado 
            com as últimas tendências em neurologia clínica.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => {
            const isActive = filter === filterOption.key;
            
            return (
              <button
                key={filterOption.key}
                type="button"
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filterOption.title}
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
              {filteredEvents.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow h-full">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time} - {event.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.speakers} palestrantes</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-primary to-blue-600 text-white rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Não Perca Nenhum Evento
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Receba notificações sobre nossos próximos eventos e mantenha-se sempre atualizado 
            com as novidades da Liga de Neurologia Clínica.
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