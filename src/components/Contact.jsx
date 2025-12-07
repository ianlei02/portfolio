import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[rgba(255,255,255,0.01)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold accent-gradient mb-8">Contact</h2>

        <form className="grid gap-4 max-w-2xl">
          <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-white/10 text-slate-200"/>
          <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-white/10 text-slate-200"/>
          <textarea rows="5" placeholder="Message" className="p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-white/10 text-slate-200"/>
          <button type="submit" className="px-5 py-3 rounded-md border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20 hover:text-white transition font-mono w-max">Send Message</button>
        </form>

        {/* <div className="mt-6 text-slate-400 text-sm">
          Email: <span className="text-slate-200">your_email@example.com</span> • GitHub: <span className="text-slate-200">github.com/yourgithub</span>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
