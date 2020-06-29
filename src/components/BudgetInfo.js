import React, { useEffect, useState, useContext } from "react"
import "./styles.css"
import axios from "axios"
import { ExpensesContext } from "../store"

function BudgetInfo() {
  // const { value, budget } = useState(ExpensesContext)

  // const [value, setValue] = useState({
  //   expenses: [],
  // })

  const [value, setValue] = useState({
    expenses: [],
  })
  const [budget, setBudget] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3004/data`).then((response) => {
      setValue(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3004/budget`).then((response) => {
      setBudget(response.data)
    })
  }, [])

  const totalExpenses =
    value.length > 0
      ? value.reduce((acc, curr) => {
          acc -= parseInt(curr.amount)
          return acc
        }, 0)
      : 0

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">Starting Budget</div>
          <div className="card-body">
            <h5 className="text-center card-title" >
             {budget.amount} HRK
            </h5>
          </div>
        </div>
      </div>
     
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">Balance</div>
          <div className="card-body">
            <h5 className="text-center card-title" style={
                    (budget.amount - totalExpenses) < 0 ? { color: "red" } : { color: "green" }
                  }>
              {budget.amount - totalExpenses} HRK
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetInfo
