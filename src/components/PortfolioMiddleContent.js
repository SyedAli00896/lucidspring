import React from "react"
import { Row, Col } from "react-bootstrap"

import "../Styles/portfolioStyles.css"

export const PortfolioMiddleContent = props => {
  return (
    <Col
      style={{
        padding: "15px 30px",
      }}
      lg={6}
      md={6}
      sm={12}
      xs={12}
    >
      <Row
        style={{
          backgroundColor: props.backgroundColor || "blue",
        }}
        id="portfolio_card"
      >
        <Col id="portfolio_card_left" lg={6} md={6} sm={6} xs={6}>
          <h1 id="pfcardtitle">PocketNest</h1>
          <h2 id="pfcarddescription">
            {props.description ||
              "Financial planning mobile apps for millenials"}
          </h2>
          {/* </div> */}
        </Col>
        <Col id="portfolio_card_right" lg={6} md={6} sm={6} xs={6}>
          <img
            // {...props}
            src={props.src}
            className="portfolioImage"
            width="100%"
            alt="No File"
          />
        </Col>
      </Row>
    </Col>
  )
}
