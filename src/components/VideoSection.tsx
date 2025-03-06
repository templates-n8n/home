
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const VideoSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // This is a placeholder for the video
  // In a real implementation, you would replace this with your actual video source
  const videoPlaceholder = "https://camo.githubusercontent.com/718889fb1884339f6a2b2057ecdfe31afc0037c0d1574e2edc6d4b78cc25dfb0/68747470733a2f2f6e386e696f73746f726167656163636f756e742e626c6f622e636f72652e77696e646f77732e6e65742f6e386e696f2d7374726170692d626c6f62732d70726f642f6173736574732f6769746875625f73637265656e5f325f383631353532333463332e706e67";
  
  return (
    <section id="video" className="section-container bg-gradient-to-b from-dark to-dark/95">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
        Veja nossos modelos em ação
        </h2>
        
        <div className="relative aspect-video overflow-hidden rounded-xl
                      shadow-2xl border border-white/10 animate-fade-in">
          {/* Video placeholder - this would be replaced with your actual video */}
          <div 
            className={cn(
              "absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500",
              isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center cursor-pointer
                          hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          {/* Image placeholder that will be replaced by video */}
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
