import { createStore , applyMiddleware } from "redux";
// to make async action creators
import { thunk } from "redux-thunk";
//if multiple reducers
import rootReducer from "./rootReducer";
//if one reducer
//import cakeReduer from "./cakes/cakeReducer";

import logger from "redux-logger";


const store = createStore(rootReducer , applyMiddleware(logger , thunk))

export default store;