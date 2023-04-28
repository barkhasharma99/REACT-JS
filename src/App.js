import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App()
 
{

  // let expensedate = new Date(2023,4,28);
  // let expensetittle = "Bus Fee";
  // let expenseamount = 10000;
  // component k andr data pass krna 
  // jha se call krte wha sse value pass krte h

  let Expences = [
    {
      id : 'a1',
      title:"school fee",
      date : new Date(2023,4,28),
      amount:11,
    },
    {
      id : 'a2',
      title:"clg fee",
      date : new Date(2023,4,28),
      amount:11,
    },
    {
      id : 'a3',
      title:"bus fee",
      date : new Date(2023,4,28),
      amount:11,
    }
  ]
  return (
    
    <>
    <div>
      <h1>
        Let's Start
      </h1>
      <ExpenseItem 
      date = {Expences[0].date}
      title = {Expences[0].title}
      amount = {Expences[0].amount}
      /> 
      <ExpenseItem 
      date = {Expences[1].date}
      title = {Expences[1].title}
      amount = {Expences[1].amount}
      /> 
      <ExpenseItem 
      date = {Expences[2].date}
      title = {Expences[2].title}
      amount = {Expences[2].amount}
      /> 


    </div>
    </>
  );
}

export default App;
