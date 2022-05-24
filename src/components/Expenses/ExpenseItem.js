import React from 'react';

import "./ExpenseItem.css"
import "./ExpenseDate.js"
import Card from "../UI/Card.js"

import ExpenseDate from "./ExpenseDate.js";
function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);


    // function clickHandler() {
    //     setTitle('Updated');

    //     console.log(props.title)

    // }

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>

                <div className="expense-item__price">${props.amount}</div>
            </div>
{/* 
            <button onClick={clickHandler}> Change Title</button> */}
        </Card>

    );

}

export default ExpenseItem;