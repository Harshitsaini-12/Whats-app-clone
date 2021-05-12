//config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtDcdmvpaz2KC0T0FK1SnaC8fqjLwh_XA",
  authDomain: "whatsup-ae986.firebaseapp.com",
  projectId: "whatsup-ae986",
  storageBucket: "whatsup-ae986.appspot.com",
  messagingSenderId: "595673859086",
  appId: "1:595673859086:web:7836281c1a00287124285f",
  measurementId: "G-SRXP2HXYMW"
};

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebaseApp.auth();

  //for google auth provide.
  const provider= new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;