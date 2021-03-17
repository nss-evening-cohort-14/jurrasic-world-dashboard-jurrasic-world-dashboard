import addStaffForm from '../../components/forms/addStaffForm';
import { createStaff, getSingleStaffMember, updateStaff } from '../data/staffData';
import { showStaff } from '../../components/cards/staff';
import updateStaffForm from '../../components/forms/updateStaffForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DINOSAURS

    // EQUIPMENT

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
        kidnapped: document.querySelector('#kidnapped').checked
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
        position: document.querySelector('#position').value,
        kidnapped: document.querySelector('#kidnapped').checked
      };

      updateStaff(firebaseKey, staffObject).then((staffArray) => showStaff(staffArray));
    }
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
