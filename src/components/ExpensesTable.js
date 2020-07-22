import React, { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "../App.css"

function ExpensesTable() {
  const [value, setValue] = useState([])

  let x = JSON.parse(localStorage.getItem("curr"))[0]
  x = x.email

  useEffect(() => {
    axios.get(`http://localhost:3004/${x}`).then((response) => {
      setValue(response.data)
    })
  }, [])

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3004/${x}/${e}`)
      .then((res) => console.log(res.data))
    window.location.reload()
  }

  return (
    <Table bordered hover size="sm">
      <thead style={{ backgroundColor: "gray", color: "white" }}>
        <tr>
          <th>Incomes/Expenses</th>
          <th>Amount</th>
          <th>Delete</th>
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
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(expense.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
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
