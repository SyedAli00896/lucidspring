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
            <Col lg={6} md={6} sm={4} xs={4}>
              <div
                style={{ maxWidth: `300px`, height: "100%", margin: "auto" }}
              >
                <Image
                  src={require("../images/plain_sight_tile.png")}
                  width="100%"
                  height="100%"
                  alt="No File"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={8} xs={8}>
              <div
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p id="pfcardtitle">
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
            background: "#993cfe",
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Row id="rowItems">
            <Col lg={6} md={6} sm={4} xs={4}>
              <div
                style={{ maxWidth: `300px`, height: "100%", margin: "auto" }}
              >
                <Image
                  src={require("../images/passagex_tile.png")}
                  width="100%"
                  height="100%"
                  alt="No File"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={8} xs={8}>
              <div
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p id="pfcardtitle">
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
            <Col lg={6} md={6} sm={4} xs={4}>
              <div
                style={{ maxWidth: `300px`, height: "100%", margin: "auto" }}
              >
                <Image
                  src={require("../images/brightback_tile.png")}
                  width="100%"
                  height="100%"
                  alt="No File"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={8} xs={8}>
              <div
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "30px",
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                <p id="pfcardtitle">
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
