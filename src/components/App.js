import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import EventCountsPage from '../pages/event-counts-page'

class App extends Component {
  render() {
    return (
        <div className="App">
          <MuiThemeProvider>
            <EventCountsPage />
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
