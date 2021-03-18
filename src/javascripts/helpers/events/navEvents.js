import { emptyEquipment, showEquipment } from '../../components/cards/equipment';
import getEquipment from '../data/equipmentData';
import showVendors from '../../components/vendor';
import { showRides, emptyRides } from '../../components/cards/rides';
import { getRides } from '../data/ridesData';
import { emptyDinos, showDinos } from '../../components/cards/dinos';
import { getDinos } from '../data/dinoData';
import { showStaff, emptyStaff } from '../../components/cards/staff';
import { getStaff } from '../data/staffData';

const navigationEvents = () => {
  document.querySelector('#dinosaurs').addEventListener('click', (e) => {
    if (e.target.id.includes('dinosaurs')) {
      e.preventDefault();
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
    getStaff().then((staffArray) => {
      if (staffArray.length) {
        showStaff(staffArray);
      } else {
        emptyStaff();
      }
    });
  });

  document.querySelector('#vendors').addEventListener('click', () => {
    showVendors();
  });

  document.querySelector('#equipment').addEventListener('click', () => {
    getEquipment().then((equipmentArray) => {
      if (equipmentArray.length) {
        showEquipment(equipmentArray);
      } else {
        emptyEquipment();
      }
    });
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
