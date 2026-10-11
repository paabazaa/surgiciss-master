import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
  notFoundComponent: () => (
    <div style={{padding: '60px', textAlign: 'center'}}>
      <h1>404 — Not found</h1>
      <a href="/surgiciss-master/">Go home</a>
    </div>
  )
})
