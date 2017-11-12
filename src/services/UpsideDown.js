class UpsideDown {
  canBeKilled = false;

  enter = callback => {
    setTimeout(callback, 1000);
  };

  findDemogorgon = callback => {
    setTimeout(() => {
      this.canBeKilled = true;
      callback('JUNKYARD');
    }, 1000);
  };

  killDemogorgon = callback => {
    setTimeout(() => {
      if (this.canBeKilled) {
        callback('SUCCESS');
        return;
      }
      callback('DEAD');
    }, 1000);
  };
}

export default UpsideDown;
