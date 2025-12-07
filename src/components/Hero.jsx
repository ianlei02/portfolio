import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Formal from "../assets/formal.png"; 

const Hero = () => {
  return (
    <section id="hero" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyber-purple/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold accent-gradient"
          >
            Hi, I’m Ian
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-slate-300 text-lg md:text-xl"
          >
            Full-stack developer & IT student. I build glowing web apps, sleek UIs, and code that excites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-md border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 hover:text-white transition font-mono flex items-center gap-2"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/cv.pdf"
              className="px-6 py-3 rounded-md border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 hover:text-white transition font-mono"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-left"
          className="flex justify-center md:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 neon-border p-2">
            <img
              src={Formal}
              alt="Ian"
              className="w-80 md:w-96 h-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
