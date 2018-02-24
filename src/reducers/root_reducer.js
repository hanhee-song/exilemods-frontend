import { combineReducers } from 'redux';
import pins from './pin_reducer';
import items from './item_reducer';
import currentItem from './current_item_reducer';

const RootReducer = combineReducers({
  pins,
  items,
  currentItem,
});

export default RootReducer;
