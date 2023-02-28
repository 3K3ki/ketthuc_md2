import *as actionType from './constans/actionTypes'

export const act_get_manga = () => {
    return {
        type: actionType.MANGA_GET //không cẩn chuyển dữ liệu nen k cần payload
    }
}
export const act_manga_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_create_manga = (newManga) => {
    return {
        type: actionType.MANGA_POST,
        payload: newManga
    }
}
export const act_delete_manga = (id) => {
    return {
        type: actionType.MANGA_DELETE,
        payload:id
    }
}
export const act_update_manga = (updateManga) => {
    return {
        type: actionType.MANGA_UPDATE,
        payload: updateManga
    }
}
export const act_search_manga = (searchManga) => {
    return {
        type: actionType.MANGA_SEARCH,
        payload: searchManga
    }
}



// Phần user
export const act_get_user = () => {
    return {
        type: actionType.USER_GET //không cẩn chuyển dữ liệu nen k cần payload
    }
}
export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_create_user = (newUser) => {
    return {
        type: actionType.USER_POST,
        payload: newUser
    }
}
export const act_delete_user = (id)=>{
    return {
        type: actionType.USER_DELETE,
        payload: id
    }
}