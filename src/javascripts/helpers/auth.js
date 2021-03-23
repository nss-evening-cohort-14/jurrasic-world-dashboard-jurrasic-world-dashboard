import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import firebaseConfig from './apiKeys';
import startApp from './views/startApp';
import logoutButton from '../components/buttons/logoutButton';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp();
    if (user) {
      logoutButton();
    } else loginButton();
  });
};

export default checkLoginStatus;
