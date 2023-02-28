import * as userServices from "../api/userService";
import * as mangaServices from "../api/mangaServices";
import { call, put } from "redux-saga/effects";
import { MANGA_SEARCH, MANGA_SUCCESS, USER_SUCCESS } from "../redux/constans/actionTypes";
import { act_manga_success, act_user_success } from "../redux/actions";

export const MANGA_SAGA_GET = function* (action) {
  try {
    let listManga;
    if (action) {
      switch (action.type) {
        case MANGA_SEARCH:
          listManga = yield call(mangaServices.MANGA_SEARCH_SERVICE, action.payload)
          break;

        default:
          listManga = yield call(mangaServices.MANGA_GET_SERVICE);
          break;
      }
    } else {
      listManga = yield call(mangaServices.MANGA_GET_SERVICE);
    }
    console.log("in");
    // call(functionname, argument of function)
    // success --> gọi action --> put(action)
    yield put(act_manga_success(MANGA_SUCCESS, listManga))
  } catch (error) {
    console.log(error);
  }
}

// export const MANGA_SAGA_GET = function* () {

//   // call(functionname, argument of function)
//   let listManga = yield call(userServices.MANGA_GET_SERVICE)
//   console.log("ListUser==>", listManga);
//   // success --> gọi action --> put(action)
//   yield put(act_manga_success(MANGA_SUCCESS, listManga))
// }

export const MANGA_SAGA_POST = function* (action) {
  try {
    yield call(mangaServices.MANGA_SAGA_SERVICE, action.payload)
    yield MANGA_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
}

export const MANGA_SAGA_DELETE = function* (action) {
  console.log(action.payload);
  try {
    yield call(mangaServices.MANGA_DELETE_SERVICE, action.payload)
    yield MANGA_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
}
export const MANGA_SAGA_UPDATE = function* (action) {
  try {
    yield call(mangaServices.MANGA_UPDATE_SERVICE, action.payload);
    yield MANGA_SAGA_GET();
  } catch (error) {

  }
}


//phần USER
export const USER_SAGA_GET = function* () {
  try {
    let listUser = yield call(userServices.USER_GET_SERVICE)
    // call(functionname, argument of function)
    // success --> gọi action --> put(action)
    yield put(act_user_success(USER_SUCCESS, listUser))
  } catch (error) {
    console.log(error);
  }
}

export const USER_SAGA_POST = function* (action) {
  try {
    yield call(userServices.USER_SAGA_SERVICE, action.payload)
    yield USER_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
}

export const USER_SAGA_DELETE = function* (action) {
  try {
    yield call(userServices.USER_DELETE_SERVICE, action.payload)
    yield USER_SAGA_GET();
  } catch (error) {
    console.log(error);
  }
}