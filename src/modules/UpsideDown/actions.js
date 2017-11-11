export function toggleCall() {
  return {
    type: 'TOGGLE_CALL'
  };
}

export function updateStatus(newStatus) {
  return {
    type: 'UPDATE_STATUS',
    payload: {
      status: newStatus
    }
  };
}
