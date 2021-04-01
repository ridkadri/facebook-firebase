import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtfNXiORnQg2w6L3kw8CYv1TUX7oywf2M",
    authDomain: "facebook-clone-54e48.firebaseapp.com",
    projectId: "facebook-clone-54e48",
    storageBucket: "facebook-clone-54e48.appspot.com",
    messagingSenderId: "1045888431744",
    appId: "1:1045888431744:web:0d684359a523e27ac4d865"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;