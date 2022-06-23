/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './ExpensesFilter.css';

function ExpensesFilter({onChangeFilter, selectYear }) {
  const selectYearHandler = (event) => {
    onChangeFilter(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectYearHandler} value={selectYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;