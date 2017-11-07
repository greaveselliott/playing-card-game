import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './app.scss';
import { Deck, Hand } from './components/card-collection';
import Controls from './components/controls';
import Modernizr from 'modernizr';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="l-app">
            <main className="l-app__main">
                <Deck heading="Deck"/>
                <Hand heading="Hand"/>
                <Controls/>
            </main>
          </div>
      </Provider>
    );
  }
}

export default App;
