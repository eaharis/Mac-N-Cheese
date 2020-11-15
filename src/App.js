import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Promotions from "./components/Promotions/Promotions";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Map from "./components/Map/Map";
import Home from "./components/Home/Home";
import Stories from "./components/Stories/Stories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/menu/:restaurant" component={Menu} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/promotions" component={Promotions} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
