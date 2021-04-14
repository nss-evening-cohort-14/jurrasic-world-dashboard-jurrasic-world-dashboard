import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get Dino Staff Intermediary Data
const getDinoStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dinoStaff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Assign a staff member to a dino

const assignStaffDino = (staffDinoObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/dinoStaff.json`, staffDinoObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/dinoStaff/${response.data.name}.json`, body)
        .then(() => {
          getDinoStaff().then((dinoStaffArray) => resolve(dinoStaffArray));
        });
    }).catch((error) => reject(error));
});

export { getDinoStaff, assignStaffDino };
