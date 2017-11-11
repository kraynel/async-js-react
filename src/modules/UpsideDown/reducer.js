// @flow

export type UpsideDownStateType = {
  status: string
};

const INITIAL_STATE = {
  status: 'In real world'
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (
  state: UpsideDownStateType = INITIAL_STATE,
  action
): UpsideDownStateType => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
