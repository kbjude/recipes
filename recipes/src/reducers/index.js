import { combineReducers } from 'redux';
import { mealsReducer } from './data';
import { categoriesReducer } from './category';
import { ingredientsReducer } from './ingredient';
import { mealDetailsReducer } from './mealDetails';

const rootReducer = combineReducers({
  data: mealsReducer,
  category: categoriesReducer,
  ingredient: ingredientsReducer,
  mealDetails: mealDetailsReducer,
});

export default rootReducer;
