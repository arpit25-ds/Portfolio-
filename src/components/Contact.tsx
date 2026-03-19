import { motion } from "motion/react";
import { Mail, MessageSquare, Send, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's build something <span className="text-accent italic">extraordinary</span>.</h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you! I'm currently looking for new opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-mono">Email Me</p>
                <p className="font-medium">arpitmehra129@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-mono">Location</p>
                <p className="font-medium">Bhopal, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full py-4 bg-accent text-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
