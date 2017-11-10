class UpsideDown {
  canBeKilled = false;

  enter = callback => {
    console.info('Entering UpsideDown');
    setTimeout(callback, 1000);
  };

  findDemogorgon = callback => {
    console.info('Looking for demogorgon');
    setTimeout(() => {
      this.canBeKilled = true;
      callback('JUNKYARD');
    }, 1000);
  };

  killDemogorgon = callback => {
    console.info('Trying to kill the demogorgon');
    setTimeout(() => {
      if (this.canBeKilled) {
        console.log('Demogorgon is dead!');
        callback('SUCCESS');
        return;
      }
      console.log('You are dead!');
      callback('DEAD');
    }, 1000);
  };
}

export default UpsideDown;
