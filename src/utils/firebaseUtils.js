import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useEffect } from 'react';

/* import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; */

const firebaseConfig = {
    apiKey: "AIzaSyAYRLnPkjJ0JlICg5QtYvORYhkEwjA4ycg",
    authDomain: "project-teste-81838.firebaseapp.com",
    databaseURL: "https://project-teste-81838-default-rtdb.firebaseio.com",
    projectId: "project-teste-81838",
    storageBucket: "project-teste-81838.appspot.com",
    messagingSenderId: "922879926288",
    appId: "1:922879926288:web:6bbf69e07a89dba9eb2a95",
    measurementId: "G-W2MY81L467"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('aopaaa');

const collectionData = collection(db, "ranking");

const teste = async () => {
    const teste2 = await getDocs(collectionData);
}

console.log(teste);


export default db;