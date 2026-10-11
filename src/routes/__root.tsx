import { createRootRoute, Outlet } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'

export const Route = createRootRoute({
  component: () => (
    <>
      <SiteHeader />
      <Outlet />
    </>
  ),
})
