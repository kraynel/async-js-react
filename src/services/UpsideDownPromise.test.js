import UpsideDownPromise from './UpsideDownPromise';

jest.useFakeTimers();

let upsideDownPromise = null;

describe('UpsideDownPromise', () => {
  beforeEach(() => {
    upsideDownPromise = new UpsideDownPromise();
  });

  describe('enter', () => {
    it('should call the callback function after a second', async () => {
      const promise = upsideDownPromise.enter();
      jest.runAllTimers();
      await promise;
      expect(upsideDownPromise.canBeKilled).toBe(false);
    });
  });

  describe('findDemogorgon', () => {
    it('should call the callback with a location after a second', () => {
      const promise = upsideDownPromise.findDemogorgon();
      jest.runAllTimers();
      expect(promise).resolves.toBe('JUNKYARD');
    });
  });

  describe('killDemogorgon', () => {
    it('should call the callback with SUCCESS when Demogorgon can be killed', () => {
      upsideDownPromise.findDemogorgon();
      jest.runAllTimers();
      expect(upsideDownPromise.canBeKilled).toBe(true);

      const promise = upsideDownPromise.killDemogorgon();
      jest.runAllTimers();
      expect(promise).resolves.toBe('SUCCESS');
    });

    it('should call the callback with DEAD when Demogorgon cannot be killed', () => {
      const promise = upsideDownPromise.killDemogorgon();
      jest.runAllTimers();
      expect(promise).resolves.toBe('DEAD');
    });
  });
});
