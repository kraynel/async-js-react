import { call, put } from 'redux-saga/effects';

import { toggleCall, upsideDown } from './sagas';
import { updateStatus } from './actions';

describe('toggleCall', () => {
  describe('Successfull kill', () => {
    const toggleCallSaga = toggleCall();

    it('should enter the upside down', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.enter])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next().value).toEqual(
        put(updateStatus('In under world'))
      );
    });

    it('should find the demogorgon', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.findDemogorgon])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next('SOME PLACE').value).toEqual(
        put(updateStatus('Found demogorgon in SOME PLACE'))
      );
    });

    it('should kill the demogorgon', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.killDemogorgon])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next('SUCCESS').value).toEqual(
        put(updateStatus(`Demogorgon is dead!`))
      );
    });

    it('should finish', () => {
      expect(toggleCallSaga.next().value).toBeUndefined();
    });
  });

  describe('Unsuccessfull kill', () => {
    const toggleCallSaga = toggleCall();

    it('should enter the upside down', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.enter])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next().value).toEqual(
        put(updateStatus('In under world'))
      );
    });

    it('should find the demogorgon', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.findDemogorgon])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next('SOME PLACE').value).toEqual(
        put(updateStatus('Found demogorgon in SOME PLACE'))
      );
    });

    it('should kill the demogorgon', () => {
      expect(toggleCallSaga.next().value).toEqual(
        call([upsideDown, upsideDown.killDemogorgon])
      );
    });

    it('should update the status', () => {
      expect(toggleCallSaga.next('NOT_SUCCESS').value).toEqual(
        put(updateStatus(`You are dead`))
      );
    });

    it('should finish', () => {
      expect(toggleCallSaga.next().value).toBeUndefined();
    });
  });
});
