import upsideDownReducer from './reducer';

describe('upsideDownReducer', () => {
  it('should return the initial state', () => {
    expect(upsideDownReducer()).toEqual({
      status: 'In real world'
    });
  });

  it('should update the status', () => {
    const state = {
      status: 'old status'
    };
    const action = {
      type: 'UPDATE_STATUS',
      payload: { status: 'new status' }
    };

    const expectedState = {
      status: 'new status'
    };
    expect(upsideDownReducer(state, action)).toEqual(expectedState);
  });
});
