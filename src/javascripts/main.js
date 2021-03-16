// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './helpers/auth';
import startApp from './helpers/views/startApp';

const init = () => {
  // USE WITH FIREBASE AUTH
  startApp();
  checkLoginStatus();
};

init();
