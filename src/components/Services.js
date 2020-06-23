import React from "react"
import { Col } from "react-bootstrap"
import "../Styles/styles.css"
export const Services = props => {
  return (
    <Col lg={4} md={6} sm={6}>
      <div className=" text-center">
        <div
          className="services"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <img {...props} className="serviceImage" height="100" alt="No File" />
        </div>
        <div>
          <h4 id="cardtitle">{props.title}</h4>
          <p id="carddescription">{props.description}</p>
        </div>
      </div>
    </Col>
  )
}
