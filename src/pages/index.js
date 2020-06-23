import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Header from "../components/header"
import { Services } from "../components/Services"
import { Newsletter } from "../components/Newsletter"
import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ORANGE_COLOUR } from "../Constants"
const IndexPage = () => (
  <div>
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
        fill={ORANGE_COLOUR}
        fill-opacity="1"
        d="M0,192L120,202.7C240,213,480,235,720,224C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
    <Header />
    <div
      class="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "#ffe7d1" }}
    >
      <div class="row servicesContainer">
        <div>
          <h1 id="heading">Our Services</h1>
          <p>Custom solutions for businesses that need to move fast.</p>
        </div>
        <div>
          <img
            src={require("../images/services_heroimg@2x.png")}
            width="406"
            height="251"
            alt="Shrine"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <p>
        At Shrine, we go far beyond ordinary software development. We don’t just
        build apps (although we’re great at it). We fix glitches, clean up
        messes, and resolve catastrophes. We’re flexible, nimble, and can adapt
        to any situation.
      </p>
    </div>
    <Container>
      <Row>
        <Services
          backgroundColor="#fcdbe2"
          src={require("../images/mobile_apps.png")}
          title="Mobile Apps"
          description="The simplest and most effective designs and architecture to expand your business"
        />
        <Services
          backgroundColor="#e2f9d8"
          src={require("../images/web_design_dev.png")}
          title="Web Apps"
          description="Functional, effective and practical web apps and websites that communicate your products and services"
        />
        <Services
          backgroundColor="#e7d4ff"
          src={require("../images/software_red.png")}
          title="Software Redevelopment"
          description="Enhance, refine and redesign for effective business use"
        />
      </Row>
    </Container>
    <Newsletter />
    <div style={{ padding: 30 }}></div>
    <SEO title="Home" />
  </div>
)

export default IndexPage
