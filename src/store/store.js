import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  devTools
));

export default store;