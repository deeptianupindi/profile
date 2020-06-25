import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import './App.css';

class Projects extends React.Component {

  render() {
    return (
      <div className="desc">
        <Container>
          <Row>
            <Col>
              <div className="demo-item">
                <h3>Savor</h3>
                <p>Chrome extension to save recipes from websites into a pre-formatted downloadable file.</p>
                <p><a href="https://github.com/deepictorial/savor">https://github.com/deepictorial/savor</a></p>
                <iframe title="savor" width="275px" height="170px" src="https://www.youtube.com/embed/x1rrirFsmgc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
            <Col>
              <div className="demo-item">
                <h3>Count Me In!</h3>
                <p>Desktop & Mobile-web app to create personalized event countdowns.</p>
                <p><a href="https://github.com/deepictorial/count-me-in">https://github.com/deepictorial/count-me-in</a></p>
                <iframe title="count" width="275px" height="170px" src="https://www.youtube.com/embed/B4VIgK9ylAk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
