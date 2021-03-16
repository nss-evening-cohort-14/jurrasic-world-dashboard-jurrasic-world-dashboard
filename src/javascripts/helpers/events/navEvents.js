import { emptyEquipment, showEquipment } from '../../components/equipment';
import getEquipment from '../equipmentData';

const navigationEvents = () => {
  document.querySelector('#dinosaurs').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#staff').addEventListener('click', () => {
    console.warn('CONNECTED');
  });

  document.querySelector('#vendors').addEventListener('click', () => {
    console.warn('CONNECTED');
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
    console.warn('CONNECTED');
  });
};

export default navigationEvents;
