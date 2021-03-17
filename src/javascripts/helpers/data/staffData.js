import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET STAFF
const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json`)
    .then((response) => {
      if (response.data) {
        const staffArray = Object.values(response.data);
        resolve(staffArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getStaff;
