import { createFileRoute } from '@tanstack/react-router';

import '../bill-styling.css'



const bills = [
  {
    name: 'KFC           ',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Dine & Wine   ',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Shoprite      ',
    cost: '500',
    status: 'active' 
  },
  {
    name: 'Free The Youth',
    cost: '1000',
    status: 'active' 
  },
  {
    name: 'Airbnb        ',
    cost: '500',
    status: 'active' 
  },
  // Add other bill objects as needed
];

// Define the List component
const List = () => {
  return (
    
    <div className='tabs'>
      <div className='header'>
        <h2> </h2>
        <select>
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
  component: () => <List /> // Render the List component here
});