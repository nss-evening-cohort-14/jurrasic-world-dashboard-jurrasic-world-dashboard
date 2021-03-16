import { showStaff, emptyStaff } from '../../components/cards/staff';
import getStaff from '../data/staffData';

const navigationEvents = () => {
  document.querySelector('#dinosaurs').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#staff').addEventListener('click', () => {
    document.querySelector('#title-container').innerHTML = '';
    document.querySelector('#card-container').innerHTML = '';
    getStaff().then((staffArray) => {
      if (staffArray.length) {
        showStaff(staffArray);
      } else {
        emptyStaff();
      }
    });
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
