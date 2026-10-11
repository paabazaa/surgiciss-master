import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div>
      <header className="w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/surgiciss-master/logo.png" 
              alt="Surgiciss" 
              className="h-12 w-auto"
              onError={(e:any)=>e.target.style.display='none'} 
            />
            <span className="font-bold text-2xl tracking-wide">SURGICISS LTD</span>
          </Link>
          <nav className="flex gap-8 text-base font-semibold">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="font-bold text-lg">SURGICISS LTD</p>
          <p className="text-base opacity-80 mt-2">We're dedicated to best surgical outcomes</p>
          <p className="text-sm opacity-60 mt-4">© {new Date().getFullYear()} Surgiciss Ltd</p>
        </div>
      </footer>
    </div>
  ),
})
