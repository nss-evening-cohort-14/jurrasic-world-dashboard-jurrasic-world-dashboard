import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

//GET ACTIVITIES LIST
const getActivities = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/activities.json`)
    .then((response) => {
      if (response.data) {
        const activitiesArray = Object.values(response.data);
        resolve(activitiesArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getActivities;
