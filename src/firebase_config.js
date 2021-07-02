import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVk59ZGnrSVNhpeoZY22xd-bW-xr9OQYM",
  authDomain: "todo-11670.firebaseapp.com",
  projectId: "todo-11670",
  storageBucket: "todo-11670.appspot.com",
  messagingSenderId: "486612888370",
  appId: "1:486612888370:web:f09635d6bf5f937405452b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };