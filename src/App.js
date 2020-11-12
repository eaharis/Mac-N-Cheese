import logo from './logo_transparent.png';

import './App.css';
import Header from './components/Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import {Component} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "./components/Menu";
import Map from './components/Map';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/menu/:restaurant" component={Menu} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;