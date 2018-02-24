import { combineReducers } from 'redux';
import pin from './pin_reducer';
import items from './item_reducer';
import currentItem from './current_item_reducer';

const RootReducer = combineReducers({
  pin,
  items,
  currentItem,
});

export default RootReducer;
