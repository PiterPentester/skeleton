import { Github } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] text-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 2l10 10-10 10L2 12z"/></svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-white uppercase tracking-widest">SKELETON</span>
      </div>
      
      <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
        <a 
          href="https://github.com/PiterPentester/skeleton" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-slate-800 text-white rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">View on GitHub</span>
        </a>
      </div>
    </nav>
  );
}
