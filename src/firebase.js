import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAR-ddOJ-EKVNurH6wG7MxIdvpjeKS9cA",
    authDomain: "whatsapp-3f962.firebaseapp.com",
    projectId: "whatsapp-3f962",
    storageBucket: "whatsapp-3f962.appspot.com",
    messagingSenderId: "359778944294",
    appId: "1:359778944294:web:d0ffe173ec47dfb00cade7",
    measurementId: "G-R28EDQSKHW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;