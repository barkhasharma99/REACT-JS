import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date2.toLocaleString("en-us", { month: "long" });
  const year = props.date2.getFullYear(" ");
  const day = props.date2.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div>
       <div className="month"> 
       <div>{month}</div>
       <div>{year}</div>
       <div>{day}</div>
       
       </div>
    </div>
  )
}

export default ExpenseDate
