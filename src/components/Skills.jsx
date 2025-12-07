import React from "react";

const Skills = () => {
  const skills = [
    "HTML", "CSS / Tailwind", "JavaScript", "React",
    "Node.js", "MySQL", "Git", "Linux"
  ];

  return (
    <section id="skills" className="py-24 bg-[rgba(255,255,255,0.01)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold accent-gradient mb-8">Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill} data-aos="zoom-in" className="glass-card p-4 rounded-xl neon-border text-center cursor-pointer hover:scale-105 transition">
              <span className="text-slate-100 font-mono font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
