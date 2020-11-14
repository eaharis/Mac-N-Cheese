import './App.css';
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Promotions from "./components/Promotions/Promotions";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Menu from "./components/Menu/Menu";
import Map from './components/Map/Map';
import Home from './components/Home/Home';
import Restaurant from "./components/Restaurant/Restaurant";
import Stories from "./components/Stories/Stories";
import MeetingScheduler from "./components/MeetingScheduler/MeetingScheduler";
import * as pages from './store/pageNames';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header />
                  <Switch>
                      <Route path={pages.PROFILE} component={Profile} />
                      <Route path={pages.MENU} component={Menu} />
                      <Route exact path={pages.DINEIN} component={MeetingScheduler} />
                      <Route exact path={pages.STORIES} component={Stories} />
                      <Route exact path={pages.BROWSE} component={Map} />
                      <Route exact path={pages.PROMOTIONS} component={Promotions} />
                      <Route path={pages.RESTAURANT} component={Restaurant} />
                      <Route exact path={pages.HOME} component={Home} />
                  </Switch>
          </div>
      );
  }
}

export default App;
