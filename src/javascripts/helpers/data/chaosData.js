// chaosData.jsa
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
  // setInterval(chooseTarget, 7000);
  // clearInterval(chaosInterval);
  return startTimer;
};

const stopChaos = (timer) => {
  clearInterval(timer);
};

const runChaos = () => {
  // initializeToast();
  const timer = showRandomMessage();
  document.querySelector('#card-container').addEventListener('click', () => {
    console.warn('clicked stop chaos');
    stopChaos(timer);
  });
  // setTimeOut(showRandomMessage, 10000);
};

export { runChaos, stopChaos };
