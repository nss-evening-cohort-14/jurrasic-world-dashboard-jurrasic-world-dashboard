import addVendorForm from '../../components/forms/vendorForms';
import {
  addVendor, deleteVendor,
  getSingleVendor, getVendors, updateVendor
} from '../data/vendorData';
import showVendors from '../../components/vendor';
import updateVendorForm from '../../components/forms/updateVendorForm';
import { emptyRides, showRides } from '../../components/cards/rides';
import addRideForm from '../../components/forms/addRideForm';
import {
  createRides, updateRides, getSingleRide, deleteRide, getRides
} from '../data/ridesData';
import editRideForm from '../../components/forms/editRideForm';
import addStaffForm from '../../components/forms/addStaffForm';
import {
  createStaff, getSingleStaffMember, updateStaff,
  deleteStaff, getStaff
} from '../data/staffData';
import { emptyStaff, showStaff } from '../../components/cards/staff';
import updateStaffForm from '../../components/forms/updateStaffForm';
import {
  createDino, deleteDino, getDinos, getSingleDino, updateDino
} from '../data/dinoData';
import { emptyDinos, showDinos } from '../../components/cards/dinos';
import addDinoForm from '../../components/forms/addDinoForm';
import updateDinoForm from '../../components/forms/updateDinoForm';
import { emptyEquipment, showEquipment } from '../../components/cards/equipment';
import addEquipmentForm from '../../components/forms/addEquipmentFrom';
import {
  createEquipment, getSingleEquipment, updateEquipment, deleteEquipment, getEquipment, assignEquipmentStaff
} from '../data/equipmentData';
import updateEquipmentForm from '../../components/forms/updateEquipmentForm';
import formModal from '../../components/forms/formModal';
import runChaos from '../data/chaosData';
import { flyingMonkey } from '../../components/flyingMonkey';
import { ebenezerLooseButton } from '../../components/buttons/ebenezerButton';
import staffMemberModal from '../../components/forms/staffMemberModal';
import staffMemberRole from '../../components/forms/staffMemberRole';
import { assignStaffDino } from '../data/dinoStaffData';
import { assignStaffVendor } from '../data/vendorStaffData';
import { assignStaffRide } from '../data/rideStaffData';
import assignEquipmentForm from '../../components/forms/assignEquipmentForm';
import checkEquipment from '../../components/buttons/equipmentButton';

const domEventsListener = (e) => {
  // LOAD PAGE CARDS
  if (e.target.id.includes('-MW5Wenvcp9YhgEaOz79')) {
    getDinos().then((dinosArray) => {
      if (dinosArray.length) {
        showDinos(dinosArray);
      } else {
        emptyDinos();
      }
    });
  }

  if (e.target.id.includes('-MW5Wenwp-atMNNLMqlW')) {
    getStaff().then((staffArray) => {
      if (staffArray.length) {
        showStaff(staffArray);
      } else {
        emptyStaff();
      }
    });
  }

  if (e.target.id.includes('-MW5Wenwp-atMNNLMqlX')) {
    getVendors().then((vendorArr) => showVendors(vendorArr));
  }

  if (e.target.id.includes('-MW5WenxyDSu15c-pi8R')) {
    getEquipment().then((equipmentArray) => {
      if (equipmentArray.length) {
        showEquipment(equipmentArray);
      } else {
        emptyEquipment();
      }
    });
  }

  if (e.target.id.includes('-MW5WenyoBtn7HWyRVKc')) {
    getRides().then((ridesArray) => {
      if (ridesArray.length) {
        showRides(ridesArray);
      } else {
        emptyRides();
      }
    });
  }
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

  if (e.target.id.includes('assign-equipment')) {
    const firebaseKey = e.target.id.split('--')[1];
    formModal('Assign Equipment');
    assignEquipmentForm(firebaseKey);
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('submit-assignment')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    const equipmentStaffObject = {
      equipment_firebaseKey: firebaseKey,
      staff_firebaseKey: document.querySelector('#selected-staff').value,
    };
    assignEquipmentStaff(equipmentStaffObject);
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('check-equipment')) {
    checkEquipment();
  }

  if (e.target.id.includes('delete-ride')) {
    const firebasekey = e.target.id.split('--')[1];
    deleteRide(firebasekey).then((ridesArray) => showRides(ridesArray));
  }

  // STAFF
  if (e.target.id.includes('add-staff-btn')) {
    formModal('Add Staff Member');
    addStaffForm();
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

  if (e.target.id.includes('delete-equipment')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteEquipment(firebaseKey).then((equipmentArray) => showEquipment(equipmentArray));
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

  if (e.target.id.includes('staff-delete-btn')) {
    const firebaseKey = e.target.id.split('--')[1];
    deleteStaff(firebaseKey).then((staffArray) => showStaff(staffArray));
  }
  // VENDORS
  if (e.target.id === 'new-vendor-btn') {
    e.preventDefault();
    formModal('Add a Vendor');
    addVendorForm();
  }
  if (e.target.id.includes('delete-vendor')) {
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    deleteVendor(firebaseKey).then((vendorArr) => showVendors(vendorArr));
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
      addVendor(vendorObj).then((vendorArr) => {
        showVendors(vendorArr);
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
    e.preventDefault();
    const firebaseKey = e.target.id.split('--')[1];
    const vendorObj = {
      name: document.querySelector('#vendor-name').value,
      description: document.querySelector('#vendor-description').value,
      products: document.querySelector('#vendor-products').value,
      imageUrl: document.querySelector('#vendor-image-url').value
    };
    if (vendorObj.name && vendorObj.description) {
      updateVendor(firebaseKey, vendorObj).then((vendorArr) => {
        showVendors(vendorArr);
      });
    }
    $('#formModal').modal('toggle');
  }
  if (e.target.id.includes('ebenezer')) {
    runChaos();
    flyingMonkey();
    setTimeout(ebenezerLooseButton(), 5000);
  }
  if (e.target.id.includes('assign-staff-members-btn')) {
    formModal('Assign a Staff Member');
    staffMemberModal();
  }
  if (e.target.id.includes('assigned-staff-dino-submit')) {
    e.preventDefault();
    const dinoFirebaseKey = document.querySelector('#staff-target-options').value;
    const staffFirebaseKey = document.querySelector('#staff-member-options').value;
    const staffDinoObj = {
      staff_firebaseKey: staffFirebaseKey,
      dino_firebaseKey: dinoFirebaseKey
    };
    assignStaffDino(staffDinoObj);
    $('#formModal').modal('toggle');
  }
  if (e.target.id.includes('assigned-staff-vendor-submit')) {
    e.preventDefault();
    const vendorFirebaseKey = document.querySelector('#staff-target-options').value;
    const staffFirebaseKey = document.querySelector('#staff-member-options').value;
    const staffVendorObj = {
      staff_firebaseKey: staffFirebaseKey,
      vendor_firebaseKey: vendorFirebaseKey
    };
    assignStaffVendor(staffVendorObj);
    $('#formModal').modal('toggle');
  }
  if (e.target.id.includes('assigned-staff-ride-submit')) {
    e.preventDefault();
    const rideFirebaseKey = document.querySelector('#staff-target-options').value;
    const staffFirebaseKey = document.querySelector('#staff-member-options').value;
    const staffRideObj = {
      staff_firebaseKey: staffFirebaseKey,
      ride_firebaseKey: rideFirebaseKey
    };
    assignStaffRide(staffRideObj);
    $('#formModal').modal('toggle');
  }

  if (e.target.id.includes('assigned-staff-next')) {
    const roleValue = document.querySelector('#chosen-role').value;
    staffMemberRole(roleValue);
  }
};

const domEvents = () => document.querySelector('body').addEventListener('click', domEventsListener);

export { domEvents, domEventsListener };
