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

// CREATE STAFF
const createStaff = (staffObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff.json`, staffObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff/${response.data.name}.json`, body)
        .then(() => {
          getStaff().then((staffArray) => resolve(staffArray));
        });
    }).catch((error) => reject(error));
});

export { getStaff, createStaff };
