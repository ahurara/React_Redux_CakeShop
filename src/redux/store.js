import { createStore , applyMiddleware } from "redux";
//if multiple reducers
import rootReducer from "./rootReducer";
//if one reducer
//import cakeReduer from "./cakes/cakeReducer";

import logger from "redux-logger";


const store = createStore(rootReducer , applyMiddleware(logger))

export default store;