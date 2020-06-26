import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

import { Footer, Team } from "../components"
import SEO from "../components/seo"
import "../Styles/styles.css"
import "../Styles/aboutStyles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TopContent from "../components/content/TopContent"

class AboutPage extends React.Component {
  state = {
    active: 1,
  }

  toggle = val => {
    this.setState({ active: val })
  }
  render() {
    return (
      <div>
        <SEO title="About" />
        <TopContent
          title="About"
          description="Based in Ferndale, MI in the greater Detroit area, Shrine Development is at the heart of the burgeoning tech scene that is flourishing in the area."
          image={require("../images/about.png")}
        />
        <Container>
          <Row>
            <Col lg={6} md={6} sm="auto">
              <ListGroup.Item id="aboutRadio" onClick={() => this.toggle(1)}>
                Who we are
              </ListGroup.Item>
            </Col>
            <Col lg={6} md={6} sm="auto">
              <ListGroup.Item id="aboutRadio" onClick={() => this.toggle(2)}>
                Our Process
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
        {this.state.active === 1 ? (
          <div>
            {" "}
            <h2
              id="cebterTitle"
              className="text-center"
              style={{ fontSize: "22px", lineHeight: "36px" }}
            >
              Shrine Development partners with
              <span style={{ fontSize: "26px", fontWeight: "700" }}>
                {` entrepreneurs, start-ups, and established businesses `}
              </span>
              to build world-class mobile and web-based applications and
              business solutions.
            </h2>
            <Container>
              <Row id="centeredAlignment">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div id="divStyle">
                    <img
                      src={require("../images/contact.png")}
                      height="351"
                      alt="Shrine"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div id="divStyle">
                    <h2 id="headingTwo">Our mission</h2>
                    <h4 id="textOneLight">
                      From its inception, the mission of the Shrine team has
                      been to help its clients utilize and leverage technology
                      to dominate and disrupt their respective markets.
                    </h4>
                    <br />
                    <h4 id="textOneLight">
                      The company ethos that Shrine’s success is based upon
                      helping its clients achieve success has been a driving
                      factor in it experiencing significant growth since its
                      initial launch in 2017. They were tired of simply creating
                      software with no end-user insight, so they decided to
                      start their own company.
                    </h4>
                  </div>
                </Col>
              </Row>
              <div style={{ padding: "30px" }}></div>
              <h2 id="headingTwo" className="text-center">
                Meet our team
              </h2>
              <Container>
                <Row>
                  <Team
                    backgroundColor="#fcdbe2"
                    src={require("../images/doug.png")}
                    name="Doug Drouillard"
                    designation="CEO + Co-founder"
                    introduction="Doug is an experienced web, mobile, and app developer who takes pride in helping companies reach success. He likes to bridge the gap between the tech and business world."
                  />
                  <Team
                    src={require("../images/doug.png")}
                    name="Malissa Drouillard"
                    designation="Co-founder + Head of Development"
                    introduction="Malissa is a seasoned full-stack web-developer with a knack for problem-solving and new technology. Malissa has lived and worked in the start-up world in Silicon Valley and is a Detroit native."
                  />
                  <Team
                    src={require("../images/IMG_2387-1536x1536.jpg")}
                    name="Darryn Patterson"
                    designation="Software Engineer + Manager"
                  />
                  <Team
                    src={require("../images/IMG_2387-1536x1536.jpg")}
                    name="Chad Grimaldi"
                    designation="Software Engineer"
                  />
                  <Team
                    src={require("../images/IMG_2387-1536x1536.jpg")}
                    name="Jonathan D’Orleans"
                    designation="Software Engineer"
                  />
                  <Team
                    src={require("../images/IMG_2387-1536x1536.jpg")}
                    name="Sonja Snoeyink"
                    designation="Designer"
                  />
                </Row>
              </Container>
              <div style={{ padding: "30px" }}></div>
              <Row id="centeredAlignment">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div id="divStyle">
                    <h2 id="headingTwo">Careers</h2>
                    <h4 id="textOneLight">
                      We have a tremendous opportunity to significantly grow the
                      business and need entrepreneurial minded team members who
                      want to do what it takes to deliver results and capitalize
                      on the opportunity at hand.
                    </h4>
                    <br />
                    <h4 id="textOneLight">
                      If you are looking for a 9-5 position where everything is
                      laid out for you, Shrine is most likely not a fit. If you
                      are looking for a new challenge to lead your own team,
                      step into a company, leave your mark, make a positive
                      impact on your colleagues and look forward to continuous
                      growth, we would love to connect with you.
                    </h4>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div id="divStyle">
                    <img
                      src={require("../images/about_careers.png")}
                      height="351"
                      alt="Shrine"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <h1>hello</h1>
        )}
        <div style={{ padding: 30 }}></div>
        <Footer />
      </div>
    )
  }
}
export default AboutPage
