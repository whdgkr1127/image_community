import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCw1lq1Q3Fr_ytOCKs8uX6R_q4DWk9iyvo",
    authDomain: "image-community-e28e4.firebaseapp.com",
    projectId: "image-community-e28e4",
    storageBucket: "image-community-e28e4.appspot.com",
    messagingSenderId: "843176732773",
    appId: "1:843176732773:web:cfff5a0ca2ab4b2546be8c",
    measurementId: "G-C0X71506D0"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey
export {auth, apiKey}
