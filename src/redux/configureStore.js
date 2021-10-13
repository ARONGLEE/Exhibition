import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Image from "./modules/image";
import Work from "./modules/work";
import user from "./modules/user";
import Artist from "./modules/artist";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  image: Image,
  work: Work,
  user: user,
  artist: Artist,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// env notice
const env = process.env.NODE_ENV;

// logger (dev env)
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
