import React from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import "../Styles/styles.css"
import { ORANGE_COLOUR } from "../Constants"
export const CenterStrip = props => {
  return (
    <div style={{ background: ORANGE_COLOUR }}>
      <Container>
        <Row
          style={{
            alignItems: "center",
          }}
        >
          <Col lg={4} md={6} sm={12}>
            <Row
              style={{
                alignItems: "center",
                marginTop: "15px",
              }}
              noGutters="true"
            >
              <Col lg={2} md={2} sm={2} xs={2}>
                <svg
                  class="bi bi-award-fill"
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              </Col>
              <Col lg={10} md={10} sm={10} xs={10}>
                <p
                  id="stripText"
                  style={{
                    lineHeight: "24px",
                  }}
                >
                  #1 reviewed developer by Clutch.co (Michigan, 2018 & 2019)
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Row
              style={{
                marginTop: "15px",
                alignItems: "center",
              }}
              noGutters="true"
            >
              <Col lg={2} md={2} sm={2} xs={2}>
                <svg
                  class="bi bi-briefcase-fill"
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                  />
                </svg>
              </Col>
              <Col lg={10} md={10} sm={10} xs={10}>
                <p id="stripText">
                  $20 million in funds​ raised by Shrine clients​
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Row
              style={{
                marginTop: "15px",
              }}
              noGutters="true"
            >
              <Col lg={2} md={2} sm={2} xs={2}>
                <svg
                  class="bi bi-handbag-fill"
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2z" />
                  <path d="M3.405 5a1.5 1.5 0 0 0-1.493 1.35L1 13.252A2.5 2.5 0 0 0 3.488 16h9.024A2.5 2.5 0 0 0 15 13.251l-.912-6.9A1.5 1.5 0 0 0 12.595 5H11v2.5a.5.5 0 1 1-1 0V5H6v2.5a.5.5 0 0 1-1 0V5H3.405z" />
                </svg>
              </Col>
              <Col lg={10} md={10} sm={10} xs={10}>
                <p id="stripText">1 awesome team ready to deliver​</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
