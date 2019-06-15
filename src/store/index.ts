import { createStore, applyMiddleware, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "remote-redux-devtools";
import storage from "redux-persist/lib/storage";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { IdentityState } from "./ducks/identity/types";
import createSagaMiddleware from "@redux-saga/core";
import { ConsultationState } from "./ducks/consultation/types";

export interface ApplicationState {
  identity: IdentityState;
  consultation: ConsultationState;
}

const composeEnhancers = composeWithDevTools({ realtime: true });

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
