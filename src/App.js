import Expenses from './component/expenses/expenses/Expenses';
import './App.css';
import NewExpense from './component/newExpense/NewExpense';
import { useState } from 'react';


const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses, setExpenses] = useState(initialExpenses)

  const formData = (data) =>{
     const userdata = { ...data, Department:"Management"}
     console.log(userdata)
  
  setExpenses((prevState)=>[...prevState,userdata])
  
  
  console.log(expenses)


  }
  return (<>
    <NewExpense formData={formData}/>
    
  <Expenses expenses={expenses}/>
  </>
  )
}

export default App;
