import { statusSelector } from './selectors';

describe('statusSelector', () => {
  it('should return the current status', () => {
    const state = {
      status: 'some status'
    };
    const store = { upsideDown: state };
    expect(statusSelector(store)).toEqual('some status');
  });
});
