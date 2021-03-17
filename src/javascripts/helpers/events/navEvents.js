import vendorPage from '../../components/vendor';
import { showRides, emptyRides } from '../../components/rides';
import getRides from '../ridesData';
import { emptyDinos, showDinos } from '../../components/cards/dinos';
import getDinos from '../data/dinoData';
import { showStaff, emptyStaff } from '../../components/cards/staff';
import getStaff from '../data/staffData';

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
    console.warn('VENDORS');
    vendorPage();
  });

  document.querySelector('#equipment').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#rides').addEventListener('click', () => {
    getRides().then((ridesArray) => {
      if (ridesArray.length) {
        showRides(ridesArray);
      } else {
        emptyRides();
      }
    });
  });
};

export default navigationEvents;
