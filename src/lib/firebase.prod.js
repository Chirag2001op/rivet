import {initializeApp} from 'firebase/app';
import {
  getFirestore
} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// import {seedDatabase} from '../seed';

//we need to somehow see the database

//we need a config here
const config = {
  apiKey: "AIzaSyBa2YTMEdJMfpST65Lt5S-ZV-r-4kNBeDM",
  authDomain: "rivet-3c6fe.firebaseapp.com",
  databaseURL: 'https://rivet-3c6fe.firebaseio.com',
  projectId: "rivet-3c6fe",
  storageBucket: "rivet-3c6fe.appspot.com",
  messagingSenderId: "569327980584",
  appId: "1:569327980584:web:a94fecb500999a5489a51d",
  measurementId: "G-EWENB4KVNX"
};


let firebase = initializeApp(config)
const db = getFirestore();
const  auth = getAuth();
// await signInWithEmailAndPassword(auth, "chirag.dogra79@gmail.com", "Chirag@79");

// seedDatabase(firebase)

// console.log(firebase);
export {firebase};