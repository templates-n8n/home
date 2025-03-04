
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  link: string;
  animationDelay?: string;
  onClick?: () => void;
}

const TemplateCard = ({
  title,
  description,
  imageUrl,
  category,
  isNew = false,
  link,
  animationDelay = '0s',
  onClick
}: TemplateCardProps) => {
  return (
    <div 
      className="group bg-black border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg
                transition-all duration-300 hover:border-primary/30 hover:translate-y-[-4px] animate-scale-in opacity-0 cursor-pointer"
      style={{ animationDelay, animationFillMode: 'forwards' }}
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isNew && (
          <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
            Novo
          </span>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">{title}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div 
          className="inline-flex items-center text-primary text-sm font-medium hover:underline"
        >
          Ver detalhes
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
