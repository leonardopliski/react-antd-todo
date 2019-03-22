import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// importing root application reducer
import rootReducer from "../reducers";

// Redux Persis Config
const persistConfig = {
  key: "application",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

// Persisting our reducer
const pReducer = persistReducer(persistConfig, rootReducer);

// creating our store with the persistant reducer
export const store = createStore(pReducer, applyMiddleware(thunk));

// persisting our store to the next time that page reloads
export const persistor = persistStore(store);
