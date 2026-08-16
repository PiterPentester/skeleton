import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const commands = [
  { cmd: 'make deps', desc: 'Install dependencies with uv' },
  { cmd: 'make format', desc: 'Format code (ruff format + check --fix)' },
  { cmd: 'make lint', desc: 'Run linter and security scans (ruff + bandit)' },
  { cmd: 'make test', desc: 'Run test suite' },
  { cmd: 'make docker-build', desc: 'Build production Docker container' },
  { cmd: 'make docker-scan', desc: 'Scan Docker container for vulnerabilities' },
];

export default function Workflow() {
  return (
    <section className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Generated Project Workflow</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Inside any generated project, you can instantly use the included <code className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">Makefile</code> shortcuts. We've pre-configured the best modern tooling so you don't have to.
            </p>
            
            <div className="space-y-4">
              {commands.map((cmd, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-white/5 pb-4">
                  <div className="font-mono text-sm px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-md text-emerald-400 whitespace-nowrap w-fit">
                    {cmd.cmd}
                  </div>
                  <div className="text-slate-500 text-sm">{cmd.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-[#121217] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="font-mono text-sm leading-loose overflow-x-auto text-slate-300">
                <span className="text-emerald-400">.PHONY</span><span className="text-white">: deps format lint test</span><br/><br/>
                <span className="text-cyan-400">deps</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;uv pip install -e .<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;uv pip install -r requirements-dev.txt<br/><br/>
                <span className="text-cyan-400">format</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ruff format src/ tests/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ruff check --fix src/ tests/<br/><br/>
                <span className="text-cyan-400">lint</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ruff check src/ tests/<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;bandit -r src/ -c pyproject.toml<br/><br/>
                <span className="text-cyan-400">test</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;pytest tests/ -v
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121217] to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
