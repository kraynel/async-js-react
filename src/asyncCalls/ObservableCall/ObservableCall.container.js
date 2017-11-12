// @flow

import { inject } from 'mobx-react';
import ObservableCall from './ObservableCall.component';

import UpsideDownStore from '../../mobxStores/UpsideDownStore';

const mapMobxToProps = ({ store }: { store: UpsideDownStore }) => ({
  strangerStatus: store.status.get(),
  toggleCall: store.toggleCall
});

export default inject(mapMobxToProps)(ObservableCall);
