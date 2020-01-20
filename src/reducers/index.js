import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import errorValidationReducer from "./errorValidationReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  modals: modalsReducer,
  errorValidations: errorValidationReducer,
  tweetList: tweetsReducer
});
