export default function Footer() {
  return (
    <footer className="bg-black py-12 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-bold tracking-tighter">
          LVintage
        </div>
        
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-neon-pink transition-colors">Twitter</a>
          <a href="#" className="hover:text-neon-pink transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Substack</a>
        </div>
        
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} LVintage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
