import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "EcoSphere AI",
    desc: "A machine learning platform for environmental monitoring and predictive analysis.",
    tags: ["React", "Python", "TensorFlow", "Tailwind"],
    image: "https://picsum.photos/seed/nature-tech/800/500",
    link: "#",
    github: "https://github.com/arpit25-ds",
  },
  {
    title: "Nexus Dashboard",
    desc: "Real-time analytics dashboard for SaaS companies with complex data visualization.",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    image: "https://picsum.photos/seed/dashboard-ui/800/500",
    link: "#",
    github: "https://github.com/arpit25-ds",
  },
  {
    title: "VibeChat",
    desc: "Encrypted real-time messaging application with custom emoji support and themes.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://picsum.photos/seed/messaging-app/800/500",
    link: "#",
    github: "https://github.com/arpit25-ds",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
            <Folder size={16} />
            <span>My Work</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
        </div>
        <p className="text-white/40 max-w-md text-sm leading-relaxed">
          A selection of my recent work across various technologies and industries. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-bg transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.link} className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-bg transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
