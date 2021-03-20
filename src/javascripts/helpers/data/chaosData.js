import chaosToast from '../../components/toasts/toast';

// toastHandler.js

const initializeToast = (message) => {
  chaosToast(message);
  $('#chaosToast').toast({
    delay: 15000
  });
};
const showToast = () => {
  $('#chaosToast').toast('show');
};

const toastTimer = () => {
  window.setTimeout(showToast, 5000);
};

export { initializeToast, showToast, toastTimer };
