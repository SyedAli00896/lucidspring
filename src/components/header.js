import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../Styles/styles.css"
import { ORANGE_COLOUR } from "../Constants"
class Header extends Component {
  render() {
    return (
      <>
        <svg
          style={{
            height: 200,
            position: "absolute",
            overflow: "hidden",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={this.props.homePage ? "transparent" : ORANGE_COLOUR}
            fill-opacity="1"
            d="M0,192L120,202.7C240,213,480,235,720,224C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <Navbar
          style={{
            backgroundColor: this.props.homePage
              ? "transparent"
              : ORANGE_COLOUR,
          }}
          collapseOnSelect
          expand="lg"
          id="collapse_navbar"
        >
          <div className="container">
            <Navbar.Brand href="/">
              <img
                style={{ marginTop: 10 }}
                src={require("../images/shrine_horizontal_white.png")}
                alt="Shrine"
                height="50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link
                  id={this.props.homePage ? "anchorHome" : "anchor"}
                  href="services"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  id={this.props.homePage ? "anchorHome" : "anchor"}
                  href="/portfolio"
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  id={this.props.homePage ? "anchorHome" : "anchor"}
                  href="/about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  id={this.props.homePage ? "anchorHome" : "anchor"}
                  href="insights"
                >
                  Insights
                </Nav.Link>
                <Nav.Link
                  id={this.props.homePage ? "contactHome" : "contact"}
                  href="#memes"
                >
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
