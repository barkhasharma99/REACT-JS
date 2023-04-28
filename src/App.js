import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App()
 
{

  let expensedate = new Date(2023,4,28);
  let expensetittle = "Bus Fee";
  let expenseamount = 10000;
  // component k andr data pass krna 
  // jha se call krte wha sse value pass krte h
  return (
    
    <>
    <div>
      <h1>
        Let's Start
      </h1>
      <ExpenseItem 
      date = {expensedate}
      title = {expensetittle}
      amount = {expenseamount}
      /> 


    </div>
    </>
  );
}

export default App;
