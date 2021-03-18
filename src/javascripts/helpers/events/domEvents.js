import { addVendorForm, closeVendorForm } from '../../components/forms/vendorForms';
import { addVendor, getSingleVendor, updateVendor } from '../data/vendorData';
import showVendors from '../../components/vendor';
import { updateVendorForm, closeUpdateVendorForm } from '../../components/forms/updateVendorForm';
// import formEvents from './formEvents';
import addStaffForm from '../../components/forms/addStaffForm';
import { createStaff, getSingleStaffMember, updateStaff } from '../data/staffData';
import { showStaff } from '../../components/cards/staff';
import updateStaffForm from '../../components/forms/updateStaffForm';
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

    if (e.target.id.includes('edit-dino')) {
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
        broken: false,
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

    if (e.target.id.includes('edit-equipment')) {
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
    if (e.target.id.includes('add-staff-btn')) {
      addStaffForm();
    }

    if (e.target.id.includes('submit-staff-btn')) {
      e.preventDefault();
      const staffObject = {
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        name: document.querySelector('#name').value,
        position: document.querySelector('#position').value,
        kidnapped: false
      };
      createStaff(staffObject).then((staffArray) => showStaff(staffArray));
      document.querySelector('form').reset();
    }

    if (e.target.id.includes('staff-update-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleStaffMember(firebaseKey).then((staffObject) => updateStaffForm(staffObject));
    }

    if (e.target.id.includes('submit-updated-staff-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const staffObject = {
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        name: document.querySelector('#name').value,
        position: document.querySelector('#position').value
      };

      updateStaff(firebaseKey, staffObject).then((staffArray) => showStaff(staffArray));
    }
    // VENDORS
    if (e.target.id === 'new-vendor-btn') {
      addVendorForm();
    }
    if (e.target.id.includes('delete-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(firebaseKey);
    }
    if (e.target.id.includes('submit-add-vendor')) {
      e.preventDefault();
      const vendorObj = {
        name: document.querySelector('#vendor-name').value,
        description: document.querySelector('#vendor-description').value,
        products: document.querySelector('#vendor-products').value,
        imageUrl: document.querySelector('#vendor-image-url').value
      };
      if (vendorObj.name && vendorObj.description) {
        addVendor(vendorObj).then(() => {
          showVendors();
          closeVendorForm();
        });
      }
    }
    if (e.target.id.includes('close-add-vendor')) {
      closeVendorForm();
    }
    if (e.target.id.includes('edit-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleVendor(firebaseKey).then((vendorObj) => {
        updateVendorForm(vendorObj);
      });
    }
    if (e.target.id.includes('submit-update-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      const vendorObj = {
        name: document.querySelector('#vendor-name').value,
        description: document.querySelector('#vendor-description').value,
        products: document.querySelector('#vendor-products').value,
        imageUrl: document.querySelector('#vendor-image-url').value
      };
      console.warn(vendorObj);
      if (vendorObj.name && vendorObj.description) {
        updateVendor(firebaseKey, vendorObj).then(() => {
          showVendors();
          closeUpdateVendorForm();
        });
      }
    }
    if (e.target.id.includes('close-update-vendor')) {
      closeUpdateVendorForm();
    }
  });
};

export default domEvents;
