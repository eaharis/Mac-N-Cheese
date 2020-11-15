
import './App.css';
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Promotions from "./components/Promotions/Promotions";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import MeetingScheduler from './components/MeetingScheduler/MeetingScheduler';
import Menu from "./components/Menu/Menu";
import Map from './components/Map/Map';
import Home from './components/Home/Home';
import NewMap from './components/NewMap/NewMap';
import Restaurant from "./components/Restaurant/Restaurant";
import Stories from "./components/Stories/Stories";
import * as pages from './store/pageNames';
import FontSizeChanger from 'react-font-size-changer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FontSizeChanger
          targets={['body']}
          options={{
            stepSize: 2,
            range: 3
          }}
        />
        <Header />
        <Switch>
          <Route path={pages.PROFILE} component={Profile} />
          <Route path={pages.MENU} component={Menu} />
          <Route exact path={pages.DINEIN} component={MeetingScheduler} />
          <Route exact path={pages.STORIES} component={Stories} />
          <Route exact path={pages.BROWSE} component={Map} />
          <Route exact path={pages.NEWMAP} component={NewMap} />
          <Route exact path={pages.PROMOTIONS} component={Promotions} />
          <Route path={pages.RESTAURANT} component={Restaurant} />
          <Route exact path={pages.HOME} component={Home} />
        </Switch>
      </div>
    );

  }
}

export default App;
