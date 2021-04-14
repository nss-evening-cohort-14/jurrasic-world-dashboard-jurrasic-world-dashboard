import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get Vendor Staff Intermediary Data
const getVendorStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vendor_staff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Assign a staff member to a vendor

const assignStaffVendor = (staffVendorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vendor_staff.json`, staffVendorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vendor_staff/${response.data.name}.json`, body)
        .then(() => {
          getVendorStaff().then((rideStaffArray) => resolve(rideStaffArray));
        });
    }).catch((error) => reject(error));
});

export { getVendorStaff, assignStaffVendor };
