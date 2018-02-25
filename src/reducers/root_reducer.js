import { combineReducers } from 'redux';
import pins from './pin_reducer';
import mods from './mods_reducer';
import currentItem from './current_item_reducer';

const RootReducer = combineReducers({
  pins,
  mods,
  currentItem,
});

export default RootReducer;
