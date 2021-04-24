import {HashRouter as Router, Route, Switch} from "react-router-dom";
import React, {Component} from 'react';

// CSS
import './css/App.css';
import './css/mobile.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './components/MaterialAnimation';

// Components
import Nav from './components/Nav'
import Footer from './components/Footer';

// App
class App extends Component {
  render() {
      return (
          <Router>
                  <div>
                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route exact path="/about" component={About}/>
                          <Route exact path="/contact" component={Contact}/>
                          <Route
                              render={() => (
                              <div>
                                  <h3>404</h3>
                              </div>
                          )}/>
                      </Switch>
                  </div>
          </Router>
      );
  }
}


export default App;
