import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: function RootComponent() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* HEADER WITH LOGO + MENU */}
        <header className="w-full border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <img src="/surgiciss-master/logo.png" alt="Surgiciss" className="h-8 w-auto" onError={(e)=>{e.currentTarget.style.display='none'}} />
              SURGICISS LTD
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-white py-10 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-semibold">SURGICISS LTD</p>
            <p className="text-sm opacity-70 mt-2">We're dedicated to best surgical outcomes</p>
            <p className="text-xs opacity-50 mt-4">© {new Date().getFullYear()} Surgiciss Ltd. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
})
