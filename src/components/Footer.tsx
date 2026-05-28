export default function Footer() {
  return (
    <footer className="bg-black py-12 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <img 
            src="https://res.cloudinary.com/dk3laapco/image/upload/v1779949399/Dise%C3%B1o_sin_t%C3%ADtulo_26_llii05.webp" 
            alt="Leo Vintage Studio Logo" 
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>
        
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-neon-pink transition-colors">Instagram</a>
          <a href="#" className="hover:text-neon-pink transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Substack</a>
        </div>
        
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} Leo Vintage Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
