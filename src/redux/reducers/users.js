import { MANGA_SUCCESS, USER_SUCCESS } from "../constans/actionTypes";

const  initialState = []; 
export const mangas = (state= initialState,action ) =>{
    switch (action.type){
        case MANGA_SUCCESS:
            // xử lý cho trường hợp gọi api get thành công
            //data cần lưu trữ ở store của redux: action.payload
            return [...action.payload];
            default:
                return state;
    }
}

const initialState1 = [];
export const users = (state= initialState1,action ) =>{
    switch (action.type){
        case USER_SUCCESS:
            // xử lý cho trường hợp gọi api get thành công
            //data cần lưu trữ ở store của redux: action.payload
            return [...action.payload];
            default:
                return state;
    }
}