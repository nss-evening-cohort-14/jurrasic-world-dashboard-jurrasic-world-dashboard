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

export default getDinos;
