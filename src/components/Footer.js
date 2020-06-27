import React, { Component } from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "../Styles/footerStyles.css"
import { SocialIcons } from "./socialIcons"

export const Footer = props => {
  return (
    <Container>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Col id="footerColumn" lg={3} md={3} sm={4} xs={12}>
          <h1 id="sectionName">What we do</h1>
          <Link id="routes" to="/">
            Home
          </Link>
          <Link id="routes" to="/">
            Services
          </Link>
          <Link id="routes" to="/">
            Portfolio
          </Link>
        </Col>
        <Col id="footerColumn" lg={3} md={3} sm={4} xs={12}>
          <h1 id="sectionName">Shrine</h1>
          <Link id="routes" to="/">
            About
          </Link>
          <Link id="routes" to="/">
            FAQ
          </Link>
          <Link id="routes" to="/">
            Insights
          </Link>
          <Link id="routes" to="/">
            Careers
          </Link>
        </Col>
        <Col id="footerColumn" lg={3} md={3} sm={4} xs={12}>
          <h1 id="sectionName">More</h1>
          <Link id="routes" to="/">
            Privacy
          </Link>
          <Link id="routes" to="/">
            Reviews on Clutch.co
          </Link>
        </Col>

        <Col id="social" lg={3} md={3} sm={12} xs={12}>
          <h1 id="sectionName">Get in touch</h1>
          <SocialIcons />
          <div>
            <Button
              id="contact"
              style={{ backgroundColor: "#ff7a00", color: "#ffffff" }}
            >
              Contact
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
