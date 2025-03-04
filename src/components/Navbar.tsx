
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-4 md:px-6',
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            n<span className="text-primary">8</span>n
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#templates" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Templates
          </a>
          <a href="#community" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Comunidade
          </a>
          <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            Funcionalidades
          </a>
        </nav>
        
        <div className="flex items-center">
          <CustomButton href="https://pay.kiwify.com.br/SJOB95Z" variant="primary" rightIcon={<ArrowRight size={16} />}>
            Obter Acesso
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
