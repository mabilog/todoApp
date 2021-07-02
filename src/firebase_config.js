import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxprQ7OkyJgNMpNBB1MDkZMhZEhxwN5Ho",
  authDomain: "fir-react-783b7.firebaseapp.com",
  projectId: "fir-react-783b7",
  storageBucket: "fir-react-783b7.appspot.com",
  messagingSenderId: "854620112560",
  appId: "1:854620112560:web:d6c53c31d882ff491cdd75"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };