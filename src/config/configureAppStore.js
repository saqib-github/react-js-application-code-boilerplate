import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { userReducer } from "../redux/reducer/userReducer";
import { rootReducer } from "../redux/reducer/rootReducer";
const reducers = { userReducer, root: rootReducer };

export const store = () => {
  const middleWare = [thunk];
  return createStore(
    combineReducers({
      ...reducers,
    }),
    applyMiddleware(...middleWare)
  );
};
