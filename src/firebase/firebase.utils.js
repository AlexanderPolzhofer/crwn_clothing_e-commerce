import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSyrt50XqkWuLz7-4Wi8zQdvjTSpM2iEQ",
    authDomain: "crwn-clothing-c8b19.firebaseapp.com",
    projectId: "crwn-clothing-c8b19",
    storageBucket: "crwn-clothing-c8b19.appspot.com",
    messagingSenderId: "234008712826",
    appId: "1:234008712826:web:b600b2e0322a85f3cfcdc3",
    measurementId: "G-ZPP3Z7SSWQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopUp(provider);

export default firebase;