import { PIN_MOD, UNPIN_MOD } from '../actions/pin_actions';
import merge from 'lodash/merge';

const initialState = [];

const PinReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge([], state);
  // TODO
  switch (action.type) {
    case PIN_MOD:
      newState.push(action.mod);
      return newState;
    case UNPIN_MOD:
      debugger;
      // this can get hairy... is arr.filter with mod ids
      // an option?
    default:
      return state;
  }
};

export default PinReducer;
