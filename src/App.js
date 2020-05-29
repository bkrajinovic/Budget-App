import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BudgetInfo from "./components/BudgetInfo"
import Nav from "./components/Nav"
import BudgetInput from "./components/BudgetInput"
import ExpensesInput from "./components/ExpensesInput"
import ExpensesTable from "./components/ExpensesTable"
import { ExpensesContext } from "./store"

function App() {
  const [value, setValue] = useState({
    budget: 10000,
    expenses: [
      { title: "Car insurance", amount: 1000 },
      { title: "Income", amount: 900 },
      { title: "School Trip", amount: 400 },
    ],
  })

  return (
    <div className="background">
      <Nav />
      <ExpensesContext.Provider value={{ value, setValue }}>
        <div className="container" id="Form">
          <div className="BudgetInput">
            <h4 className="text-center"> Budget</h4>
            <BudgetInput />
          </div>
          <div className="ExpensesInput">
            <h4 className="text-center"> Expenses</h4>
            <ExpensesInput />
          </div>
        </div>
        <div className="container my-5" id="Info">
          <h4 className="text-center">Your Budget Info</h4>
          <BudgetInfo />
          <div className="container my-5">
            <ExpensesTable />
          </div>
        </div>
      </ExpensesContext.Provider>
    </div>
  )
}

export default App
