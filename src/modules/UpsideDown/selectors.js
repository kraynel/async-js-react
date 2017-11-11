// @flow
import type { StoreType } from '../reducers';

export const statusSelector = (state: StoreType): string =>
  state.upsideDown.status;
