import React, { Component } from 'react';
import Home from './components/Home';
import Events from './components/Events';
import AddEvent from './components/AddEvent';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Events />
        <AddEvent />
      </div>
    );
  }
}

export default App;
