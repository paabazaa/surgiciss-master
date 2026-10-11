import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { products, software } from "../data/catalogue";
import { company } from "../data/company";

const softwareLinks = software.map((s) => ({ label: s.name, to: "/software/$slug", params: { slug: s.slug } }));
const productLinks = products.map((p) => ({ label: p.name, to: "/products/$slug", params: { slug: p.slug } }));

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"software" | "products" | null>(null);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (navRef.current &&!navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpenMenu(null); setMobileOpen(false); }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("keydown", onKey); };
  }, []);

  const topLevel = "px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary";
  return (
    <header className={`sticky top-0 z-50 border-t-2 border-primary bg-background transition-shadow ${stuck? "shadow-card" : ""}`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 min-w-0 max-w-[62%] sm:max-w-[70%]">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SURGICISS" className="h-[56px] sm:h-[40px] md:h-[72px] w-auto object-contain flex-shrink-0" width="300" height="72" />
          <span className="flex flex-col leading-none min-w-0">
            <span className="text-[12px] sm:text-[18px] font-bold tracking-tight text-secondary leading-none">SURGICISS</span>
            <span className="text-[5px] sm:text-[8px] font-medium uppercase tracking-[0.18em] text-muted-foreground leading-none mt-[2px]">Sterile Instrument Systems</span>
          </span>
        </Link>
        <nav ref={navRef} className="hidden items-center lg:flex">
          <Link to="/" className={topLevel}>Home</Link>
          <Link to="/software" className={topLevel}>Software</Link>
          <Link to="/products" className={topLevel}>Products</Link>
          <Link to="/count-sheet-holders" className={topLevel}>Instrument Count Sheet Holders</Link>
          <Link to="/contact-us" className={topLevel}>Contact Us</Link>
        </nav>
        <button type="button" className="inline-flex items-center gap-2 rounded border border-input px-3 py-2 text-sm font-medium lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} Menu
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-[1200px] px-4 py-2">
            <Link to="/" className="block border-b border-border py-3 text-sm font-medium uppercase" onClick={()=>setMobileOpen(false)}>Home</Link>
            <Link to="/software" className="block border-b border-border py-3 text-sm font-medium uppercase" onClick={()=>setMobileOpen(false)}>Software</Link>
            <Link to="/products" className="block border-b border-border py-3 text-sm font-medium uppercase" onClick={()=>setMobileOpen(false)}>Products</Link>
            <Link to="/count-sheet-holders" className="block border-b border-border py-3 text-sm font-medium uppercase" onClick={()=>setMobileOpen(false)}>Instrument Count Sheet Holders</Link>
            <Link to="/contact-us" className="block border-b border-border py-3 text-sm font-medium uppercase" onClick={()=>setMobileOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <SiteHeader />
      <Outlet />
    </>
  ),
})
