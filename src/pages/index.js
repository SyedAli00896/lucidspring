import React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Header from "../components/header"
import Jumbotron from "../components/Jumbotron"
import { Services } from "../components/Services"
import { Newsletter } from "../components/Newsletter"
import SEO from "../components/seo"
import "../Styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ORANGE_COLOUR } from "../Constants"
import TopContent from "../components/content/TopContent"
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

    <TopContent />

    <div style={{ padding: 30 }}></div>
    <SEO title="Home" />
  </div>
)

export default IndexPage
