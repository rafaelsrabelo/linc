import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Nome */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformando o conhecimento em neurologia clínica desde 2022.
            </p>
          </div>

          {/* Contato */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:lincunichristus@gmail.com" 
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  lincunichristus@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/linc.unichristus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                @linc.unichristus
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="text-sm text-gray-400">
              <p>© 2024 Liga Acadêmica em Neurologia Clínica. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
