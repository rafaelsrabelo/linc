"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { User } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface Membro {
  id: string;
  name: string;
  position: string;
  image: string;
  year: string;
}

const membros: Membro[] = [
  // PRESIDÊNCIA
  {
    id: '1',
    name: 'João Vitor Moreira',
    position: 'Presidente',
    image: '/membros/JOAO VITOR MOREIRA.jpeg',
    year: '2024'
  },
  {
    id: '2',
    name: 'Marina Maia',
    position: 'Vice-Presidente',
    image: '/membros/MARINA MAIA.jpeg',
    year: '2024'
  },
  {
    id: '3',
    name: 'Enzo Parente',
    position: 'Conselheiro',
    image: '/membros/ENZO PARENTE.jpeg',
    year: '2024'
  },
  // SECRETARIA
  {
    id: '4',
    name: 'Luiza Gripp',
    position: 'Secretaria',
    image: '/membros/LUIZA GRIPP.jpeg',
    year: '2024'
  },
  {
    id: '5',
    name: 'Maria Giulia Bezerra',
    position: 'Secretaria',
    image: '/membros/MARIA GIULIA BEZERRA.jpeg',
    year: '2024'
  },
  // ENSINO
  {
    id: '6',
    name: 'Bruna Nobre',
    position: 'Coordenadora de Ensino',
    image: '/membros/BRUNA NOBRE.jpeg',
    year: '2024'
  },
  {
    id: '8',
    name: 'Aline Vieira',
    position: 'Ensino',
    image: '/membros/ALINE VIEIRA.jpeg',
    year: '2024'
  },
  {
    id: '9',
    name: 'Beatriz Bezerra',
    position: 'Ensino',
    image: '/membros/BEATRIZ BEZERRA.jpeg',
    year: '2024'
  },
  {
    id: '10',
    name: 'Davi Feitosa',
    position: 'Ensino',
    image: '/membros/DAVI FEITOSA.jpeg',
    year: '2024'
  },
  {
    id: '11',
    name: 'Mariana Barros',
    position: 'Ensino',
    image: '/membros/MARIANA BARROS.jpeg',
    year: '2024'
  },
  {
    id: '12',
    name: 'Davi Fonseca',
    position: 'Ensino',
    image: '/membros/DAVI FONSECA.jpeg',
    year: '2024'
  },
  {
    id: '13',
    name: 'Davi Liebmann',
    position: 'Ensino',
    image: '/membros/DAVI LIEBMANN.jpeg',
    year: '2024'
  },
  // PESQUISA
  {
    id: '14',
    name: 'Camilly Sales',
    position: 'Coordenadora de Pesquisa',
    image: '/membros/CAMILLY SALES.jpeg',
    year: '2024'
  },
  {
    id: '15',
    name: 'Maria Luisa Brandão',
    position: 'Coordenadora de Pesquisa',
    image: '/membros/MARIA LUISA BRANDAO.jpeg',
    year: '2024'
  },
  {
    id: '16',
    name: 'Maria Eduarda Aguiar',
    position: 'Pesquisa',
    image: '/membros/MARIA EDUARDA AGUIAR.jpg',
    year: '2024'
  },
  {
    id: '17',
    name: 'Julia Brito',
    position: 'Pesquisa',
    image: '/membros/JULIA BRITO.jpeg',
    year: '2024'
  },
  {
    id: '18',
    name: 'Marina Medeiros',
    position: 'Pesquisa',
    image: '/membros/MARINA MEDEIROS.jpeg',
    year: '2024'
  },
  {
    id: '19',
    name: 'Marilia Araujo',
    position: 'Pesquisa',
    image: '/membros/MARÍLIA ARAÚJO.jpeg',
    year: '2024'
  },
  {
    id: '20',
    name: 'Giulia Ramalho',
    position: 'Pesquisa',
    image: '/membros/GIULIA RAMALHO.jpeg',
    year: '2024'
  },
  {
    id: '21',
    name: 'Alessandra Fante',
    position: 'Pesquisa',
    image: '/membros/ALESSANDRA FANTE.jpeg',
    year: '2024'
  },
  {
    id: '22',
    name: 'Pedro Henrique Pinheiro',
    position: 'Pesquisa',
    image: '/membros/PEDRO HENRIQUE PINHEIRO.jpeg',
    year: '2024'
  },
  // EXTENSÃO
  {
    id: '23',
    name: 'Ana Carolina Matos',
    position: 'Coordenadora de Extensão',
    image: '/membros/ANA CAROLINA MATOS.jpeg',
    year: '2024'
  },
  {
    id: '25',
    name: 'Marina Ramos',
    position: 'Extensão',
    image: '/membros/MARINA RAMOS.jpeg',
    year: '2024'
  },
  {
    id: '26',
    name: 'Luísa Reis',
    position: 'Extensão',
    image: '/membros/LUISA REIS.jpeg',
    year: '2024'
  },
  // MARKETING
  {
    id: '31',
    name: 'Kaio Rodrigues',
    position: 'Marketing',
    image: '/membros/KAIO RODRIGUES.jpeg',
    year: '2024'
  },
];

export const Membros = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="membros" className="py-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-medium mb-6">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 border border-[#FFD700]/30 text-[#FFD700] rounded-full hover:bg-black/60 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors flex items-center justify-center shadow-lg"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/40 border border-[#FFD700]/30 text-[#FFD700] rounded-full hover:bg-black/60 hover:border-[#FFD700] hover:text-[#FFD700] transition-colors flex items-center justify-center shadow-lg"
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
              {membros.map((membro) => (
                <CarouselItem key={membro.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition-shadow h-full">
                    {/* Foto do Membro */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <Image 
                          src={membro.image}
                          alt={`Foto de ${membro.name}`}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Nome e Cargo */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {membro.name}
                      </h3>
                      <p className="text-sm font-medium mb-2 text-gray-300">
                        {membro.position}
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

