import React, { useState, useEffect, useContext } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"

// import { ExpensesContext } from "../store"

function ExpensesTable() {
  // const { value } = useContext(ExpensesContext)

  const [value, setValue] = useState([])

  // useEffect(() => {
  //   axios.get(`http://localhost:3004/data`).then((res) => {
  //     setValue(res.data)
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`http://localhost:3004/data`).then((response) => {
      setValue(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Table bordered hover size="sm">
      <thead style={{ backgroundColor: "gray", color: "white" }}>
        <tr>
          <th>Expenses</th>
          <th>Amount</th>
        </tr>
      </thead>
      {value.length > 0 ? (
        value.map((expense, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{expense.title}</td>
                <td
                  style={
                    expense.amount < 0 ? { color: "red" } : { color: "green" }
                  }
                >
                  {expense.amount < 0
                    ? -Math.abs(expense.amount)
                    : expense.amount}
                  HRK
                </td>
              </tr>
            </tbody>
          )
        })
      ) : (
        <tbody>
          <tr>
            <td>No Listed Expenses</td>
          </tr>
        </tbody>
      )}
    </Table>
  )
}

export default ExpensesTable
