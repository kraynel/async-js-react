import React, { Component } from 'react';
import UpsideDown from '../services/UpsideDown';

export default class CallbackCall extends Component {
  constructor(props) {
    super(props);
    this.upsideDown = new UpsideDown();
    this.state = {
      strangerStatus: 'In real world'
    };
  }

  toggleCall = () => {
    this.upsideDown.enter(() => {
      this.setState({ strangerStatus: 'In upside down' });

      this.upsideDown.findDemogorgon(location => {
        this.setState({ strangerStatus: `Demogorgon in ${location}` });

        this.upsideDown.killDemogorgon(result => {
          if (result === 'SUCCESS') {
            this.setState({ strangerStatus: 'Demogorgon dead ️☠️' });
            return;
          }

          this.setState({ strangerStatus: 'You are dead ☠️' });
        });
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleCall}>Callback Call</button>
        <span>{this.state.strangerStatus}</span>
      </div>
    );
  }
}
