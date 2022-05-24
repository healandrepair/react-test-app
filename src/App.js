
import React, {useState} from 'react';

import ExpenseData from './components//Expenses/ExpenseData';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 54.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {


    // setExpenses([expense, ...expenses])
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
}

  return (
    <div className="App">
      <h2 style={{color: 'white', textAlign: "center"}}> Evan's Expenses List</h2>

      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseData items={expenses}/> {/*items refers to the element being passed, its also the variable name*/}

    </div>
  );
}

export default App;
