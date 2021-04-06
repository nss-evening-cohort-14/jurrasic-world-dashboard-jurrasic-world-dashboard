import { emptyEquipment, showEquipment } from '../../components/cards/equipment';
import { getEquipment } from '../data/equipmentData';
import showVendors from '../../components/vendor';
import { showRides, emptyRides } from '../../components/cards/rides';
import { getRides } from '../data/ridesData';
import { emptyDinos, showDinos } from '../../components/cards/dinos';
import { getDinos } from '../data/dinoData';
import { showStaff, emptyStaff } from '../../components/cards/staff';
import { getStaff } from '../data/staffData';
import loadPage from '../../components/loadPage';
import getLoadCards from '../data/loadData';
import { getVendors } from '../data/vendorData';

const navigationEvents = () => {
  document.querySelector('#home').addEventListener('click', () => {
    getLoadCards().then((cardArray) => {
      loadPage(cardArray);
    });
  });

  document.querySelector('#dinosaurs').addEventListener('click', () => {
    getDinos().then((dinosArray) => {
      if (dinosArray.length) {
        showDinos(dinosArray);
      } else {
        emptyDinos();
      }
    });
  });

  document.querySelector('#staff').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#title-container').innerHTML = '';
    getStaff().then((staffArray) => {
      if (staffArray.length) {
        showStaff(staffArray);
      } else {
        emptyStaff();
      }
    });
  });

  document.querySelector('#vendors').addEventListener('click', (e) => {
    e.preventDefault();
    getVendors().then((vendorArr) => showVendors(vendorArr));
  });

  document.querySelector('#equipment').addEventListener('click', (e) => {
    e.preventDefault();
    getEquipment().then((equipmentArray) => {
      if (equipmentArray.length) {
        showEquipment(equipmentArray);
      } else {
        emptyEquipment();
      }
    });
  });

  document.querySelector('#rides').addEventListener('click', (e) => {
    e.preventDefault();
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
