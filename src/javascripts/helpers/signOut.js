import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  document.querySelector('body').removeEventListener('click', navigationEvents);
  firebase.auth().signOut();
  window.location.reload();
};

export default signOut;
