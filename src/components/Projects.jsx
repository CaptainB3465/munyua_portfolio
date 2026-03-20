import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, ArrowRight, X, AlertCircle, Lightbulb, Settings, BarChart2, Target } from 'lucide-react';

const projects = [
  {
    title: "BM Inventory System",
    desc: "A comprehensive management tool for tracking stock, orders, and sales with real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop",
    links: { github: "https://github.com", live: "https://bm-inventory-system-production-9838.up.railway.app" },
    caseStudy: {
      sections: [
        {
          icon: AlertCircle,
          label: "Problem",
          color: "text-red-400",
          bg: "bg-red-500/10 border-red-500/20",
          text: "Many businesses rely on manual or outdated methods to track inventory, which often leads to issues such as stock mismanagement, overstocking, stock shortages, and human errors. These inefficiencies can result in financial losses, poor decision-making, and reduced customer satisfaction.",
        },
        {
          icon: Lightbulb,
          label: "Solution",
          color: "text-yellow-400",
          bg: "bg-yellow-500/10 border-yellow-500/20",
          text: "The Inventory Management System was developed to automate and streamline inventory tracking and control. The system provides real-time visibility of stock levels, enabling businesses to efficiently manage products, monitor stock movement, and make informed decisions.",
        },
        {
          icon: Settings,
          label: "Implementation",
          color: "text-blue-400",
          bg: "bg-blue-500/10 border-blue-500/20",
          text: "The system was built using modern technologies with a focus on usability and efficiency. It includes features such as product management, stock updates, and a centralized dashboard for monitoring inventory. Users can easily add, update, and track items, while the system ensures data accuracy and consistency. The interface is designed to be intuitive, allowing users with minimal technical knowledge to operate it effectively.",
        },
        {
          icon: BarChart2,
          label: "Results",
          color: "text-green-400",
          bg: "bg-green-500/10 border-green-500/20",
          text: "The implementation of the system improved inventory accuracy, reduced manual errors, and enhanced operational efficiency. Businesses are able to track stock in real time, prevent shortages and overstocking, and improve overall productivity. The system also saves time and supports better decision-making through organized data management.",
        },
        {
          icon: Target,
          label: "Conclusion",
          color: "text-purple-400",
          bg: "bg-purple-500/10 border-purple-500/20",
          text: "The Inventory Management System highlights the importance of digital solutions in modern business operations. By automating inventory processes, the system increases efficiency, accuracy, and reliability, making it a valuable tool for businesses aiming to optimize their operations.",
        },
      ],
    },
  },
  {
    title: "Modern Portfolio",
    desc: "Professional developer portfolio with smooth animations, particles, and glassmorphism UI.",
    tech: ["React", "Framer Motion", "Tailwind v4", "EmailJS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    links: { github: "https://github.com/CaptainB3465/munyua_portfolio.git", live: "#" },
    caseStudy: {
      sections: [
        {
          icon: AlertCircle,
          label: "Problem",
          color: "text-red-400",
          bg: "bg-red-500/10 border-red-500/20",
          text: "As a developer, having a strong online presence is essential for professional growth. Without a dedicated portfolio, showcasing projects, skills, and experience to potential clients or employers relied on plain CVs and scattered links — making it difficult to leave a lasting impression.",
        },
        {
          icon: Lightbulb,
          label: "Solution",
          color: "text-yellow-400",
          bg: "bg-yellow-500/10 border-yellow-500/20",
          text: "Designed and built a fully responsive personal portfolio website to professionally present projects, skills, and experience in one place. The goal was to create a visually modern platform that reflects both technical ability and design sensibility.",
        },
        {
          icon: Settings,
          label: "Implementation",
          color: "text-blue-400",
          bg: "bg-blue-500/10 border-blue-500/20",
          text: "Built with React and Vite for a fast, component-driven architecture. Framer Motion powers fluid animations and micro-interactions throughout the site. The UI features a glassmorphism design language, a particle background, and Tailwind v4 for responsive styling. EmailJS enables direct contact form submissions without a backend.",
        },
        {
          icon: BarChart2,
          label: "Results",
          color: "text-green-400",
          bg: "bg-green-500/10 border-green-500/20",
          text: "The portfolio delivers a polished, professional first impression with smooth animations and a cohesive design system. It is fully responsive across all screen sizes and provides visitors with clear visibility into projects, skills, and means to make contact — all in a single, performant page.",
        },
        {
          icon: Target,
          label: "Conclusion",
          color: "text-purple-400",
          bg: "bg-purple-500/10 border-purple-500/20",
          text: "This portfolio demonstrates that thoughtful UI design combined with modern frontend tooling can produce an engaging and professional web presence. It serves as both a showcase and a living example of the skills it represents.",
        },
      ],
    },
  },

  {
    title: "Smart Queue System",
    desc: "A digital queue management platform that lets users join queues remotely, track their position in real time, and receive turn notifications — while giving admins powerful tools to manage service flow efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "Glassmorphism UI"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
    links: { github: "https://github.com", live: "https://smart-queue-system-nine.vercel.app" },
    caseStudy: {
      sections: [
        {
          icon: AlertCircle,
          label: "Problem",
          color: "text-red-400",
          bg: "bg-red-500/10 border-red-500/20",
          text: "Traditional queue systems in places like hospitals, banks, and offices often lead to long waiting times, overcrowding, and poor service organization. Customers have no visibility of their position in the queue, which results in frustration and inefficiency.",
        },
        {
          icon: Lightbulb,
          label: "Solution",
          color: "text-yellow-400",
          bg: "bg-yellow-500/10 border-yellow-500/20",
          text: "The Smart Queue Management System was developed to digitize and streamline the queue process. The system allows users to join queues remotely, track their position in real time, and receive notifications when it is their turn. It also provides administrators with tools to manage queues effectively.",
        },
        {
          icon: Settings,
          label: "Implementation",
          color: "text-blue-400",
          bg: "bg-blue-500/10 border-blue-500/20",
          text: "The system was built using modern web technologies with a user-friendly interface featuring a glassmorphism design. It includes secure login and signup functionality, a dynamic dashboard, and real-time queue updates. The admin panel enables staff to call, skip, or manage customers efficiently.",
        },
        {
          icon: BarChart2,
          label: "Results",
          color: "text-green-400",
          bg: "bg-green-500/10 border-green-500/20",
          text: "The system significantly improves service delivery by reducing waiting time, enhancing queue visibility, and optimizing workflow. It creates a more organized and stress-free environment for both users and service providers.",
        },
        {
          icon: Target,
          label: "Conclusion",
          color: "text-purple-400",
          bg: "bg-purple-500/10 border-purple-500/20",
          text: "The Smart Queue Management System demonstrates how digital transformation can improve traditional processes, leading to better efficiency, improved user experience, and smarter service management.",
        },
      ],
    },
  },
];

/* ─── Case Study Modal ─────────────────────────────────────────── */
const CaseStudyModal = ({ project, onClose }) => {
  if (!project?.caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          {/* Hero image */}
          <div className="relative h-48 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <div className="flex gap-2 flex-wrap mb-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/10 border border-white/20 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold font-outfit text-white">{project.title}</h2>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors backdrop-blur-md"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {project.caseStudy.sections.map(({ icon: Icon, label, color, bg, text }) => (
              <div key={label} className={`rounded-xl border p-4 ${bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className={color} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{label}</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* CTA footer */}
          <div className="px-6 pb-6 flex gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={16} /> View Live Project
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Main Component ───────────────────────────────────────────── */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
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
                <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
                  Featured <span className="text-gradient">Work</span>
                </h2>
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
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
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
                    <p className="text-text-muted text-sm mb-6 line-clamp-2">{project.desc}</p>

                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                      {project.caseStudy ? (
                        <button
                          onClick={() => setActiveProject(project)}
                          className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest hover:underline transition-all"
                        >
                          Case Study
                          <ArrowRight size={14} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ) : (
                        <span className="text-text-muted text-xs font-semibold uppercase tracking-widest">Case Study</span>
                      )}
                      <ArrowRight size={14} className="text-text-muted group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
};

export default Projects;
