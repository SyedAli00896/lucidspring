import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import "../Styles/styles.css"
export const PortfolioMiddleContent = props => {
  return (
    <Col
      style={{
        padding: "20px",
      }}
      lg={6}
      md={6}
      sm={12}
      xs={12}
    >
      <div
        id="portfolio_col"
        style={{
          backgroundColor: props.backgroundColor || "blue",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 2,

            paddingTop: "30px",
            paddingLeft: "30px",
          }}
        >
          <h1 id="pfcardtitle">PocketNest</h1>
          <h2 id="pfcarddescription">
            {props.description ||
              "Financial planning mobile apps for millenials"}
          </h2>
        </div>
        <div
          style={{
            flex: 3,
            paddingTop: "30px",
          }}
        >
          <img
            {...props}
            className="portfolioImage"
            height="250"
            alt="No File"
          />
        </div>
      </div>
    </Col>
  )
}
