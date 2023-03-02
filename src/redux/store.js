import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import createReduxMiddleware from "redux-saga";
import { rootSaga } from "../saga";

//tạo đối tượng saga của ứng dụng
const sagaMiddleware = createReduxMiddleware();
//tạo store và chấp nhận saga middleware là middleware của store
const store= createStore(rootReducer,applyMiddleware(sagaMiddleware));
//chạy rootSagaa để lọc các action
sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(rootSaga1);
export default store;