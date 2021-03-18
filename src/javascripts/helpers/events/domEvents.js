import addVendorForm from '../../components/forms/vendorForms';
import { addVendor, getSingleVendor, updateVendor } from '../data/vendorData';
import showVendors from '../../components/vendor';
import updateVendorForm from '../../components/forms/updateVendorForm';
import { showRides } from '../../components/cards/rides';
import addRideForm from '../../components/forms/addRideForm';
import { createRides, updateRides, getSingleRide } from '../data/ridesData';
import editRideForm from '../../components/forms/editRideForm';
import addStaffForm from '../../components/forms/addStaffForm';
import { createStaff, getSingleStaffMember, updateStaff } from '../data/staffData';
import { showStaff } from '../../components/cards/staff';
import updateStaffForm from '../../components/forms/updateStaffForm';
import {
  createDino, deleteDino, getSingleDino, updateDino
} from '../data/dinoData';
import { showDinos } from '../../components/cards/dinos';
import addDinoForm from '../../components/forms/addDinoForm';
import updateDinoForm from '../../components/forms/updateDinoForm';
import { showEquipment } from '../../components/cards/equipment';
import addEquipmentForm from '../../components/forms/addEquipmentFrom';
import { createEquipment, getSingleEquipment, updateEquipment } from '../data/equipmentData';
import updateEquipmentForm from '../../components/forms/updateEquipmentForm';
import formModal from '../../components/forms/formModal';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DINOSAURS
    if (e.target.id.includes('add-dino-btn')) {
      formModal('Add a Dino');
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
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('update-dino-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Dinos');
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
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('delete-dino-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteDino(firebaseKey).then((dinosArray) => showDinos(dinosArray));
      }
    }

    // EQUIPMENT
    if (e.target.id.includes('add-equipment-btn')) {
      formModal('Add Equipment');
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
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('update-equipment-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Equipment');
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
      $('#formModal').modal('toggle');
    }
    // RIDES
    if (e.target.id.includes('add-ride-btn')) {
      formModal('Add a Ride');
      addRideForm();
    }

    if (e.target.id.includes('submit-ride')) {
      e.preventDefault();
      const rideObj = {
        broken: false,
        name: document.querySelector('#ride-name').value,
        image: document.querySelector('#ride-image').value,
        description: document.querySelector('#ride-description').value
      };
      document.querySelector('form').reset();
      createRides(rideObj).then((ridesArray) => showRides(ridesArray));
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('edit-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Ride');
      getSingleRide(firebaseKey).then((rideObj) => editRideForm(rideObj));
    }

    if (e.target.id.includes('update-ride')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const rideObj = {
        name: document.querySelector('#ride-name').value,
        image: document.querySelector('#ride-image').value,
        description: document.querySelector('#ride-description').value
      };
      updateRides(rideObj, firebaseKey).then((ridesArray) => showRides(ridesArray));
      $('#formModal').modal('toggle');
    }

    // STAFF
    if (e.target.id.includes('add-staff-btn')) {
      formModal('Add Staff Member');
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
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('staff-update-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Staff Member');
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
      $('#formModal').modal('toggle');
    }
    // VENDORS
    if (e.target.id === 'new-vendor-btn') {
      formModal('Add a Vendor');
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
        });
      }
      $('#formModal').modal('toggle');
    }
    if (e.target.id.includes('edit-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Add a Vendor');
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
      if (vendorObj.name && vendorObj.description) {
        updateVendor(firebaseKey, vendorObj).then(() => {
          showVendors();
        });
      }
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
