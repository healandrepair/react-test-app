import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseData.css"
function ExpenseData(props) {
    const [filteredYear, setFilteredYear] = useState('2020');



    const filterChangeHandler = (selectedYear) => {

        // PROPS USING STATE CHANGE
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    /*Props is a single ELEMENT that is passed thru, then items is accessing said element */
    return (

        <div>
            <Card className="expenses">
                {/* send filteredYear variable as  = selected  */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* props.items is the array in App.js*/}


                {/* JS If length == 0, do expenses No expense found */}
                {filteredExpenses.length === 0 && <p>No Expenses Found.</p> }
                {/* JSX code if list empty, do <p> otherwise print list */}
                {filteredExpenses.length > 0 && 
                    filteredExpenses.map((expense) =>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />)}

            </Card>

        </div>
    );

}

export default ExpenseData;

