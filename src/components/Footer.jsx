import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-10 bg-bg-darker border-t border-glass-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold font-outfit">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white">
                <Code2 size={24} />
              </div>
              <span className="bg-linear-to-r from-white to-text-muted bg-clip-text text-transparent">Brian Munyua</span>
            </a>
            <p className="text-text-muted text-lg max-w-sm">
              Designing and building premium digital experiences with a focus on 
              performance, aesthetics, and user satisfaction.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-outfit mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-muted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-outfit mb-6">Contact</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li>Nairobi, Kenya</li>
              <li>munyuabrian712@gmail.com</li>
              <li>0719328502</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm flex items-center gap-2">
            © {currentYear} Brian Munyua. Made with <Heart size={14} className="text-secondary animate-pulse" /> by Antigravity.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm font-medium"
          >
            Back to top 
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
