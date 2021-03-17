import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDinos = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dinosaurs.json`)
    .then((response) => {
      if (response.data) {
        const dinoArray = Object.values(response.data);
        resolve(dinoArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createDino = (dinoObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/dinosaurs.json`, dinoObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/dinosaurs/${response.data.name}.json`, body)
        .then(() => {
          getDinos().then((dinosArray) => resolve(dinosArray));
        });
    }).catch((error) => reject(error));
});

const getSingleDino = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dinosaurs/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateDino = (firebaseKey, dinoObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/dinosaurs/${firebaseKey}.json`, dinoObject)
    .then(() => getDinos())
    .then((dinosArray) => resolve(dinosArray))
    .catch((error) => reject(error));
});

export {
  getDinos, createDino, getSingleDino, updateDino
};
