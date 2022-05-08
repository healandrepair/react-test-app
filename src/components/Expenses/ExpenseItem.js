import React, {useState} from 'react';

import "./ExpenseItem.css"
import "./ExpenseDate.js"
import Card from "../UI/Card.js"

import ExpenseDate from "./ExpenseDate.js";
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [count, setCount] = useState(0)


    function clickHandler() {
        setTitle('Updated');
        setCount(count+1)
        console.log(title)
        console.log(count)
        
        
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <h3>{count}</h3>
                <div className="expense-item__price">${props.amount}</div>
            </div>

            <button onClick={clickHandler}> Change Title</button>
        </Card>
    );

}

export default ExpenseItem;