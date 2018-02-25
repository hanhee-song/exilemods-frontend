import { RECEIVE_CURRENT_ITEM } from '../actions/item_actions';
import { getModsFromTag } from '../util/get_mods_from_tag';

const initialState = {};

// action.item: {
//   category: String,
//   item: String,
//   tagIds: Array,
// }

const ItemReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_ITEM:
      // For code purposes, going to ignore all but the first tag
      const mods = getModsFromTag(action.item.tagIds[0]);
      debugger;
      return mods;
    default:
      return state;
  }
};

export default ItemReducer;

// ItemReducer is where all the data from the back end is cached.
// It does not dictate what is displayed - CurrentItemReducer is in
// charge of that.
