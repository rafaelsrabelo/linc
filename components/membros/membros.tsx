"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { User } from 'lucide-react';

interface Membro {
  id: string;
  name: string;
  position: string;
  image: string;
  year: string;
}

const membros: Membro[] = [
  {
    id: '1',
    name: 'Ana Silva',
    position: 'Presidente',
    image: '/membros/ana-silva.jpg',
    year: '2024'
  },
  {
    id: '2',
    name: 'Carlos Santos',
    position: 'Vice-Presidente',
    image: '/membros/carlos-santos.jpg',
    year: '2024'
  },
  {
    id: '3',
    name: 'Maria Oliveira',
    position: 'Secretária',
    image: '/membros/maria-oliveira.jpg',
    year: '2024'
  },
  {
    id: '4',
    name: 'João Costa',
    position: 'Tesoureiro',
    image: '/membros/joao-costa.jpg',
    year: '2024'
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    position: 'Diretora de Eventos',
    image: '/membros/fernanda-lima.jpg',
    year: '2024'
  },
  {
    id: '6',
    name: 'Pedro Alves',
    position: 'Diretor de Pesquisa',
    image: '/membros/pedro-alves.jpg',
    year: '2024'
  },
  {
    id: '7',
    name: 'Larissa Ferreira',
    position: 'Diretora de Extensão',
    image: '/membros/larissa-ferreira.jpg',
    year: '2024'
  },
  {
    id: '8',
    name: 'Rafael Souza',
    position: 'Diretor de Comunicação',
    image: '/membros/rafael-souza.jpg',
    year: '2024'
  }
];

export const Membros = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Membros
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Membros
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os estudantes de Medicina que fazem parte da LINC e contribuem 
            para o desenvolvimento da neurologia clínica.
          </p>
        </div>

        {/* Carousel de Membros com botões laterais */}
        <div className="relative">
          {/* Botão Anterior - Esquerda */}
          <button 
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors flex items-center justify-center shadow-lg"
            onClick={() => {
              const carousel = document.querySelector('#membros-carousel [data-slot="carousel"]');
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
              const carousel = document.querySelector('#membros-carousel [data-slot="carousel"]');
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
            id="membros-carousel"
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {membros.map((membro) => (
                <CarouselItem key={membro.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow h-full">
                    {/* Foto do Membro */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <User className="w-10 h-10 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Nome e Cargo */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {membro.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {membro.position}
                      </p>
                      <p className="text-xs text-gray-400">
                        Gestão {membro.year}
                      </p>
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
