
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import CustomButton from './CustomButton';

const PopupDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Abrir o popup após 5 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLearnMore = () => {
    setIsOpen(false);
    toast({
      title: "Obrigado pelo seu interesse!",
      description: "Entraremos em contato em breve com mais informações.",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-black border border-primary/30 rounded-lg p-6 shadow-lg animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Automação de Processos com IA</h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
        </div>
        
        <p className="text-white/80 mb-6 text-center">
          Transformamos seus processos empresariais através de soluções personalizadas de automação e inteligência artificial. Economize tempo, reduza custos e aumente a eficiência da sua empresa com nossa tecnologia de ponta.
        </p>
        
        <div className="flex justify-center">
          <CustomButton
            onClick={handleLearnMore}
            variant="primary"
            className="w-full"
            href='https://api.whatsapp.com/send?phone=5516992253558&text='
          >
            Quero Saber Mais
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
