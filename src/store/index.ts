import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export type rootState = ReturnType<typeof reducers>
const store = createStore(reducers, applyMiddleware(thunk));

export default store;