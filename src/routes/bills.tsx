import { createFileRoute  } from '@tanstack/react-router';

import '../bill-styling.css'



const bills = [
  {
    name: 'Bill-1',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Bill-2',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Bill-3',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Bill-4',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Bill-5',
    cost: '500',
    status: 'active' 
  },
  // Add other bill objects as needed
];

// Define the List component
const List = () => {
  return (
    
    <div className='tabs'>
      <div className='header'><div>
        <h2>Bill Status</h2>
      </div>
        
        <select className='button-shihh'>
          <option value="All">All Bills</option>
          <option value="Active Bills">Active Bills</option>
          <option value="Inactive Bills">Inactive Bills</option>
        </select>
      </div>
      <div className='bills-container'>
        
        
        
        
        {bills.map(bill => (
          <div className='list' key={bill.name}>
            <div className='bills-detail'>
              <h2>{bill.name}</h2>
            </div>
            <span>{bill.status}</span>
            <span>{bill.cost}</span>
            <span className='bill--todo'></span>
          </div>
        ))}
      </div>
    </div>
  );
};


export const Route = createFileRoute('/bills')({
  component: () => <List /> 
});