import { combineReducers } from "redux";
import identity from "./identity";
import consultation from "./consultation";

export default combineReducers({
  identity,
  consultation
});
