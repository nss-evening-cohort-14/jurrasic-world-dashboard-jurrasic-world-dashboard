import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getLoadCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/loadCards.json`)
    .then((response) => {
      const cardArray = Object.values(response.data);
      resolve(cardArray);
    }).catch((error) => reject(error));
});

export default getLoadCards;
