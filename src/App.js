// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import Expense from './components/Expenses/Expense';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [{
	id: 'e1',
	title: 'Toilet Paper',
	amount: 94.12,
	date: new Date(2020, 7, 14)
},
{
	id: 'e2',
	title: 'Car Insurance',
	amount: 294.67,
	date: new Date(2020, 2, 28)
},
{
	id: 'e3',
	title: 'Shampoo',
	amount: 50.12,
	date: new Date(2020, 6, 10)
},
{
	id: 'e4',
	title: 'conditioner',
	amount: 48.12,
	date: new Date(2021, 4, 1)
},
{
	id: 'e5',
	title: 'Body Wash',
	amount: 45.12,
	date: new Date(2022, 6, 8)
},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
	const addExpenseHandler = (expense) => {
		
		setExpenses((preExpenses) => ([
			expense,
			...preExpenses
		]))
	}
	return ( 
		<div>
			<NewExpenses onAddExpenseHandler={addExpenseHandler} />
			<Expense items={expenses} />
		</div>
	)
}


	export default App;