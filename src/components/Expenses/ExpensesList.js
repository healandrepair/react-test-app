import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"


function ExpensesList({ items_array }) {

    if (items_array.length === 0) {

        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
        

    }
    return (<ul className="expenses-list">
            {items_array.map((expense) =>
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        )}

    </ul>)

}

export default ExpensesList;