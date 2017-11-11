// @flow

import { combineReducers } from 'redux';

import { upsideDownReducer as upsideDown } from './UpsideDown';

import type { UpsideDownStateType } from './UpsideDown/reducer';

const appReducer = combineReducers({
  upsideDown
});

const initialState = {};

const rootReducer = (state: any = initialState, action: any = {}) =>
  appReducer(state, action);

export type StoreType = {
  upsideDown: UpsideDownStateType
};

export default rootReducer;
