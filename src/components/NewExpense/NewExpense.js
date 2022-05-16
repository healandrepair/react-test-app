// import React from 'react';
// import ExpenseForm from './ExpenseForm';

// import './NewExpense.css'

// function NewExpense(props) {
//     const saveExpenseDataHandler = (enteredExpenseData) => {
//         const expenseData = {
//             ...enteredExpenseData,
//             id: Math.random().toString()
//         }
//         console.log("New Expense")
//         console.log(expenseData)
//         props.onAddExpense(expenseData)
//     }

//     return (

//         <div className="new-expense">

//             {/* this onSaveExpenseData is props parameter in ExpenseForm */}
//             <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>

//         </div>)
// }


// export default NewExpense;
import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;