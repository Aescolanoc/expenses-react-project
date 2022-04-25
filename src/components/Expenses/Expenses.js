import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => 
          <ExpenseItem 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
            key={expense.id}
          />)}
      </Card>
    </div>     
    ) 
}

export default Expenses;