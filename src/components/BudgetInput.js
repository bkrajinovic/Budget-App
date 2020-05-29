import React from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


function BudgetInput() {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Your budget
          </Form.Label>
          <Col sm={10}>
            <Form.Control className="input" placeholder="Your budget" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default BudgetInput
