import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navbar';
import navigationEvents from '../events/navEvents';
import loadPage from '../../components/loadPage';
import getLoadCards from '../data/loadData';
import { domEvents } from '../events/domEvents';
// import { runChaos } from '../data/chaosData';
// import chaosToast from '../../components/toasts/chaosToast';
// import flyingMonkey from '../../components/flyingMonkey';
import { ebenezerButton } from '../../components/buttons/ebenezerButton';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  ebenezerButton();
  domEvents();
  getLoadCards().then((cardArray) => {
    loadPage(cardArray);
  });
};

export default startApp;
