import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
};

export default startApp;
