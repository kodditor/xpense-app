
import { createLazyFileRoute, useRouterState, Link } from '@tanstack/react-router'
import Button from '../components/common/Button.component';
import { PencilIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';



export const Route = createLazyFileRoute('/members')({
  component: Members,
})


function Members(){
  const pathname = useRouterState().location.pathname;
  const pathsUnfiltered = ( pathname == '/' ) ? ['Dashboard'] : pathname.split('/')
  const paths = pathsUnfiltered.filter((path) => path != '')

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div>
          <h1 className='text-3xl font-semibold'>Members - {members.length}</h1>
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
                Add member
              </div>
            </Button>
          </div>
        </div>
        <div className='flex mt-3 flex-col sm:h-[calc(100vh-170px)] overflow-auto gap-2 bg-bgGreen rounded-md p-2'>
          {
            members.map(({ firstName, lastName, email }, idx) => {
              return (
                <div key={idx} className='flex cursor-pointer hover:shadow duration-150 justify-between items-center p-4 bg-white rounded-md'>
                  <div className='flex items-center gap-4'>
                    <UserIcon className='w-5' />
                    <h3 className='text-lg font-semibold'>{`${firstName} ${lastName}`}</h3>
                    <p className='font-light text-sm'>{email}</p>
                  </div>
                  <div>
                    <Button>
                      <div className='flex items-center gap-2'>
                        <PencilIcon className='w-4' />
                        Edit User
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


const members = [
  {
    id: '0001',
    firstName: 'John',
    lastName: 'Asamoah',
    email: 'j.asamoah@example.com',
  },
  {
    id: '0002',
    firstName: 'Kwaku',
    lastName: 'Amponsah',
    email: 'k.amponsah@example.com'
  },
  {
    id: '0003',
    firstName: 'Afua',
    lastName: 'Dadzie',
    email: 'a.dadzie@example.com',
  },
  {
    id: '0004',
    firstName: 'Ama',
    lastName: 'Takyiwaa',
    email: 'a.takyi@example.com',
  },
  {
    id: '0005',
    firstName: 'Kwaku',
    lastName: 'Mensah',
    email: 'k.mensah@example.com',
  },
  {
    id: '0006',
    firstName: 'Abena',
    lastName: 'Dwumah',
    email: 'a.dwumah@example.com',
  },
  {
    id: '0007',
    firstName: 'Okwonko',
    lastName: 'Ike',
    email: 'o.ike@example.com',
  },
  {
    id: '0008',
    firstName: 'Lizzie',
    lastName: 'Inkoom',
    email: 'l.inkoom@example.com',
  },
  {
    id: '0009',
    firstName: 'Chris',
    lastName: 'Logo',
    email: 'c.logo@example.com',
  },
  {
    id: '0010',
    firstName: 'Chelsea',
    lastName: 'Tutu',
    email: 'c.tutu@example.com',
  },
  {
    id: '0011',
    firstName: 'Prince',
    lastName: 'Ameyaw',
    email: 'p.ameyaw@example.com',
  },
  {
    id: '0012',
    firstName: 'Benard',
    lastName: 'Affreh',
    email: 'b.affreh@example.com',
  },
  {
    id: '0013',
    firstName: 'George',
    lastName: 'Anful',
    email: 'g.anful@example.com',
  },
  {
    id: '0014',
    firstName: 'Karen',
    lastName: 'Anim',
    email: 'k.anim@example.com',
  },
  {
    id: '0015',
    firstName: 'Yaa',
    lastName: 'Antwi',
    email: 'y.antwi@example.com',
  },
  {
    id: '0016',
    firstName: 'Kingsley',
    lastName: 'Inkoom',
    email: 'k.inkoom@example.com',
  },
  {
    id: '0017',
    firstName: 'Abigail',
    lastName: 'Odoo',
    email: 'a.odoo@example.com',
  },
]
