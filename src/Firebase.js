import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBXu-a_5TShd75sUIWZqOgnvDEhvD2AvLQ",
    authDomain: "tinder-clone-b0688.firebaseapp.com",
    databaseURL: "https://tinder-clone-b0688.firebaseio.com",
    projectId: "tinder-clone-b0688",
    storageBucket: "tinder-clone-b0688.appspot.com",
    messagingSenderId: "1062067487301",
    appId: "1:1062067487301:web:833a04dfd56437065bd92c",
    measurementId: "G-V48ZF8KX1X",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;