
import ExpensesItem from "../expensesItem/ExpensesItem"
import React, { useState } from 'react'
import './expenses.css';
import Card from "../../UI/card/Card" 
import ExpensesFilter from "../../filter/ExpensesFilter";
import ExpensesChart from "../../chart/ExpensesChart";


export default function Expenses(props) {
    
    const [selectedYear, setSelectedYear] = useState("2021")
    const onSelectYear = (year)=>{
        setSelectedYear(year)
         console.log(selectedYear)
    }

    const filteredExpensesByYear = props.expenses.filter(item =>{return selectedYear === item.date.getFullYear().toString()} ) 
  let expensesContent = <p>NO Data for this year</p>
  if(filteredExpensesByYear.length > 0){
    expensesContent = 
   filteredExpensesByYear.map((item)=> (  <ExpensesItem key={item.id}  item= {item} /> )) 

  }

    return (
    <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} onSelect={onSelectYear}/>
      <ExpensesChart filteredExpensesByYear={filteredExpensesByYear}/>
    {expensesContent}
    </Card>
  )
}
