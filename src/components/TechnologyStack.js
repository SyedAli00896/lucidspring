import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "../Styles/styles.css"
export const TechnologyStack = props => {
  return (
    <Container>
      <Row lg="12" md="12" sm="6" style={{ justifyContent: "center" }}>
        <Col className="text-center" md="auto" sm="auto" lg="auto">
          <Image
            src={require("../images/TechnologyStacks/React.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>React</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/typescript.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>typescript</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/node.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>node</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/graphql.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>graphql</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/rails.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>rails</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/aws.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>aws</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/lambda.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>lambda</p>
        </Col>
        <Col className="text-center" lg="auto" md="auto" sm="auto">
          <Image
            src={require("../images/TechnologyStacks/postgre.png")}
            thumbnail
            style={{
              height: "100px",
              width: "100px",
              border: "0px solid white",
            }}
          />
          <p style={{ lineHeight: "8px" }}>postgre</p>
        </Col>
      </Row>
    </Container>
  )
}
