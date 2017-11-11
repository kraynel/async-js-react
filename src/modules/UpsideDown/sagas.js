import { all, takeEvery, call, put } from 'redux-saga/effects';
import UpsideDownPromise from '../../services/UpsideDownPromise';

import { updateStatus } from './actions';

function* toggleCall() {
  const upsideDown = new UpsideDownPromise();
  yield call([upsideDown, upsideDown.enter]);
  yield put(updateStatus('In under world'));

  const place = yield call([upsideDown, upsideDown.findDemogorgon]);
  yield put(updateStatus(`Found demogorgin in ${place}`));

  const result = yield call([upsideDown, upsideDown.killDemogorgon]);
  if (result === 'SUCCESS') {
    yield put(updateStatus(`Demogorgon is dead!`));
  } else {
    yield put(updateStatus(`You are dead`));
  }
}

export default function*() {
  yield all([takeEvery('TOGGLE_CALL', toggleCall)]);
}
