//Fire Base keys 
import firebase from 'firebase'
import "firebase/auth"
export const auth=firebase.initializeApp ({
    apiKey: "AIzaSyA9ENoDE_n0ZFmvbOJsjQvLxDeUCLFpXoU",
    authDomain: "desi-messanger.firebaseapp.com",
    projectId: "desi-messanger",
    storageBucket: "desi-messanger.appspot.com",
    messagingSenderId: "417324811011",
    appId: "1:417324811011:web:413296d478169846da5f36"
  } ).auth()