import { motion } from 'motion/react';
import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText('git clone https://github.com/PiterPentester/skeleton.git && cd skeleton && make install');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>v0.1.1 Ready</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-[80px] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Bootstrap projects. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Instantly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            <strong className="text-white">skeleton (sk)</strong> is a fast, zero-dependency CLI tool written in Go that instantly bootstraps modern, production-ready Python project repositories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={copyInstall}
              className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-3 w-full sm:w-auto font-mono text-sm"
            >
              <Terminal className="w-4 h-4" />
              <span className="truncate">git clone ... &amp;&amp; make install</span>
              <div className="ml-2">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            <a
              href="https://github.com/PiterPentester/skeleton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
