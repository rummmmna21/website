// Paste the single-file component here (converted to App). This file contains the UI and logic.
import React, { useState } from "react";

export default function App() {
  const templates = [
    { id: 1, title: "GF RX - Primary Template", desc: "Landing + Redirect example (primary)", thumb: "https://girlfriend-rx.netlify.app/", url: "https://girlfriend-rx.netlify.app/", tag: "featured" },
    { id: 2, title: "Neon Console", desc: "Green-dark console vibe with animated code", thumb: "https://via.placeholder.com/640x360?text=Neon+Console", url: "https://example.com/template/neon-console", tag: "ui" },
    { id: 3, title: "Red Surge", desc: "Aggressive red/blue highlights, fast UI", thumb: "https://via.placeholder.com/640x360?text=Red+Surge", url: "https://example.com/template/red-surge", tag: "ui" },
    { id: 4, title: "Deep Matrix", desc: "Matrix-like animated background + cards", thumb: "https://via.placeholder.com/640x360?text=Deep+Matrix", url: "https://example.com/template/deep-matrix", tag: "visual" }
  ]

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searching, setSearching] = useState(false);

  function openTemplate(t) { setSelected(t); setShowModal(true); }
  function redirectNow(url) { setSearching(true); setTimeout(() => { window.location.href = url; }, 900); }

  return (
    <div className="min-h-screen bg-[#071018] text-slate-100 font-sans relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float opacity-20 mix-blend-screen" style={{backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(16,255,144,0.06), transparent 6%), radial-gradient(circle at 90% 80%, rgba(77,132,255,0.06), transparent 8%)', width: '150%', height: '150%', transform: 'translate(-10%, -10%)'}} />
      </div>

      <header className="relative z-10 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-2xl">
            <span className="font-mono text-xl tracking-wider">RX</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">Hacker Templates — RX</h1>
            <p className="text-sm text-slate-300">green-dark • red-blue accents • animated interaction</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg font-mono text-xs border border-slate-700 hover:scale-105 transition transform">Docs</button>
          <button className="px-4 py-2 rounded-lg font-mono text-xs bg-gradient-to-r from-red-600 to-blue-500 hover:brightness-110 transition">Get Theme</button>
        </nav>
      </header>

      <main className="relative z-10 p-6">
        <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="col-span-2 bg-gradient-to-br from-[#022018] to-[#061127] p-6 rounded-2xl border border-slate-800 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-1/3">
                <div className="aspect-video rounded-lg overflow-hidden border border-slate-700 shadow-inner">
                  <img src={templates[0].thumb} alt="primary" className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform"/>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight">HACKING ENTRY READY</h2>
                <p className="mt-2 text-slate-300">Click any template thumbnail to preview and redirect. Every card has micro-animations, and buttons show a hacking-like searching pulse before redirect.</p>

                <div className="mt-4 flex gap-3">
                  <button onClick={() => openTemplate(templates[0])} className="px-4 py-2 rounded-lg font-mono text-sm bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transform transition shadow-md">Enter Template</button>
                  <button onClick={() => window.scrollTo({top: 400, behavior: 'smooth'})} className="px-4 py-2 rounded-lg border border-slate-700 font-mono text-sm hover:scale-105 transition">Explore more</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#05121a] p-6 rounded-2xl border border-slate-800 shadow-lg">
            <h3 className="font-mono text-sm uppercase text-slate-300">Stats</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-gradient-to-b from-[#042220] to-transparent rounded-lg border border-slate-800">
                <div className="text-xs text-slate-300">Templates</div>
                <div className="text-2xl font-bold">{templates.length}</div>
              </div>
              <div className="p-3 bg-gradient-to-b from-[#220d12] to-transparent rounded-lg border border-slate-800">
                <div className="text-xs text-slate-300">Active</div>
                <div className="text-2xl font-bold">1</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-semibold">Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((t) => (
              <article key={t.id} className="relative group bg-[#081518] rounded-2xl border border-slate-800 overflow-hidden shadow-md p-0">
                <div className="aspect-video overflow-hidden">
                  <a href="#" onClick={(e) => { e.preventDefault(); openTemplate(t); }}>
                    <img src={t.thumb} alt={t.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold">{t.title}</h4>
                  <p className="text-sm text-slate-300 mt-1">{t.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-400">{t.tag}</div>
                    <div className="flex gap-2">
                      <button onClick={() => openTemplate(t)} className="px-3 py-1 rounded-md font-mono text-sm border border-slate-700 hover:scale-105 transition">Preview</button>
                      <button onClick={() => redirectNow(t.url)} className="px-3 py-1 rounded-md font-mono text-sm bg-gradient-to-r from-red-500 to-blue-500 hover:brightness-110 transition">Open</button>
                    </div>
                  </div>
                </div>

                <div className="absolute right-3 top-3 px-2 py-1 rounded bg-gradient-to-r from-green-400 to-blue-500 text-black text-xs font-semibold opacity-90">NEW</div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {showModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => { setShowModal(false); setSearching(false); }} />

          <div className="relative z-10 max-w-3xl w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-gradient-to-br from-[#021014] to-[#041021]">
            <div className="p-4 flex items-start gap-4">
              <div className="w-40 rounded overflow-hidden border border-slate-700">
                <img src={selected.thumb} alt={selected.title} className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{selected.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{selected.desc}</p>

                <div className="mt-4 flex gap-3">
                  <button onClick={() => redirectNow(selected.url)} className="px-4 py-2 rounded-lg font-mono bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transition">{searching ? 'Searching...' : 'Redirect & Enter'}</button>
                  <button onClick={() => { setShowModal(false); setSearching(false); }} className="px-4 py-2 rounded-lg border border-slate-700 font-mono">Cancel</button>
                </div>
              </div>

              <div className="w-48 p-3 ml-2 rounded bg-[#031018] border border-slate-800 font-mono text-xs text-slate-300">
                <div className="pb-2">Status</div>
                <div className="h-8 rounded bg-gradient-to-r from-[#062b18] to-transparent flex items-center px-2">idle</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed left-4 bottom-6 z-20">
        <div className="p-3 rounded-lg border border-slate-800 bg-gradient-to-b from-[#021217] to-transparent font-mono text-sm">Hacker UI • Animations Enabled</div>
      </div>

      <style>{`@keyframes floatY { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } } .animate-float { animation: floatY 8s ease-in-out infinite; } .button-scan::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02)); transform: translateX(-120%); transition: transform .8s ease; } .group:hover .button-scan::after { transform: translateX(120%); } .flicker { animation: flick 1.5s steps(2, end) infinite; } @keyframes flick { 0% { opacity: .8 } 50% { opacity: .15 } 100% { opacity: .9 } } `}</style>
    </div>
  )
}
