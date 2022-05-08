
import ExpenseData from './components//Expenses/ExpenseData';
import NewExpense from './components/NewExpense/NewExpense';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
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

  return (
    <div className="App">
      <h2> Lets get started</h2>
      <p> this is also visible</p>
      <NewExpense/>
      <ExpenseData items={expenses}/> {/*items refers to the element being passed, its also the variable name*/}

    </div>
  );
}

export default App;
