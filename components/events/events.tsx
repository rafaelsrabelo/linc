"use client";

import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, MessageCircle, Users } from 'lucide-react';
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
    date: '18 de Janeiro',
    time: '08:30',
    location: 'Hospital Infantil',
    description: 'Especialização em distúrbios neurológicos da infância com foco em diagnóstico precoce.',
    speakers: 5,
    duration: '10h'
  }
];

export const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('todos');

  const filteredEvents = events.filter(() => {
    if (filter === 'todos') return true;
    if (filter === 'proximos') return true; // Todos são próximos por enquanto
    if (filter === 'passados') return false;
    return true;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= filteredEvents.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? filteredEvents.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Próximos Eventos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos nossos eventos e mantenha-se atualizado com as últimas 
            novidades em neurologia clínica.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setFilter('todos')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'todos' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setFilter('proximos')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'proximos' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Próximos
            </button>
            <button
              type="button"
              onClick={() => setFilter('passados')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'passados' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Passados
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navegação */}
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Evento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {filteredEvents.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para evento ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Próximo evento"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Card do Evento */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredEvents[currentIndex]?.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">{filteredEvents[currentIndex]?.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{filteredEvents[currentIndex]?.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">{filteredEvents[currentIndex]?.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredEvents[currentIndex]?.description}
                  </p>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">{filteredEvents[currentIndex]?.speakers} palestrantes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{filteredEvents[currentIndex]?.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{filteredEvents[currentIndex]?.duration}</span>
                </div>
                
                <button type="button" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de Posição */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {filteredEvents.map((event, index) => (
              <button
                key={event.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Evento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
