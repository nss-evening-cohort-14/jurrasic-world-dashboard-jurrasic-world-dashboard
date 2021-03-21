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

const chooseTarget = () => {
  const messageArr = [
    'Your Jurassic World experience may be temporarily impacted. A staff member has gone missing.',
    'Your Jurassic World experience may be temporarily impacted. We are currently experiencing technical difficulties with our equipment.',
    'Your Jurassic World experience may be temporarily impacted. We are currently experiencing technical difficulties with a ride.'
  ];
  const message = messageArr[Math.floor(Math.random() * messageArr.length)];
  chaosToast(message);
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
