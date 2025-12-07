import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold accent-gradient mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right" className="text-slate-300 text-lg space-y-4">
            <p>
              I’m an IT student and full-stack developer passionate about building apps that are fast, secure, and maintainable. I enjoy working across the stack and creating interfaces that feel alive.
            </p>
            <p>
              I believe code should be clean, readable, and enjoyable. Outside coding, I explore UI design, cyberpunk aesthetics, and automation projects.
            </p>
          </div>

          <div data-aos="fade-left" className="glass-card p-6 rounded-xl neon-border">
            <h3 className="text-cyber-blue font-semibold mb-2">Current Focus</h3>
            <p className="text-slate-200 text-sm">
              Improving full-stack skills, learning deployment pipelines, building developer-friendly tools, and designing modern UIs with neon cyberpunk vibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
