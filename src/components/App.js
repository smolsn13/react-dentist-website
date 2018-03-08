import React, { Component } from 'react';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

let procedures = ["Root Canal", "Crown", "Checkup", "Cavity Filling", "Tooth Removal"]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link>{' '}
            <Link to="/procedures">See Our Procedures</Link>{' '}
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/procedures' component={() => <Procedures ops={procedures} />} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
