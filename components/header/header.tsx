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
      
      <header className="fixed top-0 z-50 w-full border-b bg-yellow-100/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between py-1">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="/">Sobre</NavLink>
              <NavLink href="/blog">Atividades</NavLink>
              <NavLink href="/blog">Pesquisa</NavLink>
              <NavLink href="/blog">Eventos</NavLink>
              <NavLink href="/blog">Equipe</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-yellow-100 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              <NavLink href="/" onClick={closeMenu}>Sobre</NavLink>
              <NavLink href="/blog" onClick={closeMenu}>Atividades</NavLink>
              <NavLink href="/blog" onClick={closeMenu}>Pesquisa</NavLink>
              <NavLink href="/blog" onClick={closeMenu}>Eventos</NavLink>
              <NavLink href="/blog" onClick={closeMenu}>Equipe</NavLink>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};