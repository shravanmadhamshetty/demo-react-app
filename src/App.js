import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Paper",
      amount: 2000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 50000,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 15000,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 6523,
      date: new Date(2020, 5, 12),
    },
    {
      id: "e5",
      title: "Laptop",
      amount: 20000,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e6",
      title: "Mobile",
      amount: 50000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e7",
      title: "Cloths",
      amount: 1500,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e8",
      title: "Shoes",
      amount: 6523,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e9",
      title: "Doctor",
      amount: 2054,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e10",
      title: "Bike",
      amount: 58000,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e11",
      title: "Fuel",
      amount: 1900,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e12",
      title: "Vacation",
      amount: 40000,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
