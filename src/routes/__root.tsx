import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: function RootComponent() {
    return (
      <div>
        <Outlet />
      </div>
    )
  },
  notFoundComponent: function NotFound() {
    return (
      <div style={{padding: '60px', fontFamily: 'sans-serif', textAlign: 'center'}}>
        <h1>404 — Page not found</h1>
        <a href="/surgiciss-master/">Go back home</a>
      </div>
    )
  }
})
