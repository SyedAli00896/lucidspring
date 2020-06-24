import React from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import "../Styles/styles.css"
import { LIGHT_ORANGE_COLOUR } from "../Constants"
export const Newsletter = props => {
  return (
    <div className="newsletterContainer">
      <Row id="newsletterRow">
        <Col lg={6} md={6} sm={12}>
          <div>
            <p id="nlTitle">Get our content in your inbox</p>
            <p id="nlDesciption">
              Receive occasional email updates from Shrine. Don’t worry, we
              don’t like spam either.
            </p>
            <Form>
              <Form.Row>
                <Col sm={6} lg={9} className="my-1">
                  <Form.Label htmlFor="inlineFormInputName" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Email address"
                  />
                </Col>

                <Col sm={6} lg={3} className="my-1">
                  <Button id="submit">Subscribe</Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div id="newsletterImage">
            <img
              src={require("../images/newletter-signup.png")}
              height="280"
              alt="No File"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
