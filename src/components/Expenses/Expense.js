/* eslint-disable react/react-in-jsx-scope */

import './Expense.css';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';

function Expense({items}) {
  const [selectYear, setSelectYear] = useState('2020')
  const list = items.filter(item => {
      const tmpDate = new Date(item.date);
      return !selectYear || tmpDate.getFullYear() === parseInt(selectYear,10);
  }).map(item=> <ExpenseItem title={item.title} amunt={item.amount} date = {item.date}/>);
  const filterChangeHandle = (val) => {
    if(val) {
      setSelectYear(val)
    }
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandle} selectYear={selectYear} />
      {list}
    </Card>
  )
}

export default Expense;