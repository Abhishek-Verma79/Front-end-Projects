import React, { useState } from 'react';

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

 

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      <ExpensesList items = {filteredExpenses} />

      {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem 
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
      ))} */}


    </Card>
  );
}

export default Expenses;
