import logo from './logo_transparent.png';

import './App.css';
import Header from './components/Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
