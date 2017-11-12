import React from 'react';
import renderer from 'react-test-renderer';

import UpsideDownPromise from '../services/UpsideDownPromise';
import PromiseCall from './PromiseCall';

jest.mock('../services/UpsideDownPromise');

describe('PromiseCall', () => {
  it('should start in the real world', () => {
    const component = renderer.create(<PromiseCall />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should go in the upside down', async () => {
    UpsideDownPromise.mockImplementation(() => {
      return {
        enter: () => Promise.resolve(),
        findDemogorgon: () => Promise.reject(new Error()),
        killDemogorgon: () => Promise.reject(new Error())
      };
    });

    const component = renderer.create(<PromiseCall />);
    try {
      await component.getInstance().toggleCall();
    } catch (error) {}
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should find the demogorgon', async () => {
    UpsideDownPromise.mockImplementation(() => {
      return {
        enter: () => Promise.resolve(),
        findDemogorgon: () => Promise.resolve('SOME PLACE'),
        killDemogorgon: () => Promise.reject(new Error())
      };
    });

    const component = renderer.create(<PromiseCall />);
    try {
      await component.getInstance().toggleCall();
    } catch (error) {}
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should kill the demogorgon', async () => {
    UpsideDownPromise.mockImplementation(() => {
      return {
        enter: () => Promise.resolve(),
        findDemogorgon: () => Promise.resolve('SOME PLACE'),
        killDemogorgon: () => Promise.resolve('SUCCESS')
      };
    });

    const component = renderer.create(<PromiseCall />);
    await component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fail to kill the demogorgon', async () => {
    UpsideDownPromise.mockImplementation(() => {
      return {
        enter: () => Promise.resolve(),
        findDemogorgon: () => Promise.resolve('SOME PLACE'),
        killDemogorgon: () => Promise.resolve('FAILURE')
      };
    });

    const component = renderer.create(<PromiseCall />);
    await component.getInstance().toggleCall();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
