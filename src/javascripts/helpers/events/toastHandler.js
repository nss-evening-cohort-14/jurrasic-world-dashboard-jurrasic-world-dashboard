// toastHandler.js

const initializeToast = () => {
  $('#chaosToast').toast({
    delay: 5000
  });
};

const showToast = () => {
  $('#chaosToast').toast('show');
};

export { initializeToast, showToast };
