import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import rootReducer from "../reducers";

const reduxPersistConfig = {
  key: "application",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
