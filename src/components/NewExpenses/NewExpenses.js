import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

function NewExpenses({onAddExpenseHandler}) { 
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpenseHandler(expenseData);
    setIsEditing(false)
  }

  const startEditingHandle = () => setIsEditing(true);
  const stopEditingHandle = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandle}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}  onCancel={stopEditingHandle}/>}
    </div>
  )
}

export default NewExpenses;