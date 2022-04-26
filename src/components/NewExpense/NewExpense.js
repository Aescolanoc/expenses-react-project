import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

   const cancelEditingHandler = () => {
    setIsEditing(false);
  }

return (
  <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onCancelEditing={cancelEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
  </div>
);
}

export default NewExpense;