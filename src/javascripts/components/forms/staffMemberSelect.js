import { getStaff } from '../../helpers/data/staffData';

const staffMemberSelect = () => {
  document.querySelector('#assign-activity').innerHTML = '';
  let domString = ` 
    <label for="roles">Choose a Staff Member</label>
    <select name="staff-member" id="staff-member-options">
  `;
  getStaff().then((staffArr) => {
    staffArr.forEach((staff) => {
      domString += `
          <option value="${staff.firebaseKey}">${staff.name}</option>
        `;
    });
    domString += '</select>';

    document.querySelector('#assign-activity').innerHTML = domString;
  });
};

export default staffMemberSelect;
