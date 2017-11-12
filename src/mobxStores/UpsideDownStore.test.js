import UpsideDownStore from './UpsideDownStore';
import UpsideDownPromise from '../services/UpsideDownPromise';

jest.mock('../services/UpsideDownPromise');

describe('UpsideDownStore', () => {
  it('should have default status initilaized', () => {
    const upsideDownStore = new UpsideDownStore();
    expect(upsideDownStore.status.get()).toBe('In real world');
  });

  describe('toggleCall', () => {
    it('should enter the under world', async () => {
      UpsideDownPromise.mockImplementation(() => {
        return {
          enter: () => Promise.resolve(),
          findDemogorgon: () => Promise.reject(new Error()),
          killDemogorgon: () => Promise.reject(new Error())
        };
      });
      const upsideDownStore = new UpsideDownStore();
      try {
        await upsideDownStore.toggleCall();
      } catch (error) {}
      expect(upsideDownStore.status.get()).toBe('In under world');
    });

    it('should find the demogorgon', async () => {
      UpsideDownPromise.mockImplementation(() => {
        return {
          enter: () => Promise.resolve(),
          findDemogorgon: () => Promise.resolve('JUNKYARD'),
          killDemogorgon: () => Promise.reject(new Error())
        };
      });
      const upsideDownStore = new UpsideDownStore();
      try {
        await upsideDownStore.toggleCall();
      } catch (error) {}
      expect(upsideDownStore.status.get()).toBe('Found demogorgon in JUNKYARD');
    });

    it('should kill the demogorgon', async () => {
      UpsideDownPromise.mockImplementation(() => {
        return {
          enter: () => Promise.resolve(),
          findDemogorgon: () => Promise.resolve('JUNKYARD'),
          killDemogorgon: () => Promise.resolve('SUCCESS')
        };
      });
      const upsideDownStore = new UpsideDownStore();
      await upsideDownStore.toggleCall();
      expect(upsideDownStore.status.get()).toBe('Demogorgon is dead!');
    });

    it('should fail to kill the demogorgon', async () => {
      UpsideDownPromise.mockImplementation(() => {
        return {
          enter: () => Promise.resolve(),
          findDemogorgon: () => Promise.resolve('JUNKYARD'),
          killDemogorgon: () => Promise.resolve('DEAD')
        };
      });
      const upsideDownStore = new UpsideDownStore();
      await upsideDownStore.toggleCall();
      expect(upsideDownStore.status.get()).toBe('You are dead');
    });
  });
});
