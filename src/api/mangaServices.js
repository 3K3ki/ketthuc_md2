import { instances } from "./axios"

//Xây dựng các service để gọi API - xử lý bất dồng bọ
export const MANGA_GET_SERVICE = async () => {
    try {
        //Gọi và đợi kết quả trả về ---> http://localhost/3002/mangas = instance.get("mangas
        let response = await instances.get("mangas");
        //trả về danh sách user lấy được từ API
        return response.data;
    } catch (error) {
        console.log("error===>", error);
    }
}
export const MANGA_SAGA_SERVICE = async (newManga) => {
    // yield call(userServices.USER_POST_SERVICE, action.payload)
    await instances.post('mangas', newManga)
}
export const MANGA_DELETE_SERVICE = async (id) => {
    await instances.delete('mangas/'+ id)
}
export const MANGA_UPDATE_SERVICE = async (updateManga) => {
    console.log(updateManga);
    await instances.put(`mangas/${updateManga.id}`,updateManga)
}
export const MANGA_SEARCH_SERVICE = async (searchData) =>{
    let response = await instances.get("mangas?name_like="+searchData)
    return response.data
}