import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../Styles/styles.css"
import { ORANGE_COLOUR } from "../Constants"
class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          style={{
            backgroundColor: ORANGE_COLOUR,
          }}
          collapseOnSelect
          expand="lg"
        >
          <div className="container">
            <Navbar.Brand href="#home">
              <img
                style={{ marginTop: 10 }}
                src={require("../images/shrine_horizontal_white.png")}
                alt="Shrine"
                height="50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link id="anchor" href="#deets">
                  Services
                </Nav.Link>
                <Nav.Link id="anchor" href="#deets">
                  Portfolio
                </Nav.Link>
                <Nav.Link id="anchor" href="#deets">
                  About
                </Nav.Link>
                <Nav.Link id="anchor" href="#deets">
                  Insights
                </Nav.Link>
                <Nav.Link id="contact" eventKey={2} href="#memes">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    )
  }
}

export default Header
