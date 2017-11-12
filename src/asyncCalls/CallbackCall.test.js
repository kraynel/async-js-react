import React from 'react';
import renderer from 'react-test-renderer';

import UpsideDown from '../services/UpsideDown';
import CallbackCall from './CallbackCall';

jest.mock('../services/UpsideDown');

describe('CallbackCall', () => {
  it('should start in the real world', () => {
    const component = renderer.create(<CallbackCall />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should go in the upside down', () => {
    UpsideDown.mockImplementation(() => {
      return {
        enter: callback => callback(),
        findDemogorgon: () => {},
        killDemogorgon: () => {}
      };
    });

    const component = renderer.create(<CallbackCall />);
    component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should find the demogorgon', () => {
    UpsideDown.mockImplementation(() => {
      return {
        enter: callback => callback(),
        findDemogorgon: callback => callback('SOME PLACE'),
        killDemogorgon: () => {}
      };
    });

    const component = renderer.create(<CallbackCall />);
    component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should kill the demogorgon', () => {
    UpsideDown.mockImplementation(() => {
      return {
        enter: callback => callback(),
        findDemogorgon: callback => callback('SOME PLACE'),
        killDemogorgon: callback => callback('SUCCESS')
      };
    });

    const component = renderer.create(<CallbackCall />);
    component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fail to kill the demogorgon', () => {
    UpsideDown.mockImplementation(() => {
      return {
        enter: callback => callback(),
        findDemogorgon: callback => callback('SOME PLACE'),
        killDemogorgon: callback => callback('FAILURE')
      };
    });

    const component = renderer.create(<CallbackCall />);
    component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
