import staffMemberSelect from './staffMemberSelect';

const staffMemberModal = () => {
  document.querySelector('#modal-body').innerHTML = `
    <h1>Assign a Staff Member to a Role</h1>
      <div class="form-group" id="assign-activity">
      </div>
      <div class="form-group m-2" id="assigned-role">
        <label for="roles">Choose an Activity</label>
        <select name="chosen-role" id="chosen-role">
          <option value="1">Sample Role</option>
        </select>
      </div>
      <div class="form-group m-2" id="specific-activity">
        <label for="roles">Choose an x  </label>
        <select name="chosen-role" id="chosen-role">
          <option value="1">Sample Role</option>
        </select>
      </div>
      <button type="button" class="btn btn-success" id="assigned-staff-submit">Assign</button>
  `;
  staffMemberSelect();
};

export default staffMemberModal;
