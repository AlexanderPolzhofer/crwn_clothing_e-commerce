import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCSyrt50XqkWuLz7-4Wi8zQdvjTSpM2iEQ",
    authDomain: "crwn-clothing-c8b19.firebaseapp.com",
    projectId: "crwn-clothing-c8b19",
    storageBucket: "crwn-clothing-c8b19.appspot.com",
    messagingSenderId: "234008712826",
    appId: "1:234008712826:web:b600b2e0322a85f3cfcdc3",
    measurementId: "G-ZPP3Z7SSWQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error: creating user" + error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;