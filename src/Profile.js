import React from 'react';
import Container from 'react-bootstrap/container';
import Accordion from 'react-bootstrap/accordion';
import Card from 'react-bootstrap/card';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import Tab from 'react-bootstrap/tab';
import Badge from 'react-bootstrap/badge';
import ListGroup from 'react-bootstrap/listgroup';

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
                  <Badge variant="dark">SQL</Badge>
                  <Badge variant="success">Jenkins</Badge>
                  <Badge variant="danger">Kubernetes</Badge>
                  <Badge variant="warning">JIRA</Badge>
                  <Badge variant="primary">Selenium</Badge>
                  <Badge variant="info">Bootstrap</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="primary">E-commerce</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Tab.Container id="list-group-sfly" defaultActiveKey="#link1-sfly">
                  <h3>Projects worked at Shutterfly</h3>
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1-sfly">
                          Photosbooks, Calendars & Prints apps
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2-sfly">
                          Universal Text Editor
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3-sfly">
                          MacOS Photos Extension for Shutterfly
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4-sfly">
                          Cards, Stationary, Photogifts & Home-decor apps
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1-sfly">
                          write something about books project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2-sfly">
                          another thing here about ute project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3-sfly">
                          about macos sfly app
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4-sfly">
                          about cs, pghd
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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
                <Tab.Container id="list-group-usair" defaultActiveKey="#link1-usair">
                  <h3>Projects worked at US Airways (American Airlines)</h3>
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1-usair">
                          Choice Seats Testing and Automation
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2-usair">
                          Airline Reservation Mainframe
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3-usair">
                          Production Support
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1-usair">
                          write something about 1st project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2-usair">
                          another thing here about 2nd project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3-usair">
                          another thing here about 2nd project
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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
                  <h4>Software Developer</h4>
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
                <Tab.Container id="list-group-ics" defaultActiveKey="#link1-ics">
                  <h3>Projects worked at Infinite Computer Solutions</h3>
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1-ics">
                          Verizon Business Consumer Procurement System
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2-ics">
                          Customer Data Content Comparison App
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1-ics">
                          write something about 1st project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2-ics">
                          another thing here about 2nd project
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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
                  <h4>Software Developer</h4>
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
                  <Badge variant="primary">Banking Industry</Badge>
                </Col>
              </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <Tab.Container id="list-group-mphs" defaultActiveKey="#link1-mphs">
                  <h3>Projects worked at MphasiS (a HP company)</h3>
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1-mphs">
                          Employee Training Feedback Portal
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2-mphs">
                          Chase Creditcard and Fraud protection webapps
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1-mphs">
                          write something about books project
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2-mphs">
                          another thing here about ute project
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}


export default Profile;
