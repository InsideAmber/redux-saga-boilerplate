import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/index";
declare const window: any;

const sagaMiddleWare = createSagaMiddleware();

const store = compose<any>(
  applyMiddleware(sagaMiddleWare),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducers);

sagaMiddleWare.run(rootSaga);

export default store;
