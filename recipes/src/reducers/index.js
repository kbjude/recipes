import { combineReducers } from 'redux';
import { mealsReducer } from './data';
import { categoriesReducer } from './category';

const rootReducer = combineReducers({
  data: mealsReducer,
  category: categoriesReducer,
});

export default rootReducer;
