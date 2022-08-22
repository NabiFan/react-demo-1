import './Expense.css';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function Expense({items}) {
  const [selectYear, setSelectYear] = useState('2020');
  const filterExpenses = items.filter(item => {
      const tmpDate = new Date(item.date);
      return !selectYear || tmpDate.getFullYear() === parseInt(selectYear,10);
  });
  const expenseItem = filterExpenses.map(item=> <ExpenseItem title={item.title} amunt={item.amount} date = {item.date}/>);
  const filterChangeHandle = (val) => {
    if(val) {
      setSelectYear(val)
    }
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter={filterChangeHandle} selectYear={selectYear} />
      <ExpenseChart expenses={filterExpenses} />
      {expenseItem}
    </Card>
  )
}

export default Expense;