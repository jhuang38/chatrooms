import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const {REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID, REACT_APP_MEASURMENT_ID} = process.env;

const app = initializeApp({
    apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${REACT_APP_MEASURMENT_ID}`
})

const userAuth = getAuth();
const authProvider = new GoogleAuthProvider();
const fsInstance = getFirestore(app);

export {app, authProvider, userAuth, fsInstance};