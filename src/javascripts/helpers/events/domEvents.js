import { showRides } from '../../components/cards/rides';
import addRideForm from '../../components/addRideForm';
import { createRides, updateRides, getSingleRide } from '../data/ridesData';
import editRideForm from '../../components/editRideForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    // DINOSAURS

    // EQUIPMENT

    // RIDES
    if (e.target.id.includes('add-ride-btn')) {
      addRideForm();
    }

    if (e.target.id.includes('submit-ride')) {
      e.preventDefault();
      const rideObj = {
        name: document.querySelector('#ride-name').value,
        image: document.querySelector('#ride-image').value,
        description: document.querySelector('#ride-description').value
      };
      document.querySelector('form').reset();
      createRides(rideObj).then((ridesArray) => showRides(ridesArray));
    }

    if (e.target.id.includes('edit-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleRide(firebaseKey).then((rideObj) => editRideForm(rideObj));
    }

    if (e.target.id.includes('update-ride')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const rideObj = {
        name: document.querySelector('#ride-name').value,
        image: document.querySelector('#ride-image').value,
        description: document.querySelector('#ride-description').value
      };
      console.warn(firebaseKey);
      updateRides(rideObj, firebaseKey).then((ridesArray) => showRides(ridesArray));
    }

    // STAFF

    // VENDORS
    if (e.target.id.includes('delete-vendor')) {
      console.warn('DELETE VENDOR');
    }
    if (e.target.id.includes('edit-vendor')) {
      console.warn('EDIT VENDOR');
    }
  });
};

export default domEvents;
