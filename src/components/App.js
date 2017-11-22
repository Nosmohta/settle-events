import React, { Component } from 'react';

import '../css/App.css';

import EventCountsPage from '../pages/event-counts-page'

class App extends Component {
  render() {
    return (
        <div className="App">
          <EventCountsPage />
        </div>
    );
  }
}

export default App;
