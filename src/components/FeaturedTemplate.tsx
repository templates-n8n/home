
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CustomButton from './CustomButton';

interface FeaturedTemplateProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  link: string;
}

const FeaturedTemplate = ({
  title,
  description,
  imageUrl,
  features,
  link
}: FeaturedTemplateProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-black/80 to-black border 
                  border-white/10 shadow-lg animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full 
                         w-fit mb-6 uppercase tracking-wider">
            Template Destacado
          </span>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          
          <p className="text-white/70 mb-6">{description}</p>
          
          <div className="mb-8">
            <p className="text-sm text-white/80 mb-4 font-medium">Principais funcionalidades:</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#E3496D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <CustomButton 
            href={link} 
            variant="primary" 
            rightIcon={<ArrowRight size={16} />}
          >
            Obter Este Template
          </CustomButton>
        </div>
        
        <div className="md:h-auto">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTemplate;
