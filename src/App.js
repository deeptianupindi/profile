import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/jumbotron';
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/navbar';
import Projects from './Projects.js';
import About from './About.js';
import Profile from './Profile.js';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {heading: "Deepti Anupindi", subheading: "Frontend Developer | Fullstack Engineer | Enthusiast for Creativity"};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Jumbotron>
            <h1 id="heading">{this.state.heading}</h1>
            <p id="banner">
              {this.state.subheading}
            </p>
            <Navbar id="navbar" bg="dark" variant="dark">
              <Nav defaultActiveKey="/">
                <Nav.Item>
                  <Link to="/profile">Profile</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/projects">Projects</Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Jumbotron>
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
