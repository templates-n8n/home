
import React from 'react';
import { Users, Globe, Building } from 'lucide-react';
import CustomButton from './CustomButton';

const CommunitySection = () => {
  const benefits = [
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Conecte-se com especialistas",
      description: "Conecte-se com especialistas Junte-se a uma comunidade de especialistas em automação e profissionais de negócios."
    },
    {
      icon: <Building size={24} className="text-primary" />,
      title: "Estratégia Empresarial",
      description: "Aprenda estratégias de negócios avançadas e técnicas de otimização de processos."
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: "Estruturação de Processos",
      description: "Domine a arte da estruturação eficiente de processos e design de fluxo de trabalho."
    }
  ];

  return (
    <section id="community" className="section-container bg-gradient-to-b from-dark to-dark/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left column with text */}
          <div className="animate-slide-right">
            <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-4">
              Junte-se à nossa comunidade
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Mais do que apenas modelos.<span className="text-gradient">Uma comunidade empresarial.</span>
            </h2>
            
            <p className="text-white/70 mb-8">
            Ao adquirir nossos templates, você ganha acesso a uma comunidade exclusiva focada no crescimento do negócio, 
            otimização de processos e estratégias de implementação de IA. Aprenda com especialistas, compartilhe suas experiências, 
            e leve suas habilidades de automação para o próximo nível.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <CustomButton href="https://pay.kiwify.com.br/SJOB95Z" variant="primary" size="lg">
              Entrar na comunidade
            </CustomButton>
          </div>
          
          {/* Right column with community visualization */}
          <div className="relative animate-slide-up">
            <div className="relative z-10 glass-card rounded-2xl overflow-hidden bg-gradient-to-br from-black/80 to-black">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Destaques da comunidade</h3>
                
                <div className="space-y-4 mb-6">
                  {["Lives semanais de especialistas", "Masterclass de estratégia de Negócios", "Oportunidades de networking"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="#E3496D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-primary/30 rounded-full filter blur-xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
