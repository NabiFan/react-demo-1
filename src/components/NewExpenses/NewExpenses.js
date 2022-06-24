import React from 'react'
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

function NewExpenses({onAddExpenseHandler}) { 
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpenseHandler(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpenses;