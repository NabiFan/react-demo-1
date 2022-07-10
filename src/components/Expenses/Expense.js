import './Expense.css';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpensesList from './ExpensesList';

function Expense({items}) {
  const [selectYear, setSelectYear] = useState('2020');
  const filterChangeHandle = (val) => {
    if(val) {
      setSelectYear(val)
    }
  }
  const dataList = items.filter(item => {
      const tmpDate = new Date(item.date);
      return !selectYear || tmpDate.getFullYear() === parseInt(selectYear,10);
  })
  const list = dataList.map(item=> <ExpenseItem
    key={item.id}
    title={item.title}
    amount={item.amount}
    date = {item.date}/>);
  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandle} selectYear={selectYear} />
      <ExpenseChart expenses={dataList} />
      <ExpensesList list={list} />
    </Card>
  )
}

export default Expense;