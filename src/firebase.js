import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByW1MH1j--3FoWmG1n1BW0cXFPk8k--O8",
  authDomain: "tik-tok-clone-d787d.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-d787d.firebaseio.com",
  projectId: "tik-tok-clone-d787d",
  storageBucket: "tik-tok-clone-d787d.appspot.com",
  messagingSenderId: "118028741264",
  appId: "1:118028741264:web:f3ceb857fb7d2c494e4615",
  measurementId: "G-RCFCP63LWR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
