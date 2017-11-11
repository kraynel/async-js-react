// @flow

export type ActionType =
  | {|
      type: 'TOGGLE_CALL'
    |}
  | {|
      type: 'UPDATE_STATUS',
      payload: { status: string }
    |};

export function toggleCall(): ActionType {
  return {
    type: 'TOGGLE_CALL'
  };
}

export function updateStatus(newStatus: string): ActionType {
  return {
    type: 'UPDATE_STATUS',
    payload: {
      status: newStatus
    }
  };
}
