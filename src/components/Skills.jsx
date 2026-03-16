import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL / MongoDB", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Python", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-darker/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="glass-card p-8">
                <h3 className="text-2xl font-outfit mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">0{idx + 1}</span>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-text-main">{skill.name}</span>
                        <span className="text-text-muted text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                          className={`h-full bg-linear-to-r ${idx === 0 ? 'from-primary to-accent' : 'from-secondary to-primary'}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
