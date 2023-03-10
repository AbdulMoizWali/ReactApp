// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAozOhG8Rf21mQfSoz9Fzwx2NFroZQ8vcU",
    authDomain: "reactapp-a1570.firebaseapp.com",
    projectId: "reactapp-a1570",
    storageBucket: "reactapp-a1570.appspot.com",
    messagingSenderId: "1084465319764",
    appId: "1:1084465319764:web:6c10e25246f14ab7eb42c1",
    measurementId: "G-F019ZRX6Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;