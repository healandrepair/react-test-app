import React, { useState } from 'react';


import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

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
                {/* send filteredYear variable as  = selected as props for expensesFilter */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesList items_array={filteredExpenses}/>
           

            </Card>

        </div>
    );

}

export default ExpenseData;

