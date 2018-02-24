import { RECEIVE_CURRENT_ITEM } from '../actions/item_actions';

const initialState = "";

const CurrentItemReducer = (state = initialState, action) => {
  Object.freeze(state);
  // TODO
  switch (action.type) {
    case RECEIVE_CURRENT_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default CurrentItemReducer;

// CurrentItemReducer is only to dictate what should be displayed.
