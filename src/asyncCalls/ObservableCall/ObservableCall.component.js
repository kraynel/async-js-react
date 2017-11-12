// @flow

import React, { PureComponent } from 'react';

type PropsType = {
  toggleCall: () => void,
  strangerStatus: string
};

export default class ObservableCall extends PureComponent<PropsType> {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleCall}>Observable Call</button>
        <span>{this.props.strangerStatus}</span>
      </div>
    );
  }
}
