import React, { useContext, useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
// import { ExpensesContext } from "../store"
import axios from "axios"

function BudgetInput() {
  // const { setBudget } = useContext(ExpensesContext)
  const [input, setInput] = useState({
    amount: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput({ amount: "" })
    axios.post("http://localhost:3004/budget", input).then((data) => {
      console.log(data)
      window.location.reload()
    })
  }

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Your budget
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className="input"
              type="number"
              placeholder="Your budget"
              value={input.amount}
              onChange={(e) =>
                setInput({ ...input, amount: Number(e.target.value) })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!input.amount}
            >
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default BudgetInput
