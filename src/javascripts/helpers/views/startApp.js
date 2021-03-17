import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  domEvents();
};

export default startApp;
