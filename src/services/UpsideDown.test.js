import UpsideDown from './UpsideDown';

jest.useFakeTimers();

let upsideDown = null;

describe('UpsideDown', () => {
  beforeEach(() => {
    upsideDown = new UpsideDown();
  });

  describe('enter', () => {
    it('should call the callback function after a second', () => {
      const callback = jest.fn();
      upsideDown.enter(callback);
      expect(callback).not.toBeCalled();

      jest.runAllTimers();
      expect(callback).toBeCalled();
      expect(callback.mock.calls.length).toBe(1);
      expect(upsideDown.canBeKilled).toBe(false);
    });
  });

  describe('findDemogorgon', () => {
    it('should call the callback with a location after a second', () => {
      const callback = jest.fn();
      upsideDown.findDemogorgon(callback);
      expect(callback).not.toBeCalled();

      jest.runAllTimers();
      expect(callback).toBeCalled();
      expect(callback.mock.calls.length).toBe(1);
      expect(callback).toHaveBeenCalledWith('JUNKYARD');
      expect(upsideDown.canBeKilled).toBe(true);
    });
  });

  describe('killDemogorgon', () => {
    it('should call the callback with SUCCESS when Demogorgon can be killed', () => {
      const callback = jest.fn();
      upsideDown.findDemogorgon(() => {});
      jest.runAllTimers();
      expect(upsideDown.canBeKilled).toBe(true);

      upsideDown.killDemogorgon(callback);
      expect(callback).not.toBeCalled();
      jest.runAllTimers();

      expect(callback).toBeCalled();
      expect(callback.mock.calls.length).toBe(1);
      expect(callback).toHaveBeenCalledWith('SUCCESS');
    });

    it('should call the callback with DEAD when Demogorgon cannot be killed', () => {
      const callback = jest.fn();
      upsideDown.killDemogorgon(callback);
      expect(callback).not.toBeCalled();
      jest.runAllTimers();

      expect(callback).toBeCalled();
      expect(callback.mock.calls.length).toBe(1);
      expect(callback).toHaveBeenCalledWith('DEAD');
    });
  });
});
