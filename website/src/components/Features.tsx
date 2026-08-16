import { motion } from 'motion/react';
import { Package, Zap, ShieldCheck, Box, GitBranch } from 'lucide-react';

const features = [
  {
    title: 'Single Static Binary',
    description: 'No runtime dependencies or template folder management required. Just one binary.',
    icon: Package,
  },
  {
    title: 'Modern Python Stack',
    description: 'Configured with uv for lightning-fast package management.',
    icon: Zap,
  },
  {
    title: 'Built-in Quality Controls',
    description: 'Out-of-the-box linting, formatting, and security audits with ruff, bandit, and pre-commit.',
    icon: ShieldCheck,
  },
  {
    title: 'Container Ready',
    description: 'Chainguard-based multi-stage Dockerfile included by default.',
    icon: Box,
  },
  {
    title: 'CI/CD Built-in',
    description: 'Pre-configured GitHub Actions for CI/CD container builds and GitHub Pages deployment.',
    icon: GitBranch,
  },
];

export default function Features() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need, built right in.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Skeleton creates a solid foundation so you can focus on writing code, not configuring tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Alternate colors for a bit of variety (like in the theme), or just use emerald.
            const colorClass = index % 3 === 0 ? 'text-emerald-500 bg-emerald-500/10' : index % 3 === 1 ? 'text-cyan-500 bg-cyan-500/10' : 'text-indigo-500 bg-indigo-500/10';
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClass.split(' ')[1]}`}>
                  <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
