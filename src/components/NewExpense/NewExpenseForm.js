import React,{useState}  from 'react';
import './NewExpenseForm.css';


const NewExpenseForm = (props) =>{

    const [entaredtital,setantaredtital]= useState('');
    const [entareddate,setentareddate]= useState('');
    const [entaredprice,setentaredprice]= useState('');

    const titalHandler = (event)=>{
        setantaredtital(event.target.value);
    };

    const dateHandler = (event)=>{
        setentareddate(event.target.value);
    };
    const amountHandler = (event)=>{
        setentaredprice(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {

            tital: entaredtital,
            price: entaredprice,
            date: new Date(entareddate)
        }
        // this is for send above data to parent Componate
        props.saveExpensedata(expenseData);


        setantaredtital('');
        setentareddate('');
        setentaredprice('');

    };
    return(
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={entaredtital} onChange={titalHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={entareddate}  onChange={dateHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={entaredprice}  onChange={amountHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
                </div>
            </form>     
    );


}

export default NewExpenseForm;