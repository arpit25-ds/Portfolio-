export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter mb-6">
          <span className="text-accent">AM</span>
        </div>
        <p className="text-white/40 text-sm mb-8">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex justify-center gap-8 text-xs font-mono text-white/20 uppercase tracking-widest">
          <a href="https://github.com/arpit25-ds" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/arpit-mehra-462507329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Linkedin</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
        </div>
        <p className="mt-12 text-[10px] text-white/10 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Arpit Mehra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
