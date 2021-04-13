import { getDinos } from '../../helpers/data/dinoData';
import { getRides } from '../../helpers/data/ridesData';
import { getVendors } from '../../helpers/data/vendorData';

const staffMemberRole = (role) => {
  document.querySelector('#specific-activity').innerHTML = '';
  // let domString = `
  //   <label for="roles">Choose a Target</label>
  //   <select name="staff-target" id="staff-target-options">
  // `;
  if (role === 'dino') {
    let domString = ` 
    <label for="roles">Choose a Dino</label>
    <select name="staff-target" id="staff-target-options">
  `;
    getDinos().then((dinoArray) => {
      dinoArray.forEach((dino) => {
        domString += `
            <option value="${dino.firebaseKey}">${dino.species}</option>
          `;
      });
      domString += '</select>';

      document.querySelector('#specific-activity').innerHTML = domString;
      document.querySelector('#staff-form-buttons').innerHTML = `
      <button type="button" class="btn btn-success" id="assigned-staff-next">Reset Activity</button>
      <button type="button" class="btn btn-success" id="assigned-staff-submit">Assign</button>`;
    });
  } else if (role === 'vendor') {
    let domString = ` 
    <label for="roles">Choose a Vendor</label>
    <select name="staff-target" id="staff-target-options">
  `;
    getVendors().then((vendorArray) => {
      vendorArray.forEach((vendor) => {
        domString += `
            <option value="${vendor.firebaseKey}">${vendor.name}</option>
          `;
      });
      domString += '</select>';

      document.querySelector('#specific-activity').innerHTML = domString;
      document.querySelector('#staff-form-buttons').innerHTML = `
      <button type="button" class="btn btn-success" id="assigned-staff-next">Reset Activity</button>
      <button type="button" class="btn btn-success" id="assigned-staff-submit">Assign</button>`;
    });
  } else if (role === 'ride') {
    let domString = ` 
    <label for="roles">Choose a Ride</label>
    <select name="staff-target" id="staff-target-options">
  `;
    getRides().then((ridesArray) => {
      ridesArray.forEach((ride) => {
        domString += `
            <option value="${ride.firebaseKey}">${ride.name}</option>
          `;
      });
      domString += '</select>';

      document.querySelector('#specific-activity').innerHTML = domString;
      document.querySelector('#staff-form-buttons').innerHTML = `
      <button type="button" class="btn btn-success" id="assigned-staff-next">Reset Activity</button>
      <button type="button" class="btn btn-success" id="assigned-staff-submit">Assign</button>`;
    });
  }
};

export default staffMemberRole;
