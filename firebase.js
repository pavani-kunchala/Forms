import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyB8rDmIMr27fYyPYPgWbq-02HP5PXdqw7U",
  authDomain: "test-414eb.firebaseapp.com",
  databaseURL: "https://test-414eb-default-rtdb.firebaseio.com",
  projectId: "test-414eb",
  storageBucket: "test-414eb.appspot.com",
  messagingSenderId: "911041431575",
  appId: "1:911041431575:web:d606e79cc249f97a4e3452"
};
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();