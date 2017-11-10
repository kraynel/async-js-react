import React, { Component } from 'react';
import UpsideDownPromise from '../services/UpsideDownPromise';

export default class AsyncAwaitCall extends Component {
  constructor(props) {
    super(props);
    this.upsideDownPromise = new UpsideDownPromise();
    this.state = {
      strangerStatus: 'In real world'
    };
  }

  toggleCall = async () => {
    await this.upsideDownPromise.enter();
    this.setState({ strangerStatus: 'In upside down' });

    const location = await this.upsideDownPromise.findDemogorgon();
    this.setState({ strangerStatus: `Demogorgon in ${location}` });

    const result = await this.upsideDownPromise.killDemogorgon();

    if (result === 'SUCCESS') {
      this.setState({ strangerStatus: 'Demogorgon dead ️☠️' });
      return;
    }

    this.setState({ strangerStatus: 'You are dead ☠️' });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleCall}>Async/await Call</button>
        <span>{this.state.strangerStatus}</span>
      </div>
    );
  }
}
