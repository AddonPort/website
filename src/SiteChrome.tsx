"use client";

import { Cable, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const REPOSITORY_URL = "https://github.com/AddonPort";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="AddonPort home">
        <span className="brand-mark">
          <Cable aria-hidden="true" />
        </span>
        <span>AddonPort</span>
        <span className="brand-context">for FACEIT</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link className={pathname === "/" || pathname === "/install" ? "active" : ""} href="/">
          Install
        </Link>
        <Link className={pathname === "/developers" ? "active" : ""} href="/developers/">
          Developers
        </Link>
      </nav>
      <a
        className="icon-button"
        href={REPOSITORY_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Open source on GitHub"
        title="GitHub"
      >
        <GitHubMark />
      </a>
    </header>
  );
}

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.9 4.8 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.1v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-brand">
          <Cable aria-hidden="true" /> AddonPort
        </span>
        <span>FACEIT adapter: GPL-3.0. SDK and protocol: MIT.</span>
      </div>
      <span>Unofficial and not affiliated with or endorsed by FACEIT.</span>
      <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
        Source <ExternalLink aria-hidden="true" />
      </a>
    </footer>
  );
}
