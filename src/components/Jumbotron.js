import React, { Component } from "react"
import { Container, Col, Row } from "react-bootstrap"
import "../Styles/styles.css"

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron" style={{ backgroundColor: "#ffe7d1" }}>
        <Container>
          <Row id="rowItems">
            <Col id="colItems" lg={6} md={6} sm={12} xs={12}>
              <h1 id="heading">{this.props.title || "Our Services"}</h1>
              <p>{this.props.description}</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <img
                src={this.props.image}
                width="506"
                height="251"
                alt="Shrine"
              />
            </Col>
          </Row>
        </Container>
      </div>
      // <div class="jumbotron" style={{ backgroundColor: "#ffe7d1" }}>
      //   <div class="row servicesContainer">
      //     <div>
      //       <h1 id="heading">{this.props.title || "Our Services"}</h1>
      //       <p>{this.props.description}</p>
      //     </div>
      //     <div>
      //       <img src={this.props.image} width="406" height="251" alt="Shrine" />
      //     </div>
      //   </div>
      // </div>
    )
  }
}
export default Jumbotron
