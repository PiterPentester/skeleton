import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function TerminalDemo() {
  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#121217] rounded-2xl border border-slate-800 shadow-2xl p-6 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex gap-1.5 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
          </div>

          {/* Terminal Body */}
          <div className="font-mono text-sm leading-6 text-slate-300 overflow-x-auto relative z-10">
            <div className="flex gap-2 mb-4">
              <span className="text-emerald-400">➜</span>
              <span className="text-cyan-400">~</span>
              <span className="text-white">sk init my_python_project</span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 space-y-1 mb-6"
            >
              <p>🚀 Initializing Python project: <span className="text-white">my_python_project</span>...</p>
              <p className="text-emerald-400">[+] Created Dockerfile</p>
              <p className="text-emerald-400">[+] Created Makefile</p>
              <p className="text-emerald-400">[+] Created .env</p>
              <p className="text-emerald-400">[+] Created .pre-commit-config.yaml</p>
              <p className="text-emerald-400">[+] Created pyproject.toml</p>
              <p className="text-emerald-400">[+] Created .github/workflows/ci.yaml</p>
              <p className="text-emerald-400">[+] Created .github/workflows/webpage.yaml</p>
              <p className="text-emerald-400">[+] Created src/main.py</p>
              <p className="text-emerald-400">[+] Created tests/test_main.py</p>
              <p className="text-emerald-400">[+] Initialized empty Git repository</p>
              <br/>
              <p className="text-white">Done! Project 'my_python_project' initialized successfully.</p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121217] to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
