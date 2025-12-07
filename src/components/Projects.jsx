import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Job Hiring DSS",
      desc: "Rule-based decision support system for applicant screening.",
      tech: ["React", "Node", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "KwikBaryo",
      desc: "Barangay document request system with admin panel.",
      tech: ["HTML", "CSS", "PHP"],
      github: "#",
      demo: "#"
    },
    {
      title: "GarFit",
      desc: "Landing page for gym equipment with mock e-commerce.",
      tech: ["React", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold accent-gradient mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -6 }} data-aos="fade-up" className="glass-card p-5 rounded-xl neon-border transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg text-slate-100 font-semibold">{p.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end text-slate-300">
                  <a href={p.demo}><FaExternalLinkAlt /></a>
                  <a href={p.github}><FaGithub /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
