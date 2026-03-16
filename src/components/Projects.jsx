import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BM Inventory System",
      desc: "A comprehensive management tool for tracking stock, orders, and sales with real-time analytics.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop",
      links: { github: "https://github.com", live: "#" }
    },
    {
      title: "Modern Portfolio",
      desc: "Professional developer portfolio with smooth animations, particles, and glassmorphism UI.",
      tech: ["React", "Framer Motion", "Tailwind v4", "EmailJS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      links: { github: "https://github.com", live: "#" }
    },
    {
      title: "AI Chat Dashboard",
      desc: "Intelligent communication platform powered by cutting-edge language models.",
      tech: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      links: { github: "https://github.com", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
              <p className="text-text-muted text-lg max-w-xl">
                A selection of my best projects where I combine design thinking 
                with robust technical implementation.
              </p>
            </div>
            <a href="#" className="btn glass-card hover:bg-white/10 flex items-center gap-2 w-fit">
              View All Archive <Code size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group border-glass-border flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bg-darker/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.links.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-outfit line-clamp-1">{project.title}</h3>
                  <p className="text-text-muted text-sm mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Case Study</span>
                    <ArrowRight size={14} className="text-text-muted group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Need to import ArrowRight for the card
import { ArrowRight } from 'lucide-react';

export default Projects;
