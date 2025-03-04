
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
      id: 1,
      title: "Automação para clinicas",
      description: "Automatize o processo de entrada de novos clientes de forma completa e eficiente.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Negócios",
      isNew: true,
      link: "#template-1",
      features: [
        "Envio automático de e-mails de boas-vindas",
        "Coleta e armazenamento de documentos",
        "Integração com CRM",
        "Configuração de acesso a plataformas",
        "Programação automática de reuniões iniciais"
      ]
    },
    {
      id: 2,
      title: "Geração de Conteúdo com IA",
      description: "Crie conteúdo de alta qualidade automaticamente usando agentes de inteligência artificial.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Agentes IA",
      isNew: true,
      link: "#template-2",
      features: [
        "Criação de artigos baseados em palavras-chave",
        "Otimização SEO automática",
        "Geração de imagens compatíveis",
        "Calendário de publicação inteligente",
        "Análise de performance do conteúdo"
      ]
    },
    {
      id: 3,
      title: "Automação de Pipeline de Vendas",
      description: "Automatize seu processo de vendas desde a geração de leads até o fechamento.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Processos",
      isNew: true,
      link: "#template-3",
      features: [
        "Qualificação automática de leads",
        "Sequência de e-mails personalizados",
        "Agendamento inteligente de demonstrações",
        "Geração automática de propostas",
        "Acompanhamento pós-venda"
      ]
    },
    {
      id: 4,
      title: "Fluxo de Enriquecimento de Dados",
      description: "Aprimore seus dados de clientes com processos poderosos de enriquecimento.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Integração",
      isNew: false,
      link: "#template-4",
      features: [
        "Consolidação de múltiplas fontes de dados",
        "Verificação e correção automática de informações",
        "Segmentação avançada de clientes",
        "Enriquecimento com dados de mercado",
        "Alertas de oportunidades baseados em comportamento"
      ]
    },
    {
      id: 5,
      title: "Sequência de Marketing por Email",
      description: "Configure sequências de emails automatizados para melhor engajamento com clientes.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Negócios",
      isNew: false,
      link: "#template-5",
      features: [
        "Segmentação avançada de público",
        "Personalização dinâmica de conteúdo",
        "A/B testing automático",
        "Otimização de horários de envio",
        "Análise detalhada de conversão"
      ]
    }
  ];
  
  // Template destacado
  const featuredTemplate = {
    title: "Suite de Automação de Processos Empresariais",
    description: "Nosso template mais completo para automação em nível empresarial. Otimize processos complexos de negócios, integre agentes de IA e conecte com suas ferramentas existentes.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    features: [
      "Automação de processos ponta a ponta",
      "Tomada de decisões com IA",
      "Integração com múltiplos sistemas",
      "Relatórios e análises avançadas",
      "Fluxos de aprovação personalizados"
    ],
    link: "#featured-template"
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
