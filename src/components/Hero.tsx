
import React from 'react';
import CustomButton from './CustomButton';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.15) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Animated gradient accent */}
      <div className="absolute top-1/4 -right-60 w-[500px] h-[500px] rounded-full bg-primary/30 
                      filter blur-[100px] opacity-60 animate-pulse-subtle" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium 
                           bg-primary/10 text-primary border border-primary/20">
              Coleção de templates de n8n
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight
                        max-w-4xl mx-auto leading-tight animate-fade-in opacity-0" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Simplifique seu fluxo de trabalho com  <span className="text-gradient">modelos n8n premium</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fade-in opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Libere o poder da automação com nossos modelos projetados profissionalmente para processos de negócios, agentes de IA e estruturação de fluxo de trabalho.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
               style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <CustomButton 
              href="https://pay.kiwify.com.br/SJOB95Z" 
              variant="primary" 
              size="lg"
              rightIcon={<ArrowRight size={16} />}
            >
              Garanta ja
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
