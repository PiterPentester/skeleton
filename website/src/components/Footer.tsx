export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-6 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center bg-black/20 mt-auto">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <span className="text-xl font-bold tracking-tight text-white uppercase tracking-widest">SKELETON</span>
      </div>
      
      <div className="text-xs text-slate-500 font-mono mb-4 md:mb-0 text-center">
        STATUS: <span className="text-emerald-500">ALL SYSTEMS OPERATIONAL</span>
        <div className="mt-2 text-slate-500 font-sans text-sm">
          Created by <a href="https://github.com/PiterPentester" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">PiterPentester</a>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
      </div>
    </footer>
  );
}
