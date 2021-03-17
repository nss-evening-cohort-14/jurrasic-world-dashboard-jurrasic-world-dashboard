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

export default getVendors;
