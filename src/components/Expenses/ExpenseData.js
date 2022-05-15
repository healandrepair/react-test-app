import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js"
import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseData.css"
function ExpenseData(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) =>{
        console.log("ExpenseData.js")
        console.log(selectedYear)
        // PROPS USING STATE CHANGE
        setFilteredYear(selectedYear);

    }

    /*Props is a single ELEMENT that is passed thru, then items is accessing said element */
    return (

        <div>



            <Card className="expenses">
                {/* send filteredYear variable as  = selected  */}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
            </Card>

        </div>
    );

}

export default ExpenseData;

