import './App.css';
import Header from './components/Header/Header'
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Menu from "./components/Menu/Menu";
import Map from './components/Map/Map';
import Home from './components/Home/Home';
import NewMap from './components/NewMap/NewMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/:restaurant/menu" component={Menu} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/devmap" component={NewMap} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;