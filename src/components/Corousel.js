import React from "react"
import { Container, Carousel, Image, Row, Col } from "react-bootstrap"
import "../Styles/styles.css"
export const Corousel = props => {
  return (
    <Container
      style={{
        overflow: "hidden",
      }}
    >
      <Carousel fade>
        <Carousel.Item
          style={{
            overflow: "visible",
            background: "#88d5e7",
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Row id="rowItems">
            <Col lg={6} md={6} sm={6} xs={6}>
              <Image
                src={require("../images/plain_sight_tile.png")}
                className="d-block w-100"
                style={{
                  height: "100%",
                }}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div
                style={{
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p>
                  I appreciate their focus on communication. They go beyond
                  being a development company, going into a mentorship role.
                </p>
              </div>
            </Col>
          </Row>
          {/* <Carousel.Caption>
            <h3 style={{ color: "black" }}>First slide label</h3>
            <p style={{ color: "black" }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item
          style={{
            overflow: "visible",
            background: "#993cfe",
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Row id="rowItems">
            <Col lg={6} md={6} sm={6} xs={6}>
              <Image
                src={require("../images/passagex_tile.png")}
                className="d-block w-100"
                style={{
                  height: "100%",
                }}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div
                style={{
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p>
                  I appreciate their focus on communication. They go beyond
                  being a development company, going into a mentorship role.
                </p>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item
          style={{
            overflow: "visible",
            background: "#932ce1",
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Row id="rowItems">
            <Col lg={6} md={6} sm={6} xs={6}>
              <Image
                src={require("../images/brightback_tile.png")}
                className="d-block w-100"
                style={{
                  height: "100%",
                }}
              />
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div
                style={{
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p>
                  I appreciate their focus on communication. They go beyond
                  being a development company, going into a mentorship role.
                </p>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
