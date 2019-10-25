import { createStore } from "redux";
import { reducer as rootReducer } from "./service-worker-reducer";

const configureStore = (initialState = { serviceWorkerUpdated: false }) => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
