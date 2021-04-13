import { getStaff } from '../../helpers/data/staffData';

const assignEquipmentForm = (array = []) => {
  document.querySelector('#modal-body').innerHTML = '';
  let domString = `<form class="mt-1">
  <div class="form-group" id="assign-equipment">
    <label for="roles">Assign to a Staff Member:</label>
    <select name="assignment" id="equipment-staff">
      <option></option>
  `;

  getStaff().then((staffArray) => {
    staffArray.forEach((staff) => {
      if (array.includes(staff.firebaseKey)) {
        domString += `<option selected value="${staff.firebaseKey}">${staff.name}</option>`;
      } else {
        domString += `<option value="${staff.firebaseKey}">${staff.name}</option>`;
      }
    });

    domString += '</select> </div> <button type="submit" id="submit-assignment" class="btn btn-primary">Assign Staff</button></form>';

    document.querySelector('#modal-body').innerHTML = domString;
  });
};

export default assignEquipmentForm;
