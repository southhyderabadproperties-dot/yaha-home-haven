import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact Us", to: "/contact" as const },
];

import logoImg from "@/assets/logo.jpg";

export function Brand({ compact = false, theme = "light" }: { compact?: boolean; theme?: "light" | "dark" }) {
  const isDark = theme === "dark";
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="South Hyderabad Properties home">
      <img src={logoImg} alt="South Hyderabad Properties Logo" className="h-12 w-12 shrink-0 rounded-full object-contain shadow-md transition-transform group-hover:scale-105" />
      {!compact && (
        <span className="min-w-0 leading-none">
          <strong className={`block truncate font-display text-[15px] font-extrabold ${isDark ? 'text-white' : 'text-foreground'}`}>South Hyderabad</strong>
          <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] ${isDark ? 'text-white/80' : 'text-primary'}`}>Properties</span>
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="page-wrap grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Brand />
        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.slice(0, 2).map((item) => (
            <NavLink key={item.to} {...item} active={pathname === item.to} />
          ))}
          <div className="group relative py-7">
            <button className={`nav-link flex items-center gap-1 ${pathname.startsWith("/projects") ? "nav-link-active" : ""}`}>
              Projects <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-[68px] w-56 -translate-x-1/2 translate-y-2 rounded-md border border-border bg-popover p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link to="/projects/autumn-villas-thummaloor" className="block rounded-sm px-4 py-3 text-sm font-semibold text-popover-foreground hover:bg-accent" onClick={close}>
                Autumn Luxury Villas Thummaloor
              </Link>
            </div>
          </div>
          {navItems.slice(2).map((item) => (
            <NavLink key={item.to} {...item} active={pathname === item.to} />
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="brand" size="lg">
            <a href="tel:+919646952999"><Phone /> Call Us: +91 96469 52999</a>
          </Button>
        </div>
        <Button aria-label={open ? "Close menu" : "Open menu"} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.slice(0, 2).map((item) => <MobileLink key={item.to} {...item} onClick={close} />)}
            <details className="group"><summary className="flex items-center justify-between rounded-sm px-3 py-3 font-semibold text-foreground hover:bg-accent cursor-pointer list-none [&::-webkit-details-marker]:hidden">Projects <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></summary><div className="flex flex-col gap-1 pl-4 pb-2"><MobileLink label="Autumn Luxury Villas Thummaloor" to="/projects/autumn-villas-thummaloor" onClick={close} /></div></details>
            {navItems.slice(2).map((item) => <MobileLink key={item.to} {...item} onClick={close} />)}
            <Button asChild variant="brand" className="mt-3 w-full"><a href="tel:+919646952999"><Phone /> Call +91 96469 52999</a></Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ label, to, active }: { label: string; to: "/" | "/about" | "/services" | "/blog" | "/contact"; active: boolean }) {
  return <Link to={to} className={`nav-link ${active ? "nav-link-active" : ""}`}>{label}</Link>;
}

function MobileLink({ label, to, onClick }: { label: string; to: "/" | "/about" | "/services" | "/blog" | "/contact" | "/projects/autumn-villas-thummaloor"; onClick: () => void }) {
  return <Link to={to} onClick={onClick} className="rounded-sm px-3 py-3 font-semibold text-foreground hover:bg-accent">{label}</Link>;
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-primary-foreground">
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div><Brand theme="dark" /></div>
          <p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/70">Premium plots, land developments and luxury homes across South Hyderabad’s fastest-growing corridors.</p>
        </div>
        <div>
          <p className="footer-title">Quick links</p>
          <div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">
            <Link to="/about">About Us</Link><Link to="/projects/autumn-villas-thummaloor">Autumn Villas Thummaloor</Link><Link to="/blog">Insights</Link><Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Start a conversation</p>
          <div className="mt-5 grid gap-4 text-sm text-primary-foreground/80">
            <a href="tel:+919646952999" className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-orange" /> +91 96469 52999</a>
            <a href="mailto:southhyderabadproperties@gmail.com" className="flex items-start gap-3 break-all"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" /> southhyderabadproperties@gmail.com</a>
            <div className="flex gap-3 pt-2"><a aria-label="Instagram" href="#" className="social-button"><Instagram /></a><a aria-label="Facebook" href="#" className="social-button"><Facebook /></a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">© 2026 South Hyderabad Properties. All rights reserved.</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-[#1763cf] to-[#124da1] pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="page-wrap max-w-4xl text-center">
        <p className="font-bold uppercase tracking-widest text-[#FC913A]">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">{title}</h1>
        <div className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="page-wrap grid items-center gap-7 md:grid-cols-[1fr_auto]">
        <div><p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">Make your next move</p><h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Find a property built around your future.</h2></div>
        <Button asChild variant="orange" size="lg"><Link to="/contact">Talk to our property team</Link></Button>
      </div>
    </section>
  );
}


