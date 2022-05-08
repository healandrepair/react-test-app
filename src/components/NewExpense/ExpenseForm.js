
import React, { useState} from "react";
import "./ExpenseForm.css"

function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('') 
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });



    const titleChangeHandler = (event) => {
        console.log('Title changed')
        console.log(event.target.value)
        setEnteredTitle(event.target.value)

        // setUserInput( (prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value)
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })

    }

    const dateChangeHandler = (event) => {

        // setUserInput( (prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
    }
    
 
    return (
        
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                    
                </div>


                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01"  max="2022-12-31" onChange={dateChangeHandler}/>

                    
                </div>

                <div className="new-expense__actions"> 
                    <button type="summit">Add Expense</button>
                </div>


            
            </div>

        </form>)

}

export default ExpenseForm;