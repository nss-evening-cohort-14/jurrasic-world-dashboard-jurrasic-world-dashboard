import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import loadPage from '../../components/loadPage';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  domEvents();
  loadPage();
};

export default startApp;
