import { useState } from "react";
import "./expenseForm.css";

function ExpenseForm(props) {

const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [date, setDate] = useState("")



const handelTitleChange = (event)=>{
    setTitle(event.target.value)
   
}
const handelPriceChange = (event)=>{
    setPrice(event.target.value)
    
}
const handelDateChange = (event)=>{
    setDate(event.target.value)
    
}

const handelSubmit = (event)=>{
    event.preventDefault()
const formData = {
    title,
    amount:Number(price),
    date: new Date(date)
}
console.log(formData)
props.onSave(formData)
setTitle("")
setPrice("")
setDate("")


}
  return (
    
    <form onSubmit={handelSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label >Title</label>
          <input  type="text" value={title} onChange={handelTitleChange}/>
        </div>

        <div  className="new-expense__control">
          <label >Price</label>
          <input  type="number" min="0.01" step="0.01" value={price} onChange={handelPriceChange}/>
        </div>

        <div  className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={handelDateChange}/>
        </div>
      
      </div>
      <div className="new-expense__actions">

            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add NewExpense</button>
        </div>
    </form>


  );
}
export default ExpenseForm;
