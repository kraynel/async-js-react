import React from 'react';
import renderer from 'react-test-renderer';

import AsyncAwaitCall from './AsyncAwaitCall';

describe('AsyncAwaitCall', () => {
  it('should start in the real world', () => {
    const component = renderer.create(<AsyncAwaitCall />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
