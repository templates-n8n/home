
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const VideoSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // This is a placeholder for the video
  // In a real implementation, you would replace this with your actual video source
  const videoPlaceholder = "https://cache.promovaweb.com/website/opengraph/n8n_001.png";
  
  return (
    <section id="video" className="section-container bg-gradient-to-b from-dark to-dark/95">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
        Veja nossos modelos em ação
        </h2>
        
        <div className="relative aspect-video overflow-hidden rounded-xl
                      shadow-2xl border border-white/10 animate-fade-in">

          <img 
            src={videoPlaceholder}
            alt="Video thumbnail" 
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isPlaying ? "opacity-0" : "opacity-100"
            )}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Actual video element - in production, replace with your video source */}
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isPlaying ? "opacity-100" : "opacity-0"
          )}>
            {isPlaying && (
              <div className="w-full h-full flex items-center justify-center text-white">
  
                <p className="text-center px-8">Your video will play here. Replace this with an actual video element in production.</p>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-white/60 text-center text-sm mt-6">
          Veja como nossos modelos podem transformar seu processo de automação de fluxo de trabalho.
        </p>
      </div>
    </section>
  );
};

 export default VideoSection;
