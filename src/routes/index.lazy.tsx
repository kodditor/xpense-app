
import { createLazyFileRoute, useRouterState, Link } from '@tanstack/react-router'

type StatProps = {
  type: 'default'|'currency';
  label: string,
  value: number,
}

type BillProps = {

  title: string,
  itemsNum: number,
  total: number,
  createdAt: string,
}


export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const pathname = useRouterState().location.pathname;
  const paths = ( pathname.split('/').length == 1 ) ? pathname.split('/') : ['Dashboard']
  

  const stats: StatProps[] = [
    {
      type: 'currency',
      label: 'Expenses',
      value: 7000,
    },
    {
      type: 'default',
      label: 'Total Bills',
      value: 204,
    },
    {
      type: 'default',
      label: 'Users',
      value: 17,
    },
    {
      type: 'default',
      label: 'Groups',
      value: 2,
    },
  ]
  
  const bills: BillProps[] = [
    {
      title: 'KFC Night Out',
      itemsNum: 6,
      total: 567,
      createdAt: '2024-02-04'
    },
    {
      title: 'Hubtel Food Delivery',
      itemsNum: 11,
      total: 370,
      createdAt: '2024-02-22'
    },
    {
      title: 'Vidae Cafe',
      itemsNum: 4,
      total: 43,
      createdAt: '2024-03-16'
    },
    {
      title: 'Uber Ride',
      itemsNum: 1,
      total: 122,
      createdAt: '2024-03-21'
    },
  ]

  bills.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Dashboard</h1>
      <small>
        { paths.map((path, idx) => {
          return <Link className='inline' to={ (paths.length == 1) ? '/' : paths.slice(0, idx).join('/')} key={idx}>{path} &gt; </Link>
        })
        }
      </small>
      <div className='mt-3 grid grid-cols-3 gap-6'>
        {
          stats.map(({label, type, value}, idx) => <StatCard key={idx} label={label} type={type} value={value} />)
        }
      </div>
      <div className='mt-6'>
        <h3 className='text-2xl'>Recent Bills</h3>
        <div className='mt-4 h-[250px] overflow-auto p-2 flex flex-col gap-2 bg-bgGreenAccent rounded-md'>
          {
              bills.map(({title, total, itemsNum}, idx) => <BillCard key={idx} title={title} total={total} itemsNum={itemsNum} />)
          }
        </div>
      </div>
    </div>
  )
}


function StatCard({label, value, type}: StatProps){

  return (
    <div className='bg-bgGreenAccent p-4 rounded-md'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-end gap-1 h-[70px]'>
          {   
            type == 'currency' && 
            <>
               <small className='font-semibold mb-[3px]'>GHS</small>
               <h2 className='text-5xl font-semibold'>{value.toLocaleString('en', { minimumFractionDigits: 2})}</h2>
            </>
          }
          {
            type == 'default' && <h2 className='text-5xl font-semibold'>{value}</h2>
          }
        </div>
        <p className='text-lg'>{label}</p>
      </div>
    </div>
  )
}


function BillCard({ title, total, itemsNum }: Omit<BillProps, 'createdAt'>){
  return (
    <div className='flex cursor-pointer hover:shadow duration-150 justify-between items-center p-4 bg-white rounded-md'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <div className='flex gap-4 items-center'>
        <small>{itemsNum} items</small>
        <span className='flex w-[130px] justify-end items-center'>
          <small className='font-semibold mr-[4px]'>GHS</small>
          <h2 className='text-xl font-semibold'>{total.toLocaleString('en', { minimumFractionDigits: 2})}</h2>
        </span>
      </div>
    </div>
  )
}
