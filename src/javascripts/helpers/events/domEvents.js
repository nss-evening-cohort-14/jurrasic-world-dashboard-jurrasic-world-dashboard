import addStaffForm from '../../components/forms/addStaffForm';
import { createStaff } from '../data/staffData';
import { showStaff } from '../../components/cards/staff';

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
