import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { categories } from './categories/reduce';
import { postsReducer } from './posts/reducer';

const rootReducer = combineReducers({
  categories,
  posts: postsReducer
});

export const store = configureStore({
  reducer: rootReducer,
  remember: composeWithDevTools()
});
