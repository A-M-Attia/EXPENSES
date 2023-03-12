import React , {useState} from "react";
import "./newExpense.css"
import ExpenseForm from "./ExpenseForm";


function NewExpense (props){

 const [isEditting, setIsEditting] = useState(false)
const saveuserData = (data)=>{
    const  newUserData ={...data, id: (Math.trunc(Math.random() * 10).toLocaleString()) }

    console.log(newUserData)
    props.formData(newUserData)
    handelCancel()
}

const handelClick = () =>{setIsEditting(true)}
const handelCancel= () =>{setIsEditting(false)}

return (
    <div className="new-expense">
      {!isEditting && <button onClick={handelClick}>Add new Expenses</button>}
      {isEditting && <ExpenseForm onCancel={handelCancel} onSave={saveuserData}/>}
      
    </div>
)
}

export default NewExpense