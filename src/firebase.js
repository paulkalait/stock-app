// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDxSuLMI_EASzIqqlqNOXYjUp5QwYxTl2c",
    authDomain: "stock-app-2d30a.firebaseapp.com",
    projectId: "stock-app-2d30a",
    storageBucket: "stock-app-2d30a.appspot.com",
    messagingSenderId: "691751960056",
    appId: "1:691751960056:web:a8ab0cd1a75da585b1aa0d",
    measurementId: "G-RPS9RVLMEV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore

  export { db }