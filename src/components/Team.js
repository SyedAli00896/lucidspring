import React from "react"
import { Col, Image } from "react-bootstrap"
import "../Styles/aboutStyles.css"

export const Team = props => {
  return (
    <Col lg={6} md={6} sm={12} xs={12}>
      <div className="text-center">
        <div className="teamImageContainer">
          <Image
            {...props}
            className="d-block teamImage"
            height="100%"
            // width="100%"
          />
        </div>
        <div>
          <h2 id="textThreeLight">{props.name}</h2>
          <h2 id="textTwoLight">{props.designation}</h2>
          <h2 id="textOneLight">{props.introduction}</h2>
        </div>
      </div>
    </Col>
  )
}
