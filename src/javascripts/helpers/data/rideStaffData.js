import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// Get Ride Staff Intermediary Data
const getRideStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/ride_staff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Assign a staff member to a ride

const assignStaffRide = (staffRideObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/ride_staff.json`, staffRideObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/ride_staff/${response.data.name}.json`, body)
        .then(() => {
          getRideStaff().then((rideStaffArray) => resolve(rideStaffArray));
        });
    }).catch((error) => reject(error));
});

export { getRideStaff, assignStaffRide };
