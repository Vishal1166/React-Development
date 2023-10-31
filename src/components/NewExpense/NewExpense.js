import React  from 'react';
import './NewExpense.css';

import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props)=>
{

    const saveExpensedataHandler=(EntaredexpenseData)=>{
      const expenseData = {
        //this used for copy any object in another object
         ...EntaredexpenseData,
         id: Math.random().toString()
      }
      // this is for send above data to parent Componate
      props.onExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <NewExpenseForm saveExpensedata={saveExpensedataHandler}/>
        </div>
    );
}

export default NewExpense;