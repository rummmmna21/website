README.md (deploy steps)

# Hacker Templates — RX

### Setup (local)

1. `git init` and copy files.
2. `npm install` (or `pnpm` / `yarn`).
3. `npm run dev` to run locally (Vite).

### Build

- `npm run build` produces `dist/`.

### Deploy to GitHub + Render

1. Push this repo to GitHub.
2. On Render: Create new **Static Site** (or Web Service using Node if you need server routes).
   - Connect your GitHub repo.
   - Build command: `npm run build`.
   - Publish directory: `dist`.
3. Render will build and provide a public URL.

**Notes**: If you choose Netlify instead, same steps: set build command `npm run build`, publish `dist/`.


---

If you want, I can now:

1. Add clickable bullets with each file in the canvas (done), or



2. Create a ready-to-upload ZIP (I can generate files in the canvas if you want), or



3. Push to a GitHub repo for you (I can't access your GitHub — but I can give exact commands you can paste).




Tell me which next step you want and I'll prepare it.


---

POLISH: "Hacking" Visual Enhancements (added)

I added a full polish section with extra CSS, JavaScript UX touches, and deployment-ready git commands. What's included (summarized so you know where to look in the canvas):

Polished CSS: advanced glows, animated gradient borders, terminal-style typewriter and scan effects, subtle CRT scanlines, and a noise overlay for texture. Implemented in src/index.css and small inline <style> blocks in src/App.jsx.

Animated Code Terminal: a reusable TerminalPreview component that types code, scrolls, and loops. It also has a "hacking entry" pulse when you hover or click "Redirect & Enter".

Button Animations: layered button scan, press ripple (pure CSS), and a short pulse loader for the redirect action (Searching...) so it looks like a hacking probe.

Thumbnail Hover: 3D tilt + chromatic aberration effect on template thumbnails to give depth and hacker aesthetic.

Redirect System UX: Smooth pre-redirect animation with sound cue (optional — commented out) and graceful fallback (opens in new tab if user has popup blockers). The redirect triggers a CSS overlay that animates like a terminal takeover before window.location.

Assets: small SVG icons and a tiny repeating noise PNG (data-URI included) for background texture — embedded so you don't need extra files.

Accessibility: focus-visible styles for keyboard users and reduced-motion support (prefers-reduced-motion) so animations respect user settings.

README enhancements: exact Git commands, Render static site settings, and a note how to enable Netlify/Render redirect rules if you use them.

Git commands added:

git init
git add .
git commit -m "Initial commit: Hacker Templates RX"
gh repo create your-username/hacker-templates --public --source=. --remote=origin
git push -u origin main

(If you don't use GitHub CLI: create a repo on github.com, then git remote add origin https://github.com/<you>/hacker-templates.git and git push -u origin main.)

Render settings: Static Site, Branch main, Build command npm run build, Publish directory dist.


If you want any of these now, tell me which one of the following to do next and I'll deliver it immediately:

1. Create a downloadable ZIP (I will generate the ZIP in the canvas and give you a link).


2. Paste the exact polished src/index.css + src/App.jsx terminal component code into chat (if you want to copy-paste directly).


3. I prepare a ready-to-run GitHub repo tarball and the exact Render/Netlify config files (_redirects, netlify.toml) included.



Which option do you want?


---

(If you want color or effect changes: say e.g. "more green + neon lines", or "stronger red pulses", or "minimal motion" — I already added variables so changing a few lines will switch the theme across the site.)
