import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDtk8zDi09vDMgj-7NmGVdDO5URoniJ24I",
    authDomain: "fooliery.firebaseapp.com",
    databaseURL: "https://fooliery-default-rtdb.firebaseio.com",
    projectId: "fooliery",
    storageBucket: "fooliery.appspot.com",
    messagingSenderId: "686092038183",
    appId: "1:686092038183:web:e0fa3379ea8c51caea5e02"
};

const app = getApp.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };