import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBY1BKpqws7NBpisMDFTKHsBsaXTkDY7GA",
    authDomain: "story-hub-2a8d3.firebaseapp.com",
    databaseURL: "https://story-hub-2a8d3.firebaseio.com",
    projectId: "story-hub-2a8d3",
    storageBucket: "story-hub-2a8d3.appspot.com",
    messagingSenderId: "856150689647",
    appId: "1:856150689647:web:f8cc58882c3b97ca2fca9a"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();