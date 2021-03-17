import { createDino, getSingleDino, updateDino } from '../data/dinoData';
import { showDinos } from '../../components/cards/dinos';
import addDinoForm from '../../components/forms/addDinoForm';
import updateDinoForm from '../../components/forms/updateDinoForm';
import { showEquipment } from '../../components/cards/equipment';
import addEquipmentForm from '../../components/forms/addEquipmentFrom';
import { createEquipment, getSingleEquipment, updateEquipment } from '../data/equipmentData';
import updateEquipmentForm from '../../components/forms/updateEquipmentForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DINOSAURS
    if (e.target.id.includes('add-dino-btn')) {
      addDinoForm();
    }

    if (e.target.id.includes('submit-dino')) {
      e.preventDefault();
      const dinoObject = {
        image: document.querySelector('#image').value,
        diet: document.querySelector('#diet').value,
        height: document.querySelector('#height').value,
        weight: document.querySelector('#weight').value,
        species: document.querySelector('#species').value
      };
      createDino(dinoObject).then((dinoArray) => showDinos(dinoArray));
    }

    if (e.target.id.includes('update-dino-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleDino(firebaseKey).then((dinoObject) => updateDinoForm(dinoObject));
    }

    if (e.target.id.includes('update-dino')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const dinoObject = {
        image: document.querySelector('#image').value,
        diet: document.querySelector('#diet').value,
        height: document.querySelector('#height').value,
        weight: document.querySelector('#weight').value,
        species: document.querySelector('#species').value
      };

      updateDino(firebaseKey, dinoObject).then((dinosArray) => showDinos(dinosArray));
    }
    // EQUIPMENT
    if (e.target.id.includes('add-equipment-btn')) {
      addEquipmentForm();
    }

    if (e.target.id.includes('submit-equipment')) {
      e.preventDefault();
      const equipmentObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value
      };
      createEquipment(equipmentObject).then((equipmentArray) => showEquipment(equipmentArray));
    }

    if (e.target.id.includes('update-equipment-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleEquipment(firebaseKey).then((equipmentObject) => updateEquipmentForm(equipmentObject));
    }

    if (e.target.id.includes('update-equipment')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const equipmentObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value
      };

      updateEquipment(firebaseKey, equipmentObject).then((equipmentArray) => showEquipment(equipmentArray));
    }
    // RIDES

    // STAFF

    // VENDORS
    if (e.target.id.includes('delete-vendor')) {
      console.warn('DELETE VENDOR');
    }
    if (e.target.id.includes('edit-vendor')) {
      console.warn('EDIT VENDOR');
    }
  });
};

export default domEvents;
