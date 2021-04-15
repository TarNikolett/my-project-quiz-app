import firebase from 'firebase/app';

let firebaseConfig = {
  apiKey: "AIzaSyCOvPX0As9C1cwjBdK-DK6rVO6LFgUM-Zo",
  authDomain: "my-quiz-react-project.firebaseapp.com",
  projectId: "my-quiz-react-project",
  storageBucket: "my-quiz-react-project.appspot.com",
  messagingSenderId: "170658370349",
  appId: "1:170658370349:web:991ff5cb84febd3c2bb9a4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;