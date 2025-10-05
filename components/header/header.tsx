"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { NavLink } from './nav-link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/25 z-40 md:hidden"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="button"
          tabIndex={0}
        />
      )}
      
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/30 bg-[#fff672]/80 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between py-1">
            <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <button 
          type="button"
          onClick={() => scrollToSection('about')}
          className="text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Sobre
        </button>
        <button 
          type="button"
          onClick={() => scrollToSection('orientadores')}
          className="text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Nossos Orientadores
        </button>
        <button 
          type="button"
          onClick={() => scrollToSection('eventos')}
          className="text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Eventos
        </button>
        <button 
          type="button"
          onClick={() => scrollToSection('curso-ia')}
          className="text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Curso de I.A
        </button>
        <button 
          type="button"
          onClick={() => scrollToSection('membros')}
          className="text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          Nossos Membros
        </button>
      </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-800 hover:text-blue-700 hover:bg-white/20 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center ">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`} />
              </div>
            </button>
          </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              <button 
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded"
              >
                Sobre
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('orientadores')}
                className="text-left text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded"
              >
                Nossos Orientadores
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('eventos')}
                className="text-left text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded"
              >
                Eventos
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('curso-ia')}
                className="text-left text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded"
              >
                Curso de I.A
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('membros')}
                className="text-left text-gray-800 hover:text-blue-700 transition-colors duration-200 text-sm font-medium py-2 px-3 rounded"
              >
                Nossos Membros
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};