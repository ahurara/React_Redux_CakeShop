import { createStore } from "redux";
//if multiple reducers
import rootReducer from "./rootReducer";
//if one reducer
//import cakeReduer from "./cakes/cakeReducer";


const store = createStore(rootReducer)

export default store;