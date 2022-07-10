import React from "react";
import './ExpensesList.css';

function ExpenseList({list}) {
    if (list.length === 0) {
        return  <h2 className="expenses-list__fallback"> No Expenses Found.</h2>;
    }

    return (
        <div className="expenses-list">
            {list}
        </div>
        )

}

export default ExpenseList;