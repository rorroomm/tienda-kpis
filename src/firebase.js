import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCwP29n2dGLVbQ7GTmiQGKrtEgp_CJFa0Y",
    authDomain: "random-store-7e65f.firebaseapp.com",
    projectId: "random-store-7e65f",
    storageBucket: "random-store-7e65f.appspot.com",
    messagingSenderId: "986400837671",
    appId: "1:986400837671:web:5805a5711724e2d3df3e02"

  };


const fb = firebase.initializeApp(firebaseConfig);


export const db = fb.firestore();