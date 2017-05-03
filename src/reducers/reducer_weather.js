import { FETCH_WEATHER } from '../actions/index';

// state in a reducer is a piece of state that this reducer handles.
// state argument is the current piece of this state
// When actions hit reducers they have already gone through middleware.
// In this case, the redux-promise middleware has:
// 1) Stoped all actions that have promises as payload
// 2) Waits until promise resolves
// 3) Send a new action of the same type but with the data from the promise on
// the payload key
export default function(state =[], action){
  switch(action.type){
    case FETCH_WEATHER:
      // REDUCERS MUST NOT MUTATE CURRENT STATE, THEY MUST RETURN A COMPLETELY NEW
      // INSTANCE OF STATE.
      // NOT state.push(action.payload.data);  THIS MANIPULATES THE STATE DIRECTLY
      // YES: return state.concat([action.payload.data]);
      // ES6 alternative
      return [ action.payload.data, ...state ]
  }
  return state;
}
