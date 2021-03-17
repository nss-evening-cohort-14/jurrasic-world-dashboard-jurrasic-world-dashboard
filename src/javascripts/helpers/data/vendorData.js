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

export { getVendors, addVendor };
