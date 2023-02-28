import { all, takeLatest } from "redux-saga/effects";
import * as userSagas from "./userSaga";
import *as actionTypes from "../redux/constans/actionTypes";
export const rootSaga = function* () {
    yield all([
        //takeLastes(actionsTypes, arguments of function)
        //Phần manga
        takeLatest(actionTypes.MANGA_GET, userSagas.MANGA_SAGA_GET),
        takeLatest(actionTypes.MANGA_POST, userSagas.MANGA_SAGA_POST),
        takeLatest(actionTypes.MANGA_DELETE, userSagas.MANGA_SAGA_DELETE),
        takeLatest(actionTypes.MANGA_UPDATE, userSagas.MANGA_SAGA_UPDATE),
        takeLatest(actionTypes.MANGA_SEARCH, userSagas.MANGA_SAGA_GET),
        //Phần User
        takeLatest(actionTypes.USER_GET, userSagas.USER_SAGA_GET),
        takeLatest(actionTypes.USER_POST, userSagas.USER_SAGA_POST),
        takeLatest(actionTypes.USER_DELETE, userSagas.USER_SAGA_DELETE)
    ])
}

