"use client";

import { AlertCircle, Award, Calendar, CheckCircle, Clock, MapPin as LocationIcon, Mail, MapPin, Phone, Send, Users, X } from 'lucide-react';
import { useState } from 'react';

export const EventoIA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    semestre: '',
    instituicao: '',
    motivacao: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Inscrição enviada:', formData);
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', telefone: '', semestre: '', instituicao: '', motivacao: '' });
      
      // Fechar modal após 2 segundos
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitStatus('idle');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus('idle');
  };

  return (
    <>
      <section id="eventos" className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header da Seção */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Evento Especial
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Imersão Glia
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6">
              Inteligência Artificial na Medicina
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              O primeiro curso de Inteligência Artificial em Medicina do Centro Universitário Christus
            </p>
          </div>

          {/* Introdução Compacta */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Informações Principais */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#D4AF37]" />
                      Sobre o Curso
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Promover e expandir o conhecimento dos estudantes de Medicina sobre Inteligência Artificial (IA), 
                      com foco em fundamentos, aplicações clínicas, limitações e boas práticas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#D4AF37]" />
                      Público-Alvo
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-gray-300">Estudantes de Medicina (1º ao 12º semestre)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-gray-300">60 vagas limitadas</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#D4AF37]" />
                      Cronograma
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-gray-300">20 de outubro: 3h30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-gray-300">22 de outubro: 3h30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span className="text-gray-300">27 de outubro: 3h</span>
                      </div>
                      <div className="mt-3 p-3 bg-[#D4AF37]/10 rounded-lg">
                        <span className="text-[#D4AF37] font-semibold">Total: 10h - Período Noturno</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Docente e Local */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#D4AF37]" />
                      Docente
                    </h3>
                    <p className="text-white font-semibold mb-2">Prof. Dr. João José Freitas de Carvalho</p>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p>• Mestre em Neurologia pela UFRJ</p>
                      <p>• Doutor em Neurologia pela UNIFESP</p>
                      <p>• Certificado em IA em Saúde (MIT)</p>
                      <p>• Membro da AAAI (EUA)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <LocationIcon className="w-5 h-5 text-[#D4AF37]" />
                      Local
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Auditório Térreo — UniChristus Parque Ecológico</p>
                      <p>Fortaleza/CE</p>
                      <p>Formato: Presencial</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#D4AF37]" />
                      Contato
                    </h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>lincunichristus@gmail.com</p>
                      <p>João Vitor: (85) 98786-0505</p>
                      <p>Marina: (85) 99794-0075</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Interesse */}
            <div className="text-center mb-12">
              <button
                type="button"
                onClick={openModal}
                className="px-12 py-4 bg-[#D4AF37] text-black rounded-lg font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-[#D4AF37]/25"
              >
                <Send className="w-5 h-5" />
                Tenho Interesse - Inscrever-se
              </button>
            </div>

            {/* Seção de Patrocínio - Simplificada */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Seja Nosso Parceiro
                </h3>
                <p className="text-gray-300">
                  Apoie este evento de excelência e fortaleça sua marca junto ao público universitário
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Benefícios */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Benefícios
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Divulgação em folders e banners</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Presença nas redes sociais</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Posicionamento em inovação</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Fortalecimento da imagem institucional</span>
                    </div>
                  </div>
                </div>

                {/* Formas de Apoio */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Formas de Apoio
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Apoio financeiro</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Brindes para participantes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Coffee breaks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Material didático</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="text-center">
                <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Interessado em Patrocinar?
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Entre em contato conosco para conhecer nossos pacotes de patrocínio
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>lincunichristus@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal do Formulário */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Header do Modal */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Inscrição - Imersão Glia
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors bg-gray-700 text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors bg-gray-700 text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-white mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors bg-gray-700 text-white"
                    placeholder="(85) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="semestre" className="block text-sm font-semibold text-white mb-2">
                    Semestre Atual *
                  </label>
                  <select
                    id="semestre"
                    name="semestre"
                    value={formData.semestre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors bg-gray-700 text-white"
                  >
                    <option value="">Selecione seu semestre</option>
                    {Array.from({length: 12}, (_, i) => (
                      <option key={`semestre-${i+1}`} value={i+1}>{i+1}º semestre</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="instituicao" className="block text-sm font-semibold text-white mb-2">
                  Instituição de Ensino *
                </label>
                <input
                  type="text"
                  id="instituicao"
                  name="instituicao"
                  value={formData.instituicao}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors bg-gray-700 text-white"
                  placeholder="Nome da sua universidade"
                />
              </div>
              
              <div>
                <label htmlFor="motivacao" className="block text-sm font-semibold text-white mb-2">
                  Por que você quer participar deste curso? *
                </label>
                <textarea
                  id="motivacao"
                  name="motivacao"
                  value={formData.motivacao}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-colors resize-none bg-gray-700 text-white"
                  placeholder="Descreva sua motivação para participar do curso..."
                />
              </div>

              {/* Status de Envio */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    Inscrição enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">
                    Erro ao enviar inscrição. Tente novamente em alguns instantes.
                  </p>
                </div>
              )}
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#B8860B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Inscrever-se
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};