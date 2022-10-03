import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categories } from './categories/reduce';

const rootReducer = combineReducers({
  categories
});

export const store = configureStore({
  reducer: rootReducer,
  remember: composeWithDevTools()
});
