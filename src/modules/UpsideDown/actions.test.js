import { toggleCall, updateStatus } from './actions';

describe('toggleCall', () => {
  it('should return a toggleCall action', () => {
    expect(toggleCall()).toEqual({
      type: 'TOGGLE_CALL'
    });
  });
});

describe('updateStatus', () => {
  it('should return a updateStatus action', () => {
    expect(updateStatus('new status')).toEqual({
      type: 'UPDATE_STATUS',
      payload: {
        status: 'new status'
      }
    });
  });
});
