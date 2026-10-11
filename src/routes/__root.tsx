import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div>
      <header className="w-full bg-white border-t-2 border-blue-600 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 py-3 lg:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SURGICISS" className="h-[56px] md:h-[72px] w-auto object-contain" />
            <span className="flex flex-col leading-none">
              <span className="text-[18px] font-bold tracking-tight">SURGICISS</span>
              <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-gray-500">Sterile Instrument Systems</span>
            </span>
          </Link>
          <nav className="hidden lg:flex gap-6 text-sm font-medium uppercase">
            <Link to="/">Home</Link>
            <Link to="/software">Software</Link>
            <Link to="/products">Products</Link>
            <Link to="/count-sheet-holders">Count Sheet Holders</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
    </div>
  ),
})
