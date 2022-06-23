import React from 'react'
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

function NewExpenses() { 
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpenses;