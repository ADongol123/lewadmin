import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDb9MYJ9B_Xa5WUuzxGVKV35HOiSrpgM20",
    authDomain: "leww-c5ad3.firebaseapp.com",
    projectId: "leww-c5ad3",
    storageBucket: "leww-c5ad3.appspot.com",
    messagingSenderId: "754063327782",
    appId: "1:754063327782:web:e2a39d2bc292de9a381ce7",
    measurementId: "G-RPTBNVLL21"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()
  export {auth, provider,storage};
  export default db;