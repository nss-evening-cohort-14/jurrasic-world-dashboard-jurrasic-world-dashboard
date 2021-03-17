// formEvents.js

import showVendors from '../../components/vendor';
import { addVendor } from '../data/vendorData';
import { closeVendorForm } from '../../components/forms/vendorForms';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
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
  });
};

export default formEvents;
