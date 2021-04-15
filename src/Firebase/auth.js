import firebase from './FirebaseConfig.js';
import '@firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

export default firebase.auth;

export {provider};