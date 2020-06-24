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
const PortfolioPage = () => (
  <div>
    <SEO title="Portfolio" />

    <TopContent
      title="Portfolio"
      description="Some of the cool projects we've worked on..."
      image={require("../images/portfolio_hero_img.png")}
    />
    <div style={{ padding: 30 }}></div>
    <Footer />
  </div>
)

export default PortfolioPage
