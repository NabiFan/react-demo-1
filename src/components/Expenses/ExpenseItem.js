import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({title, date, amount}) {
  // const {title, date, amount} = props;
  const [tmpTitle, setTmpTitle] = useState(title)
  console.log(`render again`)
  const clickHandler = () => { 
    setTmpTitle('Nabi')
   }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
          <h2>{tmpTitle}</h2>
          <div className="expense-item__price">${amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>Change Name</button>
    </Card>
  );
}

export default ExpenseItem;