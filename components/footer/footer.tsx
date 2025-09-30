import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Nome */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <Logo className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">LINC</h3>
                <p className="text-sm text-gray-300">Liga de Neurologia Clínica</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformando o conhecimento em neurologia clínica desde 2022.
            </p>
          </div>

          {/* Endereço e Contato */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Campus Universitário<br />
                    Sala 205, Bloco A<br />
                    São Paulo, SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@lincneurologia.com.br" 
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  contato@lincneurologia.com.br
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <Link 
                href="/" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Sobre
              </Link>
              <Link 
                href="/atividades" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Atividades
              </Link>
              <Link 
                href="/pesquisa" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Pesquisa
              </Link>
              <Link 
                href="/eventos" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Eventos
              </Link>
              <Link 
                href="/equipe" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Equipe
              </Link>
            </nav>
          </div>

          {/* Informações Legais */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Informações</h4>
            <nav className="space-y-2">
              <Link 
                href="/politica-privacidade" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/acessibilidade" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Acessibilidade
              </Link>
              <Link 
                href="/termos-uso" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link 
                href="/lgpd" 
                className="block text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Aviso LGPD
              </Link>
            </nav>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>© 2024 Liga de Neurologia Clínica. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido com ❤️ para a comunidade neurológica
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Ver no mapa
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
