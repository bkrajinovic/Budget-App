import React from "react"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"

function Nav() {
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
      <Navbar bg="dark justify-content-between" variant="dark">
        <Navbar.Brand>Budget App</Navbar.Brand>
        <Button variant="outline-light" style={{float:'right'}} onClick={logOut}>Log Out</Button>
      </Navbar>

    </>
  )
}

export default Nav
