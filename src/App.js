import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BudgetInfo from "./components/BudgetInfo"
import Nav from "./components/Nav"
import BudgetInput from "./components/BudgetInput"
import ExpensesInput from "./components/ExpensesInput"
import IncomeInput from "./components/IncomeInput"
import ExpensesTable from "./components/ExpensesTable"
import { ExpensesContext } from "./store"

function App() {
  const [budget, setBudget] = useState({
    budget: 10000,
  })

  const [value, setValue] = useState({
    expenses: [
      { id: 1, title: "Car insurance", amount: 1000 },
      { id: 2, title: "Income", amount: 900 },
      { id: 3, title: "School Trip", amount: 400 },
    ],
  
  })

  const { expenses } = value

  return (
    <div className="background">
      <Nav />
      <ExpensesContext.Provider
        value={{ value, setValue, budget, setBudget, expenses }}
      >
        <div className="container" id="Form">
          <div className="BudgetInput">
            <h4 className="text-center"> Budget</h4>
            <BudgetInput />
          </div>
          <div class="container">
            <div class="row">
              <div id="ExpensesInput" className='col-5'>
                <h4 className="text-center"> Expenses</h4>
                <ExpensesInput />
              </div>
            <div id="IncomeInput" className='col-5'>
              <h4 className="text-center"> Income</h4>
              <IncomeInput />
            </div>
            </div>
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
