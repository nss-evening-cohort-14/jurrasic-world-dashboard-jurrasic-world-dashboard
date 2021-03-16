import vendorPage from '../../components/vendor';

const navigationEvents = () => {
  document.querySelector('#dinosaurs').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#staff').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#vendors').addEventListener('click', () => {
    console.warn('VENDORS');
    vendorPage();
  });

  document.querySelector('#equipment').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#rides').addEventListener('click', () => {
    console.warn('CONNECTED');
  });
};

export default navigationEvents;
