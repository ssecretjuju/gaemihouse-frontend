import { combineReducers } from "redux";
import { loginReducer } from "./memberModules/loginModule";
import { joinReducer } from "./memberModules/joinModule";
import { memberReducer } from "./memberModules/memberModule";

const rootReducer = combineReducers({
  loginReducer,
  joinReducer,
  memberReducer,
});

export default rootReducer;
