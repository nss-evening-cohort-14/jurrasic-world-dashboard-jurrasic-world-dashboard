import { addVendorForm, closeVendorForm } from '../../components/forms/vendorForms';
import { addVendor, getSingleVendor, updateVendor } from '../data/vendorData';
import showVendors from '../../components/vendor';
import { updateVendorForm, closeUpdateVendorForm } from '../../components/forms/updateVendorForm';
// import formEvents from './formEvents';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    // DINOSAURS

    // EQUIPMENT

    // RIDES

    // STAFF

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
