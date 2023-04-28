import './ExpenseItem.css';

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-us',{month:'long'});
    const year = props.date.getFullYear(" ");
    const date = props.date.toLocaleString('en-us',{date:'long'});



    return (
        <div>
            <h1>
                College fee
            </h1>
            <div className="main">
                {month +" " + year +" "+ date}
                {props.title}
                {props.amount}

            </div>
        </div>
    );
}
export default ExpenseItem;