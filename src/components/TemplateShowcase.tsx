
import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import FeaturedTemplate from './FeaturedTemplate';
import { cn } from '@/lib/utils';

const categories = ["Todos", "Negócios", "Agentes IA", "Processos", "Integração"];

const TemplateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // Templates atualizados para o português com mais detalhes
  const templates = [
    {
      id: 2,
      title: "Automação na Imobiliária",
      description: "Crie conteúdo de alta qualidade automaticamente usando agentes de inteligência artificial.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Agentes IA",
      isNew: true,
      link: "#template-2",
      features: [
        "Matching de imóveis com preferências de clientes",
        "Agendamento automático de visitas",
        "Chat bot para perguntas frequentes sobre imóveis"
      ]
    },
    {
      id: 3,
      title: "BOT de Nutrição",
      description: "Esse bot será responsavel por analisar as fotos enviadas de seu prato e avaliar o quanto você esta consumindo.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Processos",
      isNew: true,
      link: "#template-3",
      features: [
        "Leitura de imagens para identificação de alimentos",
        "Análise nutricional de alimentos",
        "Recomendações personalizadas de alimentação"
      ]
    },
    {
      id: 4,
      title: "Fluxo de E-commerce",
      description: "Aprimore seus dados de clientes com processos poderosos de enriquecimento.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Integração",
      isNew: false,
      link: "#template-4",
      features: [
        "Rastreamento de pedidos",
        "Envio de notas fiscais",
        "Agente de IA no atendimento",
        "FaQ dinâmico"
      ]
    },
    {
      id: 5,
      title: "Fluxo para advocacia",
      description: "Configure sequências de emails automatizados para melhor engajamento com clientes.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Negócios",
      isNew: false,
      link: "#template-5",
      features: [
        "IA no atendimento",
        "Gestão de calendario",
        "Agendamentos automaticos"
      ]
    }
  ];
  
  // Template destacado
  const featuredTemplate = {
    title: "Automação para clinicas",
      description: "Automatize o processo de entrada de novos clientes de forma completa e eficiente.",
      imageUrl: "https://medicinasa.com.br/wp-content/uploads/2023/04/chat-mensagem-whats-bot.jpg",
      category: "Negócios",
      isNew: true,
      link: "https://pay.kiwify.com.br/SJOB95Z",
      features: [
        "Agendamento online de consultas com integração de calendário",
        "Envio automático de lembretes de consultas via WhatsApp",
        "Gestão de fila de espera",
        "Notificações automáticas para pacientes sobre retornos e exames pendentes"
      ]
  };
  
  const filteredTemplates = activeCategory === "Todos" 
    ? templates 
    : templates.filter(template => template.category === activeCategory);
  
  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };
  
  const handleCloseDetails = () => {
    setSelectedTemplate(null);
  };
  
  return (
    <section id="templates" className="section-container bg-gradient-to-b from-dark/95 to-dark">
      <div className="mb-12 text-center">
        <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-2">
          Coleção Premium
        </span>
        <h2 className="section-title text-white">Explore Nossos Templates</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Descubra nossa coleção de templates n8n profissionalmente projetados para automatizar e otimizar seus fluxos de trabalho.
        </p>
      </div>
      
      {/* Filtros de categoria */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-primary text-white shadow-md"
                : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Template destacado */}
      <div className="mb-16">
        <FeaturedTemplate {...featuredTemplate} />
      </div>
      
      {/* Grid de templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredTemplates.map((template, index) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            description={template.description}
            imageUrl={template.imageUrl}
            category={template.category}
            isNew={template.isNew}
            link={template.link}
            animationDelay={`${0.1 * index}s`}
            onClick={() => handleTemplateClick(template)}
          />
        ))}
      </div>
      
      {/* Modal de detalhes do template */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-white/10 rounded-xl p-6 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-4">{selectedTemplate.title}</h3>
            <p className="text-white/70 mb-6">{selectedTemplate.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3">Funcionalidades principais:</h4>
              <ul className="space-y-2">
                {selectedTemplate.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#E3496D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={handleCloseDetails}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TemplateShowcase;
