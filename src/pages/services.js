import React from "react"
import { Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import { Services } from "../components/Services"

import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"

import TopContent from "../components/content/TopContent"

const ServicesPage = () => (
  <div>
    <SEO title="Services" />
    <TopContent
      title="Our Services"
      description="Custom solutions for businesses that need to move fast"
      image={require("../images/services_heroimg@2x.png")}
    />

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

    <Footer />
  </div>
)

export default ServicesPage
