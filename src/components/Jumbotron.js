import React, { Component } from "react"
import { Container, Col, Row, Image } from "react-bootstrap"
import "../Styles/styles.css"

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron" style={{ backgroundColor: "#ffe7d1" }}>
        <Container>
          <Row id="rowItems">
            <Col id="colItems" lg={6} md={6} sm={12} xs={12}>
              <h1 id="headingOne">{this.props.title || "Our Services"}</h1>
              <p>{this.props.description}</p>
            </Col>

            <Col style={{ textAlign: "center" }}>
              <div style={{ height: "400px", margin: "auto" }}>
                <Image
                  src={this.props.image}
                  height="100%"
                  width="100%"
                  alt="Shrine"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Jumbotron
