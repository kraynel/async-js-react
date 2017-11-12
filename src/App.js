// @flow

import React, { Component } from 'react';
import asyncFunctions from './asynchronous-javascript.png';
import './App.css';

import { Provider } from 'react-redux';

import type StoreType from './modules/reducers';
import createStore from './modules/store';

import UpsideDownStore from './mobxStores/UpsideDownStore';
import { Provider as MobxProvider } from 'mobx-react';

import CallbackCall from './asyncCalls/CallbackCall';
import PromiseCall from './asyncCalls/PromiseCall';
import AsyncAwaitCall from './asyncCalls/AsyncAwaitCall';
import SagaCall from './asyncCalls/SagaCall';
import ObservableCall from './asyncCalls/ObservableCall';

type StateType = {
  store: ?StoreType,
  mobxStore: UpsideDownStore
};

class App extends Component<null, StateType> {
  state = {
    store: null,
    mobxStore: new UpsideDownStore()
  };

  componentDidMount() {
    const store = createStore();
    this.setState({ store });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asyncFunctions} className="App-image" alt="logo" />
        </header>
        <CallbackCall />
        <PromiseCall />
        <AsyncAwaitCall />

        {this.state.store && (
          <Provider store={this.state.store}>
            <SagaCall />
          </Provider>
        )}

        <MobxProvider store={this.state.mobxStore}>
          <ObservableCall />
        </MobxProvider>
      </div>
    );
  }
}

export default App;
