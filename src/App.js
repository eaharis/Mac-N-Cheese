import logo from './logo_transparent.png';

import './App.css';
import Header from './components/Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import {Component} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import menu from "./components/Menu";
import map from './components/Map';

class App extends Component {
  render() {
      return (
        <div className="App">
          <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/menu/pinks" component={menu} />
              <Route exact path="/map" component={map} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }

export default App;
