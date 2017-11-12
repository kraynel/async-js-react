// @flow

import { all, takeEvery, call, put } from 'redux-saga/effects';
import UpsideDownPromise from '../../services/UpsideDownPromise';

import { updateStatus } from './actions';

export const upsideDown = new UpsideDownPromise();

export function* toggleCall(): Generator<*, *, *> {
  yield call([upsideDown, upsideDown.enter]);
  yield put(updateStatus('In under world'));

  const place = yield call([upsideDown, upsideDown.findDemogorgon]);
  yield put(updateStatus(`Found demogorgon in ${place}`));

  const result = yield call([upsideDown, upsideDown.killDemogorgon]);
  if (result === 'SUCCESS') {
    yield put(updateStatus(`Demogorgon is dead!`));
  } else {
    yield put(updateStatus(`You are dead`));
  }
}

export default function*(): Generator<*, *, *> {
  yield all([takeEvery('TOGGLE_CALL', toggleCall)]);
}
