import { combineReducers } from "redux";
import { loginReducer } from "./memberModules/loginModule";
import { joinReducer } from "./memberModules/joinModule";

const rootReducer = combineReducers({
  loginReducer,
  joinReducer,
});

export default rootReducer;
