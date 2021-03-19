import firebase from 'firebase/app';
import 'firebase/auth';
import { domEventsListener } from '../helpers/events/domEvents';

const signMeOut = () => {
  document.querySelector('body').removeEventListener('click', domEventsListener);
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
