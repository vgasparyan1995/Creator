function getDataForStore() {
    return `import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import AppReducer from "./reducers/combineReducers.js";
import apiMiddleware from "./middleware/actionInvokingMiddleware.js";
import configs from "./actionsRegistration";

const devToolsWrapper = (middlewareGroup) => process.env.NODE_ENV === 'production' ? middlewareGroup : composeWithDevTools(middlewareGroup);

const store = createStore(
  AppReducer,
  devToolsWrapper(applyMiddleware(apiMiddleware(configs))),
);

export default store;
`
}

module.exports = {
    getDataForStore
}