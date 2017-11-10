class UpsideDown {
  canBeKilled = false;

  enter = () => {
    console.info('Entering UpsideDown');
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(resolveRef, 1000);
    return promise;
  };

  findDemogorgon = callback => {
    console.info('Looking for demogorgon');
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(resolveRef, 1000, 'JUNKYARD');
    this.canBeKilled = true;
    return promise;
  };

  killDemogorgon = callback => {
    console.info('Trying to kill the demogorgon');
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(() => {
      if (this.canBeKilled) {
        console.log('Demogorgon is dead!');
        resolveRef('SUCCESS');
        return;
      }
      console.log('You are dead!');
      resolveRef('DEAD');
    }, 1000);
    return promise;
  };
}

export default UpsideDown;
