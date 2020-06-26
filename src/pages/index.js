import React from "react"
import { Container, Col, Row, Nav } from "react-bootstrap"

import { Header } from "../components/Header"
import { TechnologyStack } from "../components/TechnologyStack"
import { CenterStrip } from "../components/CenterStrip"
import { Corousel } from "../components/Corousel"
import { Footer } from "../components/Footer"
import { Services } from "../components/Services"

import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <div>
    <Header homePage />
    <Container>
      <Row id="rowItemsHome">
        <Col id="colItemsHome" lg={6} md={6} sm={12} xs={12}>
          <h1 id="headingHome">
            We help startups & businesses
            <br />
            <span
              style={{ color: "#FF7A00", fontSize: "46px", lineHeight: "55px" }}
            >
              dominate their markets
            </span>
            <br />
            by building world-class apps.
          </h1>
          <Nav.Link id="contactHome" href="/">
            Schedule a call
          </Nav.Link>
        </Col>
        <Col style={{ textAlign: "center" }} lg={6} md={6} sm={12} xs={12}>
          <img
            src={require("../images/jump_joy.png")}
            height="351"
            alt="Shrine"
          />
        </Col>
      </Row>
    </Container>
    <CenterStrip />

    <h4 id="cebterTitle">Our Services</h4>

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
    <Container>
      <h4 id="cebterTitle" style={{ fontSize: "26px" }}>
        Shrine Development is proud to be one of the
        <span style={{ fontSize: "30px", fontWeight: "700" }}>
          {` top ranked App Developers in Detroit, Michigan `}
        </span>
        according to Clutch.co’s rankings.
      </h4>
    </Container>
    <Corousel />
    <h4 id="cebterTitle">Technology Stack</h4>
    <TechnologyStack />
    <div style={{ padding: 30 }}></div>
    <Footer />
    <SEO title="Home" />
  </div>
)

export default IndexPage
