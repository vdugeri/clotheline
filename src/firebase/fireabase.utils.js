import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOI5IWpWbjTVCIBtB4oo2kOx7NyQNZ54k",
  authDomain: "matell-db.firebaseapp.com",
  databaseURL: "https://matell-db.firebaseio.com",
  projectId: "matell-db",
  storageBucket: "",
  messagingSenderId: "471290970028",
  appId: "1:471290970028:web:97128a179f5cb286"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
