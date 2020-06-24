import React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import { Services } from "../components/Services"
import { Newsletter } from "../components/Newsletter"
import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ORANGE_COLOUR } from "../Constants"
import TopContent from "../components/content/TopContent"
const AboutPage = () => (
  <div>
    <SEO title="About" />

    <TopContent
      title="About"
      description="Based in Ferndale, MI in the greater Detroit area, Shrine Development is at the heart of the burgeoning tech scene that is flourishing in the area."
      image={require("../images/about.png")}
    />
    <div style={{ padding: 30 }}></div>
    <Footer />
  </div>
)

export default AboutPage