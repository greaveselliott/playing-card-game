import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import Notification from './components/notification';
import Deck from './components/deck';
import Hand from './components/hand';
import Controls from './components/controls';
import Modernizr from 'modernizr';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="l-app">
            <Notification class_name="l-app__notification"/>
            <main className="l-app__main">
                <Deck/>
                <Hand/>
                <Controls/>
            </main>
          </div>
      </Provider>
    );
  }
}

export default App;
