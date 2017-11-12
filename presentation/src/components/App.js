import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import RouterOutlet from './RouterOutlet';
import 'tg-modal/dist/default.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <section style={headerStyle}>
              <h2>React and Core</h2>
              <Navbar/>
              <br/>
              <RouterOutlet/>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

var headerStyle = {
  'marginTop': '5rem',
  'textAlign': 'center'
};

export default App;
