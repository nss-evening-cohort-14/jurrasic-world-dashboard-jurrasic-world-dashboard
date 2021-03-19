import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../helpers/events/domEvents';
import navigationEvents from '../helpers/events/navEvents';

const signMeOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  document.querySelector('body').removeEventListener('click', navigationEvents);
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
