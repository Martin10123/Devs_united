import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwdWZN-sKbMN7jsCD6QVaj9GdFXDmh9WE",
  authDomain: "fir-devs-united.firebaseapp.com",
  projectId: "fir-devs-united",
  storageBucket: "fir-devs-united.appspot.com",
  messagingSenderId: "992558201427",
  appId: "1:992558201427:web:6b5a612da7bd192ea5a4a6",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

const collections = {
  tweets: "tweets",
};

export { firebase, firestore, provider, collections };
