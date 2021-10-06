import React, { Component } from 'react';//import react
import './App.css';
import Header from './components/header';//importing header
import Footer from './components/footer';//importing footer
import Content from './components/content';//importing content
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; //imports for the navbar
import Container from 'react-bootstrap/Container';//and below
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //import for the routing

class App extends Component {
  //everything needed to display goes into render
  render() {
    return (
      //wrap nav bar in route tag
      <Router> 
      <div className="App">
        {/* //nav bar code from website, to click through pages */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      {/* start of the switch statement to switch between pages on nav bar */}
      <Switch> 
        <Route path="/" exact><Content></Content></Route>
        <Route path="/header"><Header></Header></Route>
        <Route path="/footer"><Footer></Footer></Route>
      </Switch>

      </div>
      </Router>
    );
  }
}

//export for future use
export default App;
