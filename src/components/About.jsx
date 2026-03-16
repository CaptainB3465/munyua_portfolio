import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Zap } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
  const stats = [
    { icon: <Code className="text-primary" />, label: '3+ Years', sub: 'Experience' },
    { icon: <Zap className="text-secondary" />, label: '50+', sub: 'Projects' },
    { icon: <Globe className="text-accent" />, label: '10+', sub: 'Clients' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass-card p-2 aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={profileImg} 
                  alt="Brian Munyua" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 scale-110 hover:scale-100"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-outfit mb-6">Developing with Passion</h3>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                I am a dedicated developer focused on creating impactful digital experiences. 
                My journey in tech is driven by a constant desire to learn and implement 
                the most efficient solutions to complex problems.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 text-center border-glass-border"
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="font-bold text-xl">{stat.label}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>

              <p className="text-text-muted text-lg">
                I specialize in building scalable web architectures and intuitive user interfaces.
                My goal is to bridge the gap between functionality and aesthetic excellence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
