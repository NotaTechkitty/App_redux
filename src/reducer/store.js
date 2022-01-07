import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

import mySaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export { store };
