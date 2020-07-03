import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BudgetInfo from "./components/BudgetInfo"
import Nav from "./components/Nav"
import BudgetInput from "./components/BudgetInput"
import ExpensesInput from "./components/ExpensesInput"
import IncomeInput from "./components/IncomeInput"
import ExpensesTable from "./components/ExpensesTable"
// import Login from "./components/Login"
import axios from "axios"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "./components/login.css"
import Graph from "./components/Graph"
import Pdf from "./PdfLoad"
import { PDFViewer } from "@react-pdf/renderer"
import { Link } from "react-router-dom"

function App() {
  let dataURL

  const canToPng = () => {
    let canvas = document.getElementsByTagName("canvas")

    if (canvas[0] != undefined) {
      dataURL = canvas[0].toDataURL("image/jpeg")
    }
    let png = {
      src: dataURL,
    }
    axios.post("http://localhost:3004/png", png).then((png) => {
      console.log(png)
    })
  }
  const [budget, setBudget] = useState({})

  const [value, setValue] = useState({
    expenses: [],
  })

  useEffect(() => {
    axios.get(`http://localhost:3004/data`).then((response) => {
      setBudget(response.data[0])
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute path="/budget">
          <div className="background">
            <Nav />
            <div className="container" id="Form">
              <div className="BudgetInput">
                <h4 className="text-center"> Budget</h4>
                <BudgetInput />
              </div>
              <div className="container">
                <div className="row">
                  <div id="ExpensesInput" className="col-5">
                    <h4 className="text-center"> Expenses</h4>
                    <ExpensesInput />
                  </div>
                  <div id="IncomeInput" className="col-5">
                    <h4 className="text-center"> Income</h4>
                    <IncomeInput />
                  </div>
                </div>
              </div>
            </div>

            <div className="container my-5" id="Info">
              <h4 className="text-center">Your Budget Info</h4>
              <BudgetInfo value={value} />
              <div className="container my-5">
                <ExpensesTable />
                <Link to="/pdf">
                  <Button
                    onClick={() => canToPng()}
                    variant="outline-light"
                    style={{ background: "gray" }}
                  >
                    PDF VIEW
                  </Button>
                </Link>
                <Graph />
              </div>
            </div>
          </div>
        </PrivateRoute>
        <PrivateRoute path="/pdf">
          {/* tu pdf veličinu mjenjas */}
          <PDFViewer height="1300px" width="1000px">
            <Pdf />
          </PDFViewer>
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedin") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const [user, setUser] = useState({})

  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: "/budget" } }

  let login = () => {
    fakeAuth.authenticate(() => {
      localStorage.setItem("loggedin", true)
      history.replace(from)
    })
  }
  const pass = () => {
    if (input.email === user.email && input.password === user.password) {
      login()
    } else {
      alert("Wrong password or email")
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
          <Form.Label
            style={{ color: "white", fontWeight: 400, fontSize: "18px" }}
          >
            Email address
          </Form.Label>
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
          <Form.Label
            style={{ color: "white", fontWeight: 400, fontSize: "18px" }}
          >
            Password
          </Form.Label>
          <Form.Control
            // type="password"
            name="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="outline-light" onClick={pass}>
          Log In
        </Button>
      </Form>
    </div>
  )
}

export default App
