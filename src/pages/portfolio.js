import React from "react"
import { Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import { PortfolioMiddleContent } from "../components/PortfolioMiddleContent"

import SEO from "../components/seo"

import TopContent from "../components/content/TopContent"
const PortfolioPage = () => (
  <div>
    <SEO title="Portfolio" />
    <TopContent
      title="Portfolio"
      description="Some of the cool projects we've worked on..."
      image={require("../images/portfolio_hero_img.png")}
    />
    <Container>
      <Row>
        <PortfolioMiddleContent
          backgroundColor="#006cfc"
          src={require("../images/web_design_dev.png")}
        />
        <PortfolioMiddleContent
          backgroundColor="#88d5e7"
          src={require("../images/web_design_dev.png")}
        />
        <PortfolioMiddleContent
          backgroundColor="#25bebc"
          src={require("../images/web_design_dev.png")}
        />
        <PortfolioMiddleContent
          backgroundColor="#993cfe"
          src={require("../images/web_design_dev.png")}
        />
      </Row>
    </Container>
    <div style={{ padding: 30 }}></div>
    <Footer />
  </div>
)

export default PortfolioPage
