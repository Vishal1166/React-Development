import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

let dummy_expense = [
  {
    id: 'eno101',
    tital:'Car Insurance',
    date: new Date(2023, 7, 26),
    price: 500
  },
  {
    id: 'eno105',
    tital:'Books ',
    date: new Date(2023, 6, 22),
    price: 300
  },
  {
    id: 'eno103',
    tital:'Traveling',
    date: new Date(2023, 7, 9),
    price: 750
  }
    ];

function App() {
 
const [expense,setexpense] = useState(dummy_expense);

  const addExpenseHandler=(entaredexpenseData)=>{

    const updatedlist = [entaredexpenseData,...expense];
    setexpense(updatedlist)
  }
  return(
    <div>
    <NewExpense onExpense={addExpenseHandler}/>
    <Expenses list={expense} />
</div>
  ); 
}

export default App;
