import React from "react"
import Table from "react-bootstrap/Table"

function ExpensesTable() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Expenses</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>School Trip</td>
          <td style={{color: "red"}}>-200 HRK</td>
          <td>27-05-2020</td>
        </tr>
        <tr>
          <td>Income</td>
          <td style={{color: "green"}}>+350 HRK</td>
          <td>26-05-2020</td>
        </tr>
        <tr>
          <td>Car insurance</td>
          <td style={{color: "red"}}>-550 HRK</td>
          <td>26-05-2020</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ExpensesTable
