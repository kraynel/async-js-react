// @flow

import React, { PureComponent } from 'react';

type PropsType = {
  buttonText: string,
  toggleCall: () => void,
  strangerStatus: string
};

export default class ButtonWithStatus extends PureComponent<PropsType> {
  render() {
    return (
      <div className="buttonWithStatus">
        <button
          className="buttonToggleUpsideDown"
          onClick={this.props.toggleCall}
        >
          {this.props.buttonText}
        </button>
        <span>{this.props.strangerStatus}</span>
      </div>
    );
  }
}
