import React from 'react';
import renderer from 'react-test-renderer';

import PromiseCall from './PromiseCall';

describe('PromiseCall', () => {
  it('should start in the real world', () => {
    const component = renderer.create(<PromiseCall />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
