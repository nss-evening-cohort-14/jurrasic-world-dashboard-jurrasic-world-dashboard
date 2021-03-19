import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEquipment = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/equipment.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createEquipment = (equipmentObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/equipment.json`, equipmentObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/equipment/${response.data.name}.json`, body)
        .then(() => {
          getEquipment().then((equipmentArray) => resolve(equipmentArray));
        });
    }).catch((error) => reject(error));
});

const getSingleEquipment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/equipment/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateEquipment = (firebaseKey, equipmentObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/equipment/${firebaseKey}.json`, equipmentObject)
    .then(() => getEquipment()).then((equipmentArray) => resolve(equipmentArray))
    .catch((error) => reject(error));
});

const deleteEquipment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/equipment/${firebaseKey}.json`)
    .then(() => getEquipment().then((equipmentArray) => resolve(equipmentArray)))
    .catch((error) => reject(error));
});

export {
  getEquipment,
  createEquipment,
  getSingleEquipment,
  updateEquipment,
  deleteEquipment
};
