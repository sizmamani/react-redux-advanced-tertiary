import React, { Component } from 'react'
import AppRouter from './router'
import { Provider } from 'react-redux'
import configureStore from './store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
