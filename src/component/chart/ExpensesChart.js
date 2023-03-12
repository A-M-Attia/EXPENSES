import React from "react";
import Chart from "./Chart";



export default function ExpensesChart(props) {

const dataPoints = [
    {monthName:"Jan", value:0},
    {monthName:"Feb", value:0},
    {monthName:"Mar", value:0},
    {monthName:"Apr", value:0},
    {monthName:"May", value:0},
    {monthName:"Jun", value:0},
    {monthName:"Jul", value:0},
    {monthName:"Aug", value:0},
    {monthName:"Sep", value:0},
    {monthName:"Oct", value:0},
    {monthName:"Nov", value:0},
    {monthName:"Dec", value:0},
]

// console.log(props.filteredExpensesByYear[0])
for (const expense of props.filteredExpensesByYear) {
    // console.log(expense)
    let month = expense.date.getMonth()
    console.log(month)

    dataPoints[month].value += expense.amount
    
} 

  return (
    <div>
        <Chart expensesDetailsPerYear={dataPoints}/>
        {/* <Chart expensesDetailsPerYear={props.filteredExpensesByYear}/> */}

    </div>
  )
}
