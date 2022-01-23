import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  let changleHandler = () => {
    // console.log('clicked!!');
    setTitle('updated!!');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs:{props.amount}</div>
      </div>
      <button className="btn" onClick={changleHandler}>
        change title
      </button>
    </Card>
  );
};
export default ExpenseItem;
