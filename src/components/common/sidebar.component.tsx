import { CurrencyDollarIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline"
import { HomeIcon } from "@heroicons/react/24/outline"
import { Link, useRouterState } from "@tanstack/react-router";


export default function SidebarComponent(){

  const pathname = useRouterState().location.pathname

  const tabs = [
    { 
      label: 'Home',
      to: '/',
      icon: HomeIcon,
    },
    { 
      label: 'Bills',
      to: '/bills',
      icon: CurrencyDollarIcon,
    },
    { 
      label: 'Members',
      to: '/members',
      icon: UserIcon,
    },
    { 
      label: 'Groups',
      to: '/groups',
      icon: UsersIcon,
    },
  ]
  
  return(
    <>
      <div className="px-4 xl:px-6 bg-bgGreen text-primary h-full  w-[250px] flex flex-col gap-3">
        {
          tabs.map(({ label, to, icon }, idx) => {
            const TabIcon = icon;
            return (
              <Link to={to} key={idx} className={`flex ${ pathname == to ? 'bg-white': 'bg-secondary hover:bg-white' } duration-150 shadow-sm hover:shadow items-center gap-3 p-3 rounded-md`}>
                <TabIcon className="h-5" />
                {label}
              </Link>
            )
          })
        }
      </div>
    </>
  )

}
