import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Đây là file config cá nhân được khởi tạo dự trên firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmkMrCxepAVGYfyElCHTcYE_HwIVPiH3A",
    authDomain: "hung-b4240.firebaseapp.com",
    projectId: "hung-b4240",
    storageBucket: "hung-b4240.appspot.com",
    messagingSenderId: "690730033717",
    appId: "1:690730033717:web:f11781651638502f24c77c",
    measurementId: "G-X7TBHF11HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu

export const storage = getStorage(app);
