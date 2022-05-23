
import './Expense.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";


const Expense = ({items}) => { 
  const list = items.map(item=> <ExpenseItem title={item.title} amount={item.amount} date = {item.date}/>);
  return (
    <Card className='expenses'>
      {list}
    </Card>
  )
}

export default Expense;