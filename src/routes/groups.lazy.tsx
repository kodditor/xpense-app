
import { createLazyFileRoute, useRouterState, Link } from '@tanstack/react-router'
import Button from '../components/common/Button.component';
import { PencilIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/24/outline';



export const Route = createLazyFileRoute('/groups')({
  component: Groups,
})


function Groups(){ 
  const pathname = useRouterState().location.pathname;
  const pathsUnfiltered = ( pathname == '/' ) ? ['Dashboard'] : pathname.split('/')
  const paths = pathsUnfiltered.filter((path) => path != '')

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div>
          <h1 className='text-3xl font-semibold'>Groups - {groups.length}</h1>
          <small>
            { 
              paths.map((path, idx) => {
                return <Link className='inline' to={ (paths.length == 1) ? '/' : paths.slice(0, idx).join('/')} key={idx}>{path[0].toUpperCase() + path.substring(1)} &gt; </Link>
              })
            }
          </small>
          </div>
          <div className=''>
            <Button variant='outline'>
              <div className='flex items-center gap-2'>
                <PlusIcon className='w-4' />
                 Add Group
              </div>
            </Button>
          </div>
        </div>
        <div className='flex mt-3 flex-col sm:max-h-[calc(100vh-170px)] overflow-auto gap-2 bg-bgGreen rounded-md p-2'>
          {
            groups.map(({ title, members }, idx) => {
              return (
                <div key={idx} className='flex cursor-pointer hover:shadow duration-150 justify-between items-center p-4 bg-white rounded-md'>
                  <div className='flex items-center gap-4'>
                    <UserGroupIcon className='w-5' />
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <p className='font-light text-sm'>{members.length} members</p>
                  </div>
                  <div>
                    <Button>
                      <div className='flex items-center gap-2'>
                        <PencilIcon className='w-4' />
                        Edit Group
                      </div>
                    </Button>
                  </div>
                </div>
              )
            })
          }
        </div> 

      </div>
    </>
  )
}


const groups = [
  {
    id: 1,
    title: 'Old boys',
    members: [
      '0001',
      '0003',
      '0006',
      '0007',
    ]
  },
  {
    id: 2,
    title: 'New political party',
    members: [
      '0001',
      '0003',
      '0006',
      '0007',
    ]
  },

] 
