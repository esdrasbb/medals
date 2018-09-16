import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyASVdDKaEcmrLkKw93ausi39JVr6vtOZko",
  authDomain: "my-medals.firebaseapp.com",
  databaseURL: "https://my-medals.firebaseio.com",
  projectId: "my-medals",
  storageBucket: "my-medals.appspot.com",
  messagingSenderId: "706096950941"
};


firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();