import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [date, setDate] = useState('2020');
  const saveFilterHandler = (expenseFilterDate) => {
    console.log('in app.js');
    // console.log(expenseFilterDate);
    setDate(expenseFilterDate);
  };
  // filter data based on date selection
  const filterExpenseDataByYear = props.expenses.filter(
    (filteredDataByyear) => {
      return (
        filteredDataByyear.date.getFullYear().toString() === date
      );
    },
  );
  console.log(filterExpenseDataByYear);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedDate={date}
          onSaveFilter={saveFilterHandler}
        />

        {/* conditional expression type one */}
        {/* {filterExpenseDataByYear.length === 0 ? (
        <p>No expenses found</p>
      // ) */}

        {/* conditional expression type two */}
        {/* {filterExpenseDataByYear.length === 0 && (
        <p>No expenses found</p>
      )}
      {filterExpenseDataByYear.length > 0 &&
        filterExpenseDataByYear.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}

        {/* conditional expression type 3rd  */}
        {/* {expenseContent} */}
        <ExpensesChart dataPoints={filterExpenseDataByYear} />
        <ExpensesList filteredExpenseList={filterExpenseDataByYear} />

        {/* {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

        {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
      </Card>
    </li>
  );
};
export default Expenses;
