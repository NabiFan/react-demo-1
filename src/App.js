// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Expense from './components/Expenses/Expense';

const expense = [{
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

const App = () => {
	return ( 
		<div>
			<h2>Let's get started!</h2>
			<Expense items={expense} />
		</div>
	)
}


	export default App;