import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl mb-6">
            Hi, I'm <span className="text-gradient">Brian Munyua</span>
          </h1>
          <div className="text-2xl md:text-3xl text-text-muted mb-8 h-10">
            <Typewriter
              words={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Open Source Contributor']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="max-w-2xl mx-auto text-lg text-text-muted mb-10">
            I build high-performance, beautiful, and user-centric web applications 
            using modern technologies and best practices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn btn-primary flex items-center gap-2">
              View Work <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-4 ml-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com" 
                className="p-3 glass-card hover:bg-white/10 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://linkedin.com" 
                className="p-3 glass-card hover:bg-white/10 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="mailto:contact@example.com" 
                className="p-3 glass-card hover:bg-white/10 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-text-muted rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
