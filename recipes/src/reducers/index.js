import { combineReducers } from 'redux';
import { mealsReducer } from './data';

const rootReducer = combineReducers({
  data: mealsReducer,
});

export default rootReducer;
