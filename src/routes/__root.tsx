import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* BIG ORIGINAL HEADER - h-[72px] */}
      <header className="w-full bg-white border-t-[3px] border-blue-600 shadow-sm sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between">

          {/* Logo + Text - BIG */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="SURGICISS"
              className="h-[56px] md:h-[72px] w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[20px] md:text-[22px] font-extrabold tracking-tight text-black">
                SURGICISS
              </span>
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mt-[2px]">
                Sterile Instrument Systems
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold uppercase tracking-wide">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/software" className="hover:text-blue-600">Software</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/count-sheet-holders" className="hover:text-blue-600">Count Sheet Holders</Link>
            <Link to="/contact-us" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</Link>
          </nav>

          {/* Mobile menu icon */}
          <div className="lg:hidden text-2xl">☰</div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 text-sm py-8 text-center">
        © {new Date().getFullYear()} SURGICISS Ltd - Sterile Instrument Systems
      </footer>
    </div>
  )
}
