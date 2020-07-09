import { combineReducers } from "redux";
import { cartContent } from "./cartContent";
import { cartDetails } from "./cartDetails";

export default combineReducers({
    cartContent, cartDetails
});