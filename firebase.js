
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "to-do-list-b99cb.firebaseapp.com",
    projectId: "to-do-list-b99cb",
    storageBucket: "to-do-list-b99cb.appspot.com",
    messagingSenderId: "571297848847",
    appId: "1:571297848847:web:5fc3fad30e0ba135880d7a",
    measurementId: "G-H20DYXQ53C"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
