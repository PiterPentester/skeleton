/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import TerminalDemo from './components/TerminalDemo';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-slate-200 font-sans selection:bg-emerald-500/30 relative flex flex-col overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1e24,transparent_50%)] pointer-events-none"></div>
      <div className="relative z-10 flex-1 flex flex-col">
        <NavBar />
        <Hero />
        <TerminalDemo />
        <Features />
        <Workflow />
        <Footer />
      </div>
    </div>
  );
}
