
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import TemplateShowcase from '@/components/TemplateShowcase';
import CommunitySection from '@/components/CommunitySection';
import { Toaster } from "@/components/ui/toaster";
import PopupDialog from '@/components/PopupDialog';

const Index = () => {
  // Add a smooth scroll behavior to the page
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <TemplateShowcase />
      <CommunitySection />
      <PopupDialog />
      <Toaster />
    </div>
  );
};

export default Index;
