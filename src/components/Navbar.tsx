import { GitBranch, Menu, Terminal, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["about", "skills", "projects", "journey", "education", "contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-sm text-cyan-400"
        >
          <Terminal size={18} />
          bilal@devops:~$
        </a>

        <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">{links.map((link) => <a href={`#${link}`} key={link} className="capitalize transition hover:text-cyan-400">{link}</a>)}</div>

        <a
          href="https://github.com/Bilaal-Ahmed"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400 md:flex"
        >
          <GitBranch size={16} />
          GitHub
        </a>

        <button
          className="menu-button text-gray-300 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {isMenuOpen && <div id="mobile-navigation" className="mobile-menu md:hidden">{links.map((link) => <a href={`#${link}`} key={link} className="capitalize" onClick={() => setIsMenuOpen(false)}>{link}</a>)}</div>}
    </header>
  );
}