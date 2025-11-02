import React, { useEffect, useState } from "react";

export default function HackingViewNeonWebsite() {
  const [showIntro, setShowIntro] = useState(true);
  const [neonColor, setNeonColor] = useState("#00ffea");
  const [menuOpen, setMenuOpen] = useState(false);
  const [uploadedTemplates, setUploadedTemplates] = useState([]);

  useEffect(() => {
    if (document.getElementById("hv-style")) return;
    const css = `
:root{--neon:${neonColor};}
*{box-sizing:border-box;margin:0;padding:0}
html,body,#root{height:100%;background:#050306;color:#e6f7ff;font-family:Inter,system-ui}
.hv-wrap{position:relative;min-height:100vh;overflow:hidden;padding-bottom:84px}

/* subtle animated background */
.bg-glow{position:fixed;inset:0;z-index:-1;background:
  radial-gradient(circle at 10% 20%, rgba(255,60,255,0.06), transparent 20%),
  radial-gradient(circle at 80% 70%, rgba(0,255,234,0.06), transparent 20%),
  radial-gradient(circle at 50% 50%, rgba(255,212,0,0.03), transparent 30%);
filter:blur(70px);transform:scale(1);animation:shift 26s infinite alternate ease-in-out}
@keyframes shift{to{transform:scale(1.12) translate(-3%,-2%)}}

/* header + layout */
header{padding:22px 28px;border-bottom:1px solid rgba(255,255,255,0.02);display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:12px}
.logo .dot{width:12px;height:12px;border-radius:4px;background:var(--neon);box-shadow:0 0 14px var(--neon)}
.title{font-weight:700;font-size:18px}

/* featured large template */
.featured-wrap{display:flex;gap:18px;align-items:flex-start;flex-wrap:wrap;margin:20px 28px}
.featured-card{flex:1 1 720px;min-width:320px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.03);border-radius:12px;padding:14px;display:flex;gap:14px;align-items:center}
.thumbnail{width:420px;max-width:48%;min-height:220px;border-radius:10px;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,0.03);display:flex;align-items:end;justify-content:space-between;padding:12px;position:relative;overflow:hidden;cursor:pointer}
.thumbnail .badge{position:absolute;left:12px;top:12px;background:linear-gradient(90deg,var(--neon),#fff);color:#000;padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px;opacity:0.95}
.thumbnail .locked{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.6));display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.85);font-weight:700;font-size:18px;backdrop-filter: blur(2px)}
.card-info{flex:1;padding:8px 4px;min-width:220px}
.project-title{font-size:20px;font-weight:800;color:var(--neon);margin-bottom:8px}
.project-desc{color:rgba(255,255,255,0.72);margin-bottom:12px;line-height:1.35}
.contact-row{display:flex;gap:10px;align-items:center}
.cta-btn{padding:10px 14px;border-radius:10px;background:var(--neon);color:#001;cursor:pointer;border:none;font-weight:700;box-shadow:0 8px 30px rgba(0,0,0,0.6)}
.small-note{font-size:13px;color:rgba(255,255,255,0.65)}

/* templates grid (others locked) */
.grid-wrap{padding:0 28px 40px 28px;margin-top:8px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
.card{padding:14px;border-radius:10px;position:relative;overflow:hidden;cursor:not-allowed;background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.02)}
.card .name{font-weight:700}
.card .meta{font-size:12px;color:rgba(255,255,255,0.5);margin-top:6px}
.lock-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.6));display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.9);font-weight:700}

/* bottom bar */
.bottom-bar{position:fixed;left:0;right:0;bottom:0;padding:10px 16px;background:rgba(0,0,0,0.55);display:flex;align-items:center;gap:14px;border-top:1px solid rgba(255,255,255,0.03)}
.marquee{overflow:hidden;flex:1}
.marquee p{white-space:nowrap;display:inline-block;padding-left:100%;animation:marq 18s linear infinite}
@keyframes marq{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}

/* responsiveness */
@media (max-width:980px){.thumbnail{max-width:46%}.featured-card{flex-direction:column}.thumbnail{width:100%;max-width:100%}.card{cursor:default}}
`;
    const tag = document.createElement("style");
    tag.id = "hv-style";
    tag.innerHTML = css;
    document.head.appendChild(tag);
  }, [neonColor]);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(t);
  }, []);

  // featured template data (new)
  const featured = {
    id: "featured-001",
    name: "Cyber Ninja — Neon Landing",
    desc: "A futuristic neon hacker landing — click thumbnail to visit live demo at cyber-ninjas.top. Locked templates shown below.",
    thumb: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
        <defs>
          <linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#00ffea'/><stop offset='1' stop-color='#ff3bff'/></linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='#030205'/>
        <g transform='translate(80,80)'>
          <rect x='0' y='0' rx='18' ry='18' width='1040' height='640' fill='url(#g)' opacity='0.08'/>
          <text x='40' y='90' fill='#00ffea' font-size='48' font-family='Inter, sans-serif' font-weight='700'>Cyber Ninja — Neon</text>
          <text x='40' y='140' fill='#dff' font-size='18' font-family='Inter, sans-serif'>Future hacker landing • Preview demo</text>
        </g>
      </svg>
    `)
  };

  function openFeatured() {
    // open cyber-ninjas.top in new tab
    try {
      window.open("https://cyber-ninjas.top", "_blank", "noopener");
    } catch (e) {
      console.warn("Cannot open external link:", e);
    }
  }

  function handleTemplateClick(tpl) {
    // for unlocked featured we open site; other templates are locked (no action)
    if (tpl.id === featured.id) return openFeatured();
    // otherwise show small notice (no-op in build) - keep UX friendly
    alert("This template is locked — featured demo available. Contact for access.");
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const newTpl = { name: file.name, desc: `Uploaded template (${file.type || "file"})`, id: Date.now() };
    setUploadedTemplates((s) => [newTpl, ...s]);
    e.target.value = null;
  }

  return (
    <div className="hv-wrap">
      <div className="bg-glow" />

      {showIntro && (
        <div style={{position:"fixed",inset:0,zIndex:60,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.78)"}}>
          <div style={{width:520,maxWidth:"90%",padding:24,borderRadius:12,background:"linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))",border:"1px solid rgba(0,255,234,0.06)"}}>
            <div style={{color:neonColor,fontWeight:800,fontSize:22,marginBottom:8}}>HACKING SEQUENCE — initializing</div>
            <div style={{background:"rgba(0,0,0,0.6)",padding:12,borderRadius:8,fontFamily:"monospace",fontSize:13,color:"#a8f0ea"}}>
              <div>Connecting to target... <span style={{display:"inline-block",width:8,height:18,background:neonColor,marginLeft:6}} /></div>
              <div style={{marginTop:10}}>Executing payload: <strong>rx-view-nion</strong></div>
              <div style={{marginTop:8,fontSize:12,color:"rgba(255,255,255,0.6)"}}>Please wait — establishing secure channel (simulated)</div>
            </div>
          </div>
        </div>
      )}

      <header>
        <div className="logo">
          <div className="dot" style={{boxShadow:`0 0 14px ${neonColor}`}} />
          <div>
            <div className="title">Hacking View — Neon Templates</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.45)"}}>Rx Abdullah • Showcase</div>
          </div>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <input type="color" value={neonColor} onChange={(e)=>setNeonColor(e.target.value)} title="Change neon color" style={{width:46,height:34,borderRadius:8,border:"none",padding:2}} />
          <div style={{fontSize:12,color:"rgba(255,255,255,0.45)"}}>{uploadedTemplates.length} templates</div>
        </div>
      </header>

      {/* FEATURED BIG TEMPLATE */}
      <div className="featured-wrap">
        <div className="featured-card">
          <div
            className="thumbnail"
            role="button"
            onClick={()=>handleTemplateClick(featured)}
            title="Open featured demo (cyber-ninjas.top)"
            style={{backgroundImage:`url("${featured.thumb}")`}}
          >
            <div className="badge">NEW • FUTURE</div>
            {/* thumbnail bottom-left overlay */}
            <div style={{position:"absolute",left:12,bottom:12,color:"#001",background:"rgba(255,255,255,0.9)",padding:"6px 10px",borderRadius:8,fontWeight:700,fontSize:13}}>Open demo</div>
          </div>

          <div className="card-info">
            <div className="project-title">{featured.name}</div>
            <div className="project-desc">{featured.desc}</div>

            <div className="contact-row" style={{marginTop:12}}>
              <a className="cta-btn" href="mailto:hello@cyber-ninjas.top?subject=Template%20help%20-%20Cyber%20Ninja" onClick={(e)=>{/* analytics hook possible */}}>Contact</a>
              <div className="small-note">If you need help or access to locked templates, click Contact — we'll respond fast.</div>
            </div>
          </div>
        </div>
      </div>

      {/* TEMPLATES GRID - others show locked */}
      <div className="grid-wrap">
        <div className="grid">
          {[...Array(6)].map((_,i)=>({
            id:`tpl-${i+1}`, name:`Neon Template ${i+1}`, desc:`Preview locked — contact for access.`
          })).concat(uploadedTemplates).map((tpl, idx) => (
            <div key={tpl.id || idx} className="card" onClick={()=>handleTemplateClick(tpl)}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div className="name">{tpl.name}</div>
                  <div className="meta">{tpl.desc}</div>
                </div>
              </div>
              <div className="lock-overlay">LOCKED</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-bar">
        <div style={{width:8,height:8,borderRadius:2,background:neonColor,boxShadow:`0 0 18px ${neonColor}`}} />
        <div className="marquee"><p>Welcome — Thanks for visiting RX website · Neon templates · Featured demo: cyber-ninjas.top · Contact for locked templates</p></div>
        <div style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>v1.2</div>
      </div>
    </div>
  );
}
