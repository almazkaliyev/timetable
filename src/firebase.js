import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyB4-pXMtdl8jYjUwN1lkU4FshtIJ2tCoUo',
  authDomain: 'react-timetable.firebaseapp.com',
  databaseURL: 'https://react-timetable.firebaseio.com',
  projectId: 'react-timetable',
  storageBucket: 'react-timetable.appspot.com',
  messagingSenderId: '289617004953',
  appId: '1:289617004953:web:7363e075ecd70618a36b08',
  measurementId: 'G-5J9SG15LXB',
});

const db = firebase.firestore();

export default db;
