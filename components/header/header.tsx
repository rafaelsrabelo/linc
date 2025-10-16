"use client";

import { 
  Home,
  Instagram, 
  Menu, 
  X 
} from 'lucide-react';
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

  const navigationItems = [
    { label: 'A LINC', section: 'about' },
    { label: 'Imersão Glia', section: 'eventos' },
    { label: 'Formação Profissional', section: 'orientadores' },
    { label: 'Membros', section: 'membros' },
    { label: 'Contato', section: 'contact' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="button"
          tabIndex={0}
        />
      )}

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#23280a]">Menu</h2>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-[#23280a]" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 pt-6">
            <nav className="space-y-2">
              <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="w-full text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-3"
              >
                <Home className="w-5 h-5 text-[#23280a]" />
              </button>
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => scrollToSection(item.section)}
                  className="w-full text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium text-[#23280a]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      <header className="fixed top-0 z-40 w-full bg-gray-900 backdrop-blur-md border-b border-gray-700 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => scrollToSection(item.section)}
                  className="text-white/90 hover:text-gray-300 transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Media & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
                <a 
                  href="https://instagram.com/linc.unichristus" 
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Instagram className="w-4 h-4 text-white" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMenu}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};