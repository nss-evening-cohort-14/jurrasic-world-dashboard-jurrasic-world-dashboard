import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import loadPage from '../../components/loadPage';
import getLoadCards from '../data/loadData';
import { domEvents } from '../events/domEvents';
import chaosToast from '../../components/toasts/chaosToast';
import { initializeToast, showToast } from '../events/toastHandler';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  domEvents();
  chaosToast('Hello World');
  getLoadCards().then((cardArray) => {
    loadPage(cardArray);
  });
  initializeToast();
  showToast();
};

export default startApp;
