import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";



export default function Chart(props) {
   
    const totalExpensesArray = props.expensesDetailsPerYear.map(month => month.value)
const maxValue = Math.max(...totalExpensesArray)
console.log(maxValue)
  return (
    <div className="chart">
       
        {props.expensesDetailsPerYear.map(year => {return (
             <ChartBar 
             key={year.monthName}
             value={year.value}
             maxValue={maxValue}
             monthName={year.monthName}
          
             />)} )   }
    </div>
  )
}
