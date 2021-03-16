import { emptyDinos, showDinos } from '../../components/cards/dinos';
import getDinos from '../data/dinoData';

const navigationEvents = () => {
  document.querySelector('#dinosaurs').addEventListener('click', (e) => {
    // SHOW DINOS FROM NAVBAR BUTTON
    if (e.target.id.includes('dinosaurs')) {
      e.preventDefault();
      // document.querySelector('#form-container').innerHTML = '';
      document.querySelector('#card-container').innerHTML = '';

      getDinos().then((dinosArray) => {
        if (dinosArray.length) {
          showDinos(dinosArray);
        } else {
          emptyDinos();
        }
      });
    }
  });

  document.querySelector('#staff').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#vendors').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#equipment').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#rides').addEventListener('click', () => {
    console.warn('CONNECTED');
  });
};

export default navigationEvents;
