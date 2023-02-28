import { combineReducers } from "redux";
import { mangas } from "./users";
import { users } from "./users";

export const rootReducer = combineReducers({mangas, users})
// export const rootReducer1 = combineReducers({users})s