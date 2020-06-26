import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap"

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
            <Col lg={6} md={6} sm={6} xs={6}>
              <ListGroup.Item id="aboutRadio" onClick={() => this.toggle(1)}>
                Who we are
              </ListGroup.Item>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <ListGroup.Item id="aboutRadio" onClick={() => this.toggle(2)}>
                Our Process
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
        {this.state.active === 1 ? (
          <div>
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
          <Container>
            <div id="paddingVertical"></div>
            <Col lg="8" style={{ margin: "auto" }}>
              <div class="text-center">
                <h1 id="headingOne">What makes us shine</h1>
                <h2 id="textTwoLight">
                  Hint: It’s more than just our “can do” attitude
                </h2>
                <h2 id="textOneLight">
                  We are not in the software business. We are in the business of
                  serving those who are trying to help the world. One of the
                  core values at Shrine is integrity and honesty – we believe in
                  open and continuous communication with clients.
                </h2>
                <h2 id="textOneLight">
                  Every decision we make must put our clients in a better spot
                  to win in the marketplace. Here at Shrine we believe in
                  transparency and accountability – if it doesn’t serve the
                  client, we won’t do it.
                </h2>
                <Col lg="4" style={{ margin: "auto", height: "100%" }}>
                  <Image
                    src={require("../images/ourprocess.png")}
                    className="d-block "
                  />
                </Col>

                <h1 id="headingOne">Shrine philosophy</h1>
                <h2 id="textOneLight">
                  Our thoughts on software and software development and what is
                  necessary for successful projects. What makes Shrine different
                  and inherently unique is the level of care and commitment we
                  bring to each client.
                </h2>
                <h2 id="textOneLight">
                  Although highly skilled and technically competent we can’t
                  necessarily differentiate ourselves in the market on those
                  attributes alone. We can on our experience, or dedication, and
                  the “human” element. Some of the ethos we operate by include:
                </h2>
              </div>
            </Col>
            <div id="paddingVertical"></div>
            <Row id="justifiedAlignment">
              <Col lg={6} md={6} sm={12} xs={12}>
                <h1 id="textThreeLight">Partnership Mentality</h1>
                <h2 id="textOneLight">
                  Long term vision with short term action plan. We don’t want to
                  be one-off developer but a long term partner in our client’s
                  growth and success.
                </h2>
                <h1 id="textThreeLight">Speed</h1>
                <h2 id="textOneLight">
                  It is in everyone’s best interest. Faster to market to
                  capitalize on opportunities and keeps project momentum and
                  likelihood of success higher. Open communication and
                  transparency – everyone is on the same page at all times. From
                  initial contact by sales rep to launch we are open and clear
                  about expectations, the requirements and responsibilities of
                  all parties, and the progress and challenges faced to make
                  sure the client’s budget and timeline are kept.
                </h2>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <h1 id="textThreeLight">Build it as if it were our own</h1>
                <h2 id="textOneLight">
                  Utilize existing tech when possible to keep speed up and costs
                  down. Don’t just build to build but understand the purpose and
                  meaning behind the functionality and when necessary consult
                  with the client and make recommendations for or against
                  certain features.
                </h2>
                <h1 id="textThreeLight">Commitment to process</h1>
                <h2 id="textOneLight">
                  Fail to plan and you plan to fail. Up front-heavy research and
                  fact-finding discovery phase for clear architecture map &
                  design layout avoid pitfalls of software projects.
                </h2>
              </Col>
            </Row>
            <div id="paddingVertical"></div>
            <Col lg="8" style={{ margin: "auto" }}>
              <div class="text-center">
                <h1 id="headingOne">Process overview</h1>
                <h2 id="textOneLight">
                  High level break down of development process phases. Don’t
                  need to go into super detail as the prospect isn’t going to
                  necessarily care about the details as much as they know we
                  know what we are doing
                </h2>
              </div>
            </Col>
          </Container>
        )}
        <div style={{ padding: 30 }}></div>
        <Footer />
      </div>
    )
  }
}
export default AboutPage
