import React from "react";

import "./ExpensesFilter.css";
import Card from "../UI/Card";

const ExpensesFilter = (props) => {
  const selectionChangeHandler = (e) => {
    props.onFilteredYear(e.target.value);
  };

  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectionChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
