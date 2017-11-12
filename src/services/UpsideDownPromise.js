class UpsideDown {
  canBeKilled = false;

  enter = () => {
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(resolveRef, 1000);
    return promise;
  };

  findDemogorgon = callback => {
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(resolveRef, 1000, 'JUNKYARD');
    this.canBeKilled = true;
    return promise;
  };

  killDemogorgon = callback => {
    let resolveRef = null;
    const promise = new Promise(resolve => {
      resolveRef = resolve;
    });
    setTimeout(() => {
      if (this.canBeKilled) {
        resolveRef('SUCCESS');
        return;
      }
      resolveRef('DEAD');
    }, 1000);
    return promise;
  };
}

export default UpsideDown;
