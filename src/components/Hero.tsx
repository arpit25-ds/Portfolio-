import { motion } from "motion/react";
import { Terminal, ChevronRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-mono mb-6">
          <Terminal size={14} />
          <span>Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
          Arpit <span className="text-accent text-glow">Mehra</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full Stack Developer. I don't just write code — I engineer{" "}
          <span className="text-white font-medium italic">experiences</span> that scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-bg font-bold rounded-xl flex items-center gap-2 group"
          >
            View Projects
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/arpit25-ds" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/arpit-mehra-462507329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: Twitter, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-white/40 hover:text-accent transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
}
