import React, { Component } from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "../Styles/footerStyles.css"
import { SocialIcons } from "./socialIcons"

export const Footer = props => {
  return (
    <div class="footer" style={{ paddingTop: 30, paddingBottom: 10 }}>
      <Container>
        <Row>
          <Col class="col col1" lg={3} md={3} sm={4} xs={12}>
            <h1 id="sectionName">What we do</h1>
            <Link id="routes" to="/">
              <a> Home</a>
            </Link>
            <Link id="routes" to="/">
              <a> Services</a>
            </Link>
            <Link id="routes" to="/">
              <a> Portfolio</a>
            </Link>
          </Col>
          <Col class="col" lg={3} md={3} sm={4} xs={12}>
            <h1 id="sectionName">Shrine</h1>
            <Link id="routes" to="/">
              <a> About</a>
            </Link>
            <Link id="routes" to="/">
              <a> FAQ</a>
            </Link>
            <Link id="routes" to="/">
              <a> Insights</a>
            </Link>
            <Link id="routes" to="/">
              <a> Careers</a>
            </Link>
          </Col>
          <Col class="col1" lg={3} md={3} sm={4} xs={12}>
            <h1 id="sectionName">More</h1>
            <Link id="routes" to="/">
              <a> Privacy</a>
            </Link>
            <Link id="routes" to="/">
              <a> Reviews on Clutch.co</a>
            </Link>
          </Col>

          <Col class="col" id="social" lg={3} md={3} sm="12" xs={12}>
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
          <div class="clearfix"></div>
        </Row>
      </Container>
    </div>
  )
}
