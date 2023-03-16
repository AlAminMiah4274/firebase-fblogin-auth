// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADJZhXkBSM02_oFxKkkGk0zsz_Y3aFbmg",
    authDomain: "facebook-login-auth-221b8.firebaseapp.com",
    projectId: "facebook-login-auth-221b8",
    storageBucket: "facebook-login-auth-221b8.appspot.com",
    messagingSenderId: "663741217038",
    appId: "1:663741217038:web:0539aadd7e8820797e7f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
Firebase deploy: 

// One time for each computer
1. npm install -g firebase-tools
2. firebase login

// One time for each project
3. firebase init 
Make sure public directory you select: bulid
single page application: y

// For every deploy 
4. npm run build 
5. firebase deploy
*/