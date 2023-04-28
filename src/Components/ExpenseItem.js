import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear(" ");
  const date = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
   <div className="mymaindiv">
     <div className="main">
       
      
       <div className="month"> 
       <div>{month}</div>
       <div>{year}</div>
       <div>{date}</div>
       
       </div>
       <div className="title">
         {props.title}
         <b>{props.amount}</b>
       </div>
      
   </div>
   </div>
  );
}
export default ExpenseItem;
