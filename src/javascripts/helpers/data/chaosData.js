import chaosToast from '../../components/toasts/toast';

// toastHandler.js
const randomMessage = () => {
  const messageArr = [
    'Your Jurassic World experience may be temporarily impacted. A staff member has gone missing.',
    'Your Jurassic World experience may be temporarily impacted. We are currently experiencing technical difficulties with our equipment.',
    'Your Jurassic World experience may be temporarily impacted. We are currently experiencing technical difficulties with a ride.'
  ];
  const message = messageArr[Math.floor(Math.random() * messageArr.length)];
  chaosToast(message);
};

const initializeToast = () => {
  $('#chaosToast').toast({
    delay: 5000
  });
};
const showToast = () => {
  randomMessage();
  $('#chaosToast').toast('show');
};

const toastTimer = () => {
  window.setInterval(showToast, 10000);
};

export { initializeToast, showToast, toastTimer };
