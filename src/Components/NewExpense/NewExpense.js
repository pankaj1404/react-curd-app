import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
    
  };
  const showExpenseForm = () => {
    setShowForm(true);
  };
  const cancelBtnHandle = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={showExpenseForm}>
          Add New Expenses
        </button>
      )}
      {/* <form></form> separate component need to import*/}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelBtnHandle}
        />
      )}
    </div>
  );
};
export default NewExpense;
