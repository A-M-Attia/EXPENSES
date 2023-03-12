import "./expensesitem.css";
import ExpensesDate from "../expensesDate/ExpensesDate";
import Card from "../../UI/card/Card" 

function Expenses(props) {


  return (
    //   <p>Hello from expensesItem...</p>
    <Card className="expense-item">

      <ExpensesDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
         <div className="expense-item__price">{props.item.amount}$</div>
      </div>
    </Card>
  );
}

export default Expenses;
