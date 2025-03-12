import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import AddEvent from './components/AddEvent';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/add-event" element={<AddEvent />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
