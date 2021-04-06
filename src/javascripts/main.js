import 'bootstrap';
import '../styles/main.scss';
import checkLoginStatus from './helpers/auth';

const init = () => {
  checkLoginStatus();
};

init();
