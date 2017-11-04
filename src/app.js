import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import Modernizr from 'modernizr';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="app">
            <main className="app__main">
            </main>
          </div>
      </Provider>
    );
  }
}

export default App;
