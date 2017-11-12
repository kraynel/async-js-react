import React from 'react';
import renderer from 'react-test-renderer';

import CallbackCall from './CallbackCall';

describe('CallbackCall', () => {
  it('should start in the real world', () => {
    const component = renderer.create(<CallbackCall />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
