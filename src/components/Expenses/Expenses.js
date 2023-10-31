import './Expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';



function Expenses(props)
{
    return(

        <Card className="expenses">
        {
            props.list.map(
                expense => (
                <ExpenseItem
                    date={expense.date}
                    tital={expense.tital}
                    price={expense.price} />
                )
           )
       }
        </Card>
    );
}

export default Expenses;