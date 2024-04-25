import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import HeaderComponent from '../components/common/header.component'
import SidebarComponent from '../components/common/sidebar.component'

export const Route = createRootRoute({
  component: () => (
    <div className='bg-bgGreen'>
      <HeaderComponent />
      <main className='w-full h-[calc(100vh-70px)] flex'>
        <SidebarComponent />
        <div className='rounded-tl-md bg-white text-primary p-4 xl:p-6 w-[calc(100vw-250px)] shadow '>
          <Outlet />
        </div>
      </main>
      { import.meta.env.DEV && <TanStackRouterDevtools /> }
    </div>
  ),
})
