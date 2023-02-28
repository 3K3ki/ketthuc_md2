import { instances } from "./axios"

//phần users
export const USER_GET_SERVICE = async () => {
    try {
        //Gọi và đợi kết quả trả về ---> http://localhost/3002/mangas = instance.get("users")
        let response = await instances.get("users")
        //trả về danh sách user lấy được từ API
        return response.data;
    } catch (error) {
        console.log("error===>", error);
    }
}
export const USER_SAGA_SERVICE = async (newUser) => {
    // yield call(userServices.USER_POST_SERVICE, action.payload)
    await instances.post('users', newUser)
    console.log('vao saga user service');
}
export const USER_DELETE_SERVICE = async (id) => {
    await instances.delete('users/'+ id)
}