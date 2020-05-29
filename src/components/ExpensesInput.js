import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

function ExpensesInput() {
  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Expenses
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="input" placeholder="Car insurance" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Amount
        </Form.Label>
        <Col sm={10}>
          <Form.Control className="input" placeholder="200" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </div>
  )
}

export default ExpensesInput
