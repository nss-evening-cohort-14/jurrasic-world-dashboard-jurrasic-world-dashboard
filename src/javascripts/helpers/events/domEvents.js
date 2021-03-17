import { addVendorForm, closeVendorForm } from '../../components/forms/vendorForms';
import formEvents from './formEvents';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    // DINOSAURS

    // EQUIPMENT

    // RIDES

    // STAFF

    // VENDORS
    if (e.target.id.includes('add-vendor')) {
      addVendorForm();
      formEvents();
    }
    if (e.target.id.includes('close-add-vendor')) {
      closeVendorForm();
    }
    if (e.target.id.includes('delete-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(firebaseKey);
    }
  });
};

export default domEvents;
