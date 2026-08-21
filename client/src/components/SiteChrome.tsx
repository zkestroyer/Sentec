/* SENTEC / Signal / Structure
 * Shared chrome keeps every secondary page in the same dark editorial system:
 * warm signal orange, technical labels, restrained borders, and exact logo lockup.
 */
import { Link } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const logoAsset = "/manus-storage/SENTECNEWWHITELOGO_2ba86ec2.webp";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav page-nav">
      <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
        <img src={logoAsset} alt="SENTEC" />
        <span>SENTEC<span className="brand-dot">.</span></span>
      </Link>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>
      <a className="nav-cta" href="https://sentecneduet.live/login">Login <ArrowUpRight size={14} /></a>
      <button className="nav-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer secondary-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand-lockup footer-brand-lockup"><img src={logoAsset} alt="" /><span>SENTEC<span className="brand-dot">.</span></span></Link>
          <p>The Society for Promotion of Science, Engineering and Technology at NED University.</p>
        </div>
        <div className="footer-links">
          {links.slice(1).map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <div className="footer-contact"><span>CONTACT / BASE</span><a href="mailto:neduetsentec@gmail.com">neduetsentec@gmail.com</a><span>Student Affairs Dept, NED University</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 SENTEC</span><span>Built for curious engineers</span></div>
    </footer>
  );
}

export function SecondaryPage({ eyebrow, title, accent, intro, children }: { eyebrow: string; title: string; accent: string; intro: string; children: ReactNode }) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".secondary-page .motion-reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <div className="secondary-page"><SiteNav /><main><header className="secondary-hero motion-reveal"><div className="secondary-hero-grid"><div><span className="eyebrow"><i />{eyebrow}</span><h1>{title} <em>{accent}</em></h1><p>{intro}</p></div><div className="secondary-hero-index"><span>SYS.02</span><strong>FIELD / ACTIVE</strong><small>43°42'18" N<br />67°08'07" E</small></div></div></header><div className="motion-reveal">{children}</div></main><SiteFooter /></div>;
}
