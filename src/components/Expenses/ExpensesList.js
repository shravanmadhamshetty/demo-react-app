import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { useState, useMemo } from "react";
import Pagination from "./Pagination";

let PageSize = 2;

const ExpensesList = (props) => {
  // if (props.items.length === 0) {
  //   return <h2 className="expenses-list__fallback">No items found</h2>;
  // }

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <ul className="expenses-list">
        {currentTableData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ul>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={props.items.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ExpensesList;
