import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Form } from "react-bootstrap"

import { Footer, SocialIcons } from "../components"
import SEO from "../components/seo"
import "../Styles/contactStyles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TopContent from "../components/content/TopContent"
const ContactPage = () => (
  <div>
    <SEO title="Contact" />

    <TopContent
      title="Contact"
      description="Our office is located in Ferndale, MI - north of Detroit. Swing by and say hi anytime!"
      image={require("../images/about.png")}
    />
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h2 id="contactHeading">Get in touch</h2>
          <p>We’d love to hear from you about your project.</p>
          <Form.Control placeholder="Name" />
          <br />
          <Form.Control placeholder="Email" />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h2 id="contactHeading">Contact info</h2>
          <div id="phone-and-email">
            <div style={{ marginRight: "10px" }}>
              <img src="https://svgshare.com/i/5eA.svg" width="25" />
            </div>

            <p>(734) 531-8199</p>
          </div>
          <div id="phone-and-email">
            <div style={{ marginRight: "10px" }}>
              <img src="https://svgshare.com/i/5eA.svg" width="25" />
            </div>
            <p>hello@shrinedev.com</p>
          </div>
          <SocialIcons />
          <img
            src={require("../images/contact.png")}
            height="351"
            alt="Shrine"
          />
        </Col>
      </Row>
    </Container>

    <Footer />
  </div>
)

export default ContactPage
