import { combineReducers } from 'redux';
import pin from './pin_reducer';

const RootReducer = combineReducers({
  pin
});

export default RootReducer;
