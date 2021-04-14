import { getStaff } from '../../helpers/data/staffData';

const assignEquipmentForm = (equipmentFirebaseKey) => {
  document.querySelector('#modal-body').innerHTML = '';
  let domString = `<form class="mt-1">
  <div class="form-group" id="assign-equipment">
    <label for="roles">Assign to a Staff Member:</label>
    <select name="assignment" id="equipment-staff">
      <option></option>
  `;

  getStaff().then((staffArray) => {
    staffArray.forEach((staff) => {
      if (staffArray.includes(staff.firebaseKey)) {
        domString += `<option selected id="selected-staff" value="${staff.firebaseKey}">${staff.name}</option>`;
      } else {
        domString += `<option id="selected-staff" value="${staff.firebaseKey}">${staff.name}</option>`;
      }
    });

    domString += `</select> </div> <button type="submit" id="submit-assignment--${equipmentFirebaseKey}" class="btn btn-primary">Assign Staff</button></form>`;

    document.querySelector('#modal-body').innerHTML = domString;
  });
};

export default assignEquipmentForm;
