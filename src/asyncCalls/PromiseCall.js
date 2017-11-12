import React, { Component } from 'react';
import UpsideDownPromise from '../services/UpsideDownPromise';
import ButtonWithStatus from './ButtonWithStatus';

export default class PromiseCall extends Component {
  constructor(props) {
    super(props);
    this.upsideDownPromise = new UpsideDownPromise();
    this.state = {
      strangerStatus: 'In real world'
    };
  }

  toggleCall = () => {
    this.upsideDownPromise
      .enter()
      .then(() => {
        this.setState({ strangerStatus: 'In upside down' });
        return this.upsideDownPromise.findDemogorgon();
      })
      .then(location => {
        this.setState({ strangerStatus: `Demogorgon in ${location}` });
        return this.upsideDownPromise.killDemogorgon();
      })
      .then(result => {
        if (result === 'SUCCESS') {
          this.setState({ strangerStatus: 'Demogorgon dead ️☠️' });
          return;
        }

        this.setState({ strangerStatus: 'You are dead ☠️' });
      });
  };

  render() {
    return (
      <ButtonWithStatus
        toggleCall={this.toggleCall}
        buttonText="Promise Call"
        strangerStatus={this.state.strangerStatus}
      />
    );
  }
}
