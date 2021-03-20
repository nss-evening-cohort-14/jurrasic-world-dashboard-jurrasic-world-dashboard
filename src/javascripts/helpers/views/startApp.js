import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import loadPage from '../../components/loadPage';
import getLoadCards from '../data/loadData';
import { domEvents } from '../events/domEvents';
import { initializeToast, toastTimer } from '../data/chaosData';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  domEvents();
  getLoadCards().then((cardArray) => {
    loadPage(cardArray);
  });
  initializeToast();
  toastTimer();
};

export default startApp;
