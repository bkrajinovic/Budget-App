import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BudgetInfo from "./components/BudgetInfo"
import Nav from "./components/Nav"
import BudgetInput from "./components/BudgetInput"
import ExpensesInput from "./components/ExpensesInput"
import ExpensesTable from "./components/ExpensesTable"

function App() {
  return (
    <div className="background">
      <Nav />
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
    </div>
  )
}

export default App
