import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  // Other reducers if needed
});

export default rootReducer;
