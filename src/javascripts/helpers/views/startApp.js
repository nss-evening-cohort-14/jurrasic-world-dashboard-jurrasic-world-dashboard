import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import domEvents from '../events/domEvents';
import loadPage from '../../components/loadPage';
import getLoadCards from '../data/loadData';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  domEvents();
  getLoadCards().then((cardArray) => {
    loadPage(cardArray);
  });
};

export default startApp;
