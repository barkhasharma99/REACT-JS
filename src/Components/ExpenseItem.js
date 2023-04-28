import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
   <div className="mymaindiv">
     <div className="main">
       
      
      <ExpenseDate date2 = {props.date}/>
       <div className="title">
         {props.title}
         <b>{props.amount}</b>
       </div>
      
   </div>
   </div>
  );
}
export default ExpenseItem;
