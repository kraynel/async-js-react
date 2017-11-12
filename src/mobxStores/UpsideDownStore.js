// @flow

import { action, observable, runInAction } from 'mobx';
import UpsideDownPromise from '../services/UpsideDownPromise';

export default class UpsideDownStore {
  upsideDown = new UpsideDownPromise();
  status = observable('In real world');

  toggleCall = action(async () => {
    await this.upsideDown.enter();

    runInAction(() => {
      this.status.set('In under world');
    });

    const place = await this.upsideDown.findDemogorgon();
    runInAction(() => {
      this.status.set(`Found demogorgon in ${place}`);
    });

    const result = await this.upsideDown.killDemogorgon();
    runInAction(() => {
      if (result === 'SUCCESS') {
        this.status.set('Demogorgon is dead!');
      } else {
        this.status.set('You are dead');
      }
    });
  });
}
