import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getRides = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/rides.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createRides = (rideObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/rides.json`, rideObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/rides/${response.data.name}.json`, body)
        .then(() => {
          getRides().then((ridesArray) => resolve(ridesArray));
        });
    }).catch((error) => reject(error));
});

const getSingleRide = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/rides/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateRides = (rideObj, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/rides/${firebaseKey}.json`, rideObj)
    .then(() => {
      getRides().then((ridesArray) => resolve(ridesArray));
    }).catch((error) => reject(error));
});

export {
  getRides, createRides, updateRides, getSingleRide
};
