import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6AW8ZaiRB-V8KvaRwS_PgkGmX2YBJrNQ",
  authDomain: "ecoomerce-db.firebaseapp.com",
  databaseURL: "https://ecoomerce-db.firebaseio.com",
  projectId: "ecoomerce-db",
  storageBucket: "ecoomerce-db.appspot.com",
  messagingSenderId: "94867066520",
  appId: "1:94867066520:web:549b1311df5622b5c38aed",
  measurementId: "G-VHN4QJE6Q3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
