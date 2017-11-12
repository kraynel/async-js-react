import React from 'react';
import renderer from 'react-test-renderer';

import ButtonWithStatus from './ButtonWithStatus';

describe('ButtonWithStatus', () => {
  it('should display a button with a status', () => {
    const toggleCall = jest.fn();
    const component = renderer.create(
      <ButtonWithStatus
        buttonText="Some text"
        strangerStatus="some status"
        toggleCall={toggleCall}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
