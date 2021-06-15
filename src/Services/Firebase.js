import firebase from "firebase";
// firebaseConfig statement from firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "authDomainName",
    projectId: "Project_ID",
    storageBucket: "Storeage_Bucket",
    messagingSenderId: "Messaging_Sender_id",
    appId: "App_ID",
    measurementId: "G_MEASUREMENT_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };