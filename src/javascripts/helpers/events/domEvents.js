import { showRides } from '../../components/cards/rides';
import ridesForm from '../../components/ridesForm';
import { createRides } from '../data/ridesData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    // DINOSAURS

    // EQUIPMENT

    // RIDES
    if (e.target.id.includes('add-ride-btn')) {
      ridesForm();
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
