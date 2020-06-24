import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row, Nav } from "react-bootstrap"
import Header from "../components/header"
import Jumbotron from "../components/Jumbotron"
import { Services } from "../components/Services"
import { CenterStrip } from "../components/CenterStrip"
import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ORANGE_COLOUR } from "../Constants"
import TopContent from "../components/content/TopContent"
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

    <div style={{ padding: 30 }}></div>
    <SEO title="Home" />
  </div>
)

export default IndexPage
