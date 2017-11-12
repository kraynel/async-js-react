// @flow

import { inject } from 'mobx-react';
import ButtonWithStatus from './ButtonWithStatus';

import UpsideDownStore from '../mobxStores/UpsideDownStore';

const mapMobxToProps = ({ store }: { store: UpsideDownStore }) => ({
  strangerStatus: store.status.get(),
  buttonText: 'Observable Call',
  toggleCall: store.toggleCall
});

export default inject(mapMobxToProps)(ButtonWithStatus);
