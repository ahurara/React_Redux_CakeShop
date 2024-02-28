import { combineReducers } from "redux";
import cakeReduer from "./cakes/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    cake : cakeReduer,
    iceCream : IceCreamReducer,
    user : userReducer
})


export default rootReducer;