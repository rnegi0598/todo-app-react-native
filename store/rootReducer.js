import { combineReducers } from "redux";
import todoReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  tasks: todoReducer,
  // Other reducers if needed
});

export default rootReducer;
