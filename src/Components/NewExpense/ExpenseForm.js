import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  //   or

  // keep it in one useState
  //   const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  //   });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    //  or
    // technically below code is wrong

    // setUserInput({
    //   ...setUserInput,
    //   title: event.target.value,
    // });
    // or

    //if there is dependency on previous state we need to use below syntax
    //  setUserInput((prevState) => {
    //     return { ...prevState, title: event.target.value };
    //   });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //  or
    // technically below code is wrong
    // setUserInput({
    //   ...setUserInput,
    //   amount: event.target.value,
    // });
    // or
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...setUserInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // will not reload or execute  default behaviour of browser , to stop we are using below preventdefault method
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    clearInputValueAfterSubmit();
  };
  const clearInputValueAfterSubmit = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
