
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and info column */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block text-2xl font-bold mb-4">
              n<span className="text-primary">8</span>n
            </a>
            <p className="text-white/60 text-sm mb-6">
              Professional templates for workflow automation and business process optimization.
            </p>
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} n8n Templates. All rights reserved.
            </p>
          </div>
          
          {/* Links columns */}
          <div>
            <h3 className="text-white font-medium mb-4">Templates</h3>
            <ul className="space-y-2">
              {["Business", "AI Agents", "Processes", "Integration"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Pricing", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Documentation", "Community", "Support", "FAQ"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/40 text-xs mb-4 md:mb-0">
            Designed with precision and care for optimal workflow automation.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
