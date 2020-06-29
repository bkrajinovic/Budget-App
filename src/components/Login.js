import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./login.css"
import { Link } from "react-router-dom"
import axios from "axios"

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const [user, setUser] = useState({})
  const [check, setCheck] = useState("")

  const pass = () => {
    if (input.email == user.email && input.password == user.password) {
      setCheck("pass")
    } else {
      setCheck("")
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3004/user`).then((response) => {
      setUser(response.data)
    })
  }, [])
  return (
    <div id="login">
      <Form className="col-lg-4" id="form">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          id="img"
        ></img>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            type="email"
            name="email"
            placeholder="Enter email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // type="password"
            name="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button onClick={pass}>Log In</Button>
      </Form>
    </div>
  )
}

export default Login
