import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getVendors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vendors.json`)
    .then((response) => {
      const vendorArr = Object.values(response.data);
      if (response.data) {
        resolve(vendorArr);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const getSingleVendor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vendors/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      }
    }).catch((error) => reject(error));
});

const addVendor = (vendorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vendors.json`, vendorObj)
    .then((response) => {
      const keyObj = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vendors/${response.data.name}.json`, keyObj)
        .then(() => {
          getVendors()
            .then((vendorsArr) => resolve(vendorsArr))
            .catch((error) => reject(error));
        });
    });
});

const updateVendor = (firebaseKey, vendorObj) => new Promise((resolve, reject) => {
  console.warn(vendorObj);
  axios.patch(`${dbUrl}/vendors/${firebaseKey}.json`, vendorObj)
    .then(() => getVendors().then((vendorArr) => resolve(vendorArr))
      .catch((error) => reject(error)));
});

export {
  getVendors, addVendor,
  getSingleVendor, updateVendor
};
