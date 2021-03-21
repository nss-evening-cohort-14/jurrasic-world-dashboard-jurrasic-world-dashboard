// chaosData.jsa
import { ebenezerButton } from '../../components/buttons/ebenezerButton';
import { stopFlyingMonkey } from '../../components/flyingMonkey';
import chaosToast from '../../components/toasts/chaosToast';
/*
const initializeToast = () => {
  $('#chaosToast').toast({
    delay: 25000
  });
};
*/
const showToast = () => {
  $('#chaosToast').toast('show');
};

const randomView = () => Math.floor((Math.random() * 3));

const chooseTarget = () => {
  let toastMessage = '';
  switch (randomView()) {
    case 0:
      toastMessage = 'Broken Ride';
      break;
    case 1:
      toastMessage = 'Broken Equipment';
      break;
    case 2:
      toastMessage = 'Kidnapped Staff';
      break;
    default:
      break;
  }
  chaosToast(toastMessage);
  showToast();
};

const showRandomMessage = () => {
  const startTimer = setInterval(chooseTarget, 10000);
  return startTimer;
};

const runChaos = () => {
  const timer = showRandomMessage();
  document.querySelector('#chaos-button-container').addEventListener('click', (e) => {
    if (e.target.id.includes('monkey-loose')) {
      clearInterval(timer);
      stopFlyingMonkey();
      ebenezerButton();
    }
  });
};

export default runChaos;
