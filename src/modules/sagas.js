// @flow
import { fork, all } from 'redux-saga/effects';

import { saga as upsideDownSaga } from './UpsideDown';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([fork(upsideDownSaga)]);
}
