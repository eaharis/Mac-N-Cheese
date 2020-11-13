import './App.css';
import Header from './components/Header/Header'
import { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Profile from './components/Profile/Profile';
import MeetingScheduler from './components/MeetingScheduler/MeetingScheduler';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/scheduler" component={MeetingScheduler} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
