import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZhmIeStQfwSxXS8-aU0Tk-ooh8Skex0M",
    authDomain: "expense-app-811f6.firebaseapp.com",
    databaseURL: "https://expense-app-811f6.firebaseio.com",
    projectId: "expense-app-811f6",
    storageBucket: "expense-app-811f6.appspot.com",
    messagingSenderId: "10925642307",
    appId: "1:10925642307:web:ee9bec58fcc6c8d58afaf6"
  }

 firebase.initializeApp(firebaseConfig)

 firebase.database().ref().set({
     name: 'Andreas'
 })