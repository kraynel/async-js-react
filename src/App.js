// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import type StoreType from './modules/reducers';
import createStore from './modules/store';

import CallbackCall from './asyncCalls/CallbackCall';
import PromiseCall from './asyncCalls/PromiseCall';
import AsyncAwaitCall from './asyncCalls/AsyncAwaitCall';
import SagaCall from './asyncCalls/SagaCall';

type StateType = {
  store: ?StoreType
};

class App extends Component<null, StateType> {
  state = {
    store: null
  };

  componentDidMount() {
    const store = createStore();
    this.setState({ store });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CallbackCall />
        <PromiseCall />
        <AsyncAwaitCall />

        {this.state.store && (
          <Provider store={this.state.store}>
            <SagaCall />
          </Provider>
        )}
      </div>
    );
  }
}

export default App;
