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
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Jumbotron>
            <h1 id="heading">Oh, hello!</h1>
            <p id="banner">
              Looks like you've landed here, welcome!
            </p>
            <Navbar id="navbar" bg="dark" variant="dark">
              <Nav defaultActiveKey="/home">
                <Nav.Item>
                  <Link to="/about">About</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/projects">Projects</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/profile">Profile</Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Jumbotron>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
