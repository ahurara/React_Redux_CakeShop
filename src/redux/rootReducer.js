import { combineReducers } from "redux";
import cakeReduer from "./cakes/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake : cakeReduer,
    iceCream : IceCreamReducer
})


export default rootReducer;