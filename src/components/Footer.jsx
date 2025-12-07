import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 mt-8 border-t border-white/10 text-center text-slate-400 text-sm">
      © {new Date().getFullYear()} Ian • Built with React + Tailwind v4
    </footer>
  );
};

export default Footer;
