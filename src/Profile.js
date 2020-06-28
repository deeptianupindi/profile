import React from 'react';
import Accordion from 'react-bootstrap/accordion';
import Card from 'react-bootstrap/card';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import Tab from 'react-bootstrap/tab';
import Badge from 'react-bootstrap/badge';
import ListGroup from 'react-bootstrap/listgroup';
import Carousel from 'react-bootstrap/carousel';
import './App.css';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <h3>Work experience as a Software Engineer</h3>
        <br></br>
        <Accordion id="profile-accordion">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Row>
                <Col id="sfly">
                  <br />
                  <i className="location">Tempe, Arizona</i>
                </Col>
                <Col>
                  <h4>Senior Software Engineer</h4>
                  <i>September 2014 - January 2020</i>
                </Col>
                <Col>
                  <Badge variant="primary">ReactJS</Badge>
                  <Badge variant="dark">AngularJS</Badge>
                  <Badge variant="success">NodeJS</Badge>
                  <Badge variant="danger">Swift</Badge>
                  <Badge variant="warning">Xcode</Badge>
                  <Badge variant="info">CSS</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="warning">Scala</Badge>
                  <Badge variant="dark">SQL</Badge>
                  <Badge variant="success">Jenkins</Badge>
                  <Badge variant="danger">Kubernetes</Badge>
                  <Badge variant="warning">JIRA</Badge>
                  <Badge variant="primary">Selenium</Badge>
                  <Badge variant="info">Bootstrap</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="warning">PagerDuty</Badge>
                  <Badge variant="danger">HockeyApp</Badge>
                  <Badge variant="success">Jasmine</Badge>
                  <Badge variant="info">Karma</Badge>
                  <Badge variant="warning">Redis</Badge>
                  <Badge variant="primary">Sumologic</Badge>
                  <Badge variant="info">Grafana</Badge>
                  <Badge variant="secondary">Splunk</Badge>
                  <Badge variant="primary">E-commerce</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <h3 className="project-header">Projects worked at Shutterfly</h3>
                <Carousel interval="50000">
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Photosbooks, Calendars & Prints apps</h3>
                      <ul className="project-listgroup">
                        <li>Worked on Photobooks & Calendars products using AngularJS frontend and NodeJS backend platform as a service</li>
                        <li>Developed and tested Prints webapp using Bootstrap components and Javascript</li>
                        <li>Worked closely with external stakeholders/developers and internal product team to develop the Make-my-book webapp that lets users upload photos for third-party designers to create their photobooks</li>
                        <li>Unit tested using Jasmine tests</li>
                        <li>Manual, automation and performance tests for end-end product with post-order print testing</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Universal Text Editor</h3>
                      <ul className="project-listgroup">
                        <li>Worked on a ReactJS reusable integratable text-editor widget that allows users to customize text font, size, alignment and placement</li>
                        <li>Developed as a standalone app that was consumed by different teams/projects across Shutterfly via npm installation</li>
                        <li>Configurable params like enabling/disabling customizable components as needed for each product in Shutterfly</li>
                        <li>CI/CD using Jenkins</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>MacOS Photos Extension for Shutterfly</h3>
                      <ul className="project-listgroup">
                        <li>Developed Shutterfly photobooks & prints extension with Swift 4 on MacOS Mojave</li>
                        <li>Worked with HockeyApp to upload versions of the extension for distribution & testing</li>
                        <li>Wrote and tested the extension on Xcode 10</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Cards, Stationary, Photogifts & Home-decor apps</h3>
                      <ul className="project-listgroup">
                        <li>Worked on Photogifts products that include Cards, Stationary, homedecor, gifts etc originally using Backbone and later with ReactJS</li>
                        <li>Deployed code to pre-prod and production environments using Canary builds</li>
                        <li>Regularly worked with A/B testing team to push new features out to production for user testing</li>
                        <li>Experience working within remote teams across timezones</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Product Information & Store pages</h3>
                      <ul className="project-listgroup">
                        <li>Developed in ReactJS, the product Information and store catalog pages that showcase all shutterfly products to users</li>
                        <li>Worked with Kubernetes to scale-up, scale-down product information service pods based on performance test results written in Scala</li>
                        <li>Detailed Github and Wiki documentation and runbooks for these backend services and frontend applications</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Production Support</h3>
                      <ul className="project-listgroup">
                        <li>Deployed production code for Photobooks and Cards projects on a biweekly basis, taking full charge to work with quality engineers, product managers and post-deployment monitoring</li>
                        <li>Experience with A/B testing and Canary builds</li>
                        <li>Assigned primary on-call rotation for all projects mentioned above, therefore familiar with PagerDuty app</li>
                        <li>Experience with Sumologic, Grafana and Splunk to create or extract logs to debug crashes & service errors</li>
                        <li>Participation in war-rooms to monitor and diffuse holiday season surges & errors</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <Row>
                <Col id="usair">
                  <br />
                  <i className="location">Phoenix, Arizona</i>
                </Col>
                <Col>
                  <h4>Automation Engineer in Software Quality</h4>
                  <i>August 2011 - September 2014</i>
                </Col>
                <Col>
                  <Badge variant="primary">C#</Badge>
                  <Badge variant="dark">Webservices</Badge>
                  <Badge variant="success">GroovyScript</Badge>
                  <Badge variant="warning">Test Automation</Badge>
                  <Badge variant="info">soapUI</Badge>
                  <Badge variant="danger">Mainframes</Badge>
                  <Badge variant="primary">Airline Industry</Badge>
                  <Badge variant="info">Oracle SQL</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h3 className="project-header">Projects worked at US Airways(now American Airlines)</h3>
                <Carousel interval="50000" indicators='false'>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Choice Seats Testing and Automation</h3>
                      <ul className="project-listgroup">
                        <li>Developing automated tests in C# with Visual Studio, Team Foundations Server and integration with Microsoft Test Manager for pricing, seat selection, purchasing and refunds webservices and web applications</li>
                        <li>Working with TFS build server to queue automation code builds for regression testing and push feature builds to various environments</li>
                        <li>Developing automated tests using GroovyScript in Soapui for webservices</li>
                        <li>Daily interactions/communication across various departments with developers, business analysts, project managers, business partners and internal&external stakeholders</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Airline Reservation Mainframe</h3>
                      <ul className="project-listgroup">
                        <li>Navigating airline reservation mainframe systems for testing and test data setup</li>
                        <li>Working with databases and airline reservation mainframes for data storage and validations for end-end webservice transactions</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Production Support</h3>
                      <ul className="project-listgroup">
                        <li>Supporting automated & manual testing for validating Choice Seats production deployments</li>
                        <li>Testing webservices that were onboarded to use Datapower Appliance leading upto and post deployment</li>
                        <li>Running full weekly regressions to cover end-to-end usecases for recently released code</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <Row>
                <Col id="ics">
                  <br />
                  <i className="location">Rockville, Maryland</i>
                </Col>
                <Col>
                  <h4>Software Engineer</h4>
                  <i>February 2010 - August 2011</i>
                </Col>
                <Col>
                  <Badge variant="primary">C#</Badge>
                  <Badge variant="dark">PHP</Badge>
                  <Badge variant="success">Webservices</Badge>
                  <Badge variant="info">VBScript</Badge>
                  <Badge variant="danger">soapUI</Badge>
                  <Badge variant="warning">Test Automation</Badge>
                  <Badge variant="primary">Telecom Industry</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <h3 className="project-header">Projects worked at Infinite Computer Solutions</h3>
                <Carousel interval="50000">
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Verizon Business Consumer Procurement System</h3>
                      <ul className="project-listgroup">
                        <li>Webservices testing with SoapUI and UI testing internal tools for consumer product procurement system at Verizon Business</li>
                        <li>System testing for the whole product mentioned above to ensure accuracy of end-end flow</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Customer Data Content Comparison App</h3>
                      <ul className="project-listgroup">
                        <li>Developed a windows application in C# for content comparison used within Verizon Business</li>
                        <li>Worked on tool for validating uniformity of customer data generated by different internal groups</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <Row>
                <Col id="mphs">
                  <br />
                  <i className="location">Bangalore, India</i>
                </Col>
                <Col>
                  <h4>Software Engineer</h4>
                  <i>July 2006 - December 2007</i>
                </Col>
                <Col>
                  <Badge variant="primary">VBScript</Badge>
                  <Badge variant="dark">Java</Badge>
                  <Badge variant="success">Webservices</Badge>
                  <Badge variant="warning">Mainframes</Badge>
                  <Badge variant="info">Html</Badge>
                  <Badge variant="danger">CSS</Badge>
                  <Badge variant="dark">MS-SQL</Badge>
                  <Badge variant="light">Oracle SQL</Badge>
                  <Badge variant="warning">Test Automation</Badge>
                  <Badge variant="info">Quick Test Professional</Badge>
                  <Badge variant="success">HP Quality Center</Badge>
                  <Badge variant="dark">JIRA</Badge>
                  <Badge variant="primary">Banking Industry</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <h3 className="project-header">Projects worked at MphasiS(now HP)</h3>
                <Carousel interval="50000">
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Chase Creditcard and Fraud protection webapps</h3>
                      <ul className="project-listgroup">
                        <li>Functional testing, manual test cases and automation test scripts using VBScript for banking & credit-card web applications</li>
                        <li>HP Quality Center, Quick Test Profressional for manual test execution and to develop automated tests</li>
                        <li>Worked with bank mainframes for data storage and application data verification, worked with Oracle for data retrieval, insertion and manipulation</li>
                        <li>Mentored new employees</li>
                        <li>Liason between various teams to accomplish end-end of the SDLC</li>
                      </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="sfly-project">
                    <Carousel.Caption>
                      <h3>Employee Training Feedback Portal</h3>
                        <ul className="project-listgroup">
                          <li>Developed a web application for Employee Training Feedback which was used to collect, consolidate and display feedback data from internal company training sessions</li>
                          <li>Valuable experience working through the entire SDLC - collection of requirements, creation of development plan, implementing features with Java, finding defects and creating project documentation</li>
                        </ul>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}


export default Profile;
