import { motion } from "motion/react";
import { User, Code2, Rocket, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
            <img
              src="https://picsum.photos/seed/coding/800/800"
              alt="Tech Workspace"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Engineering digital solutions with <span className="italic">precision</span>.
          </h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I'm a Full Stack Developer based in Bhopal, India, passionate about building high-performance web applications that provide seamless user experiences. With over 4 years of experience, I've worked with startups and established companies to bring their ideas to life.
            </p>
            <p>
              My approach combines technical excellence with a deep understanding of user needs. I believe that great software is not just about clean code, but about solving real-world problems effectively.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { icon: Code2, label: "Clean Code", desc: "Maintainable & scalable" },
              { icon: Rocket, label: "Performance", desc: "Fast & optimized" },
              { icon: Heart, label: "UX Focused", desc: "User-centric design" },
              { icon: User, label: "Team Player", desc: "Collaborative mindset" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.label}</h4>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
