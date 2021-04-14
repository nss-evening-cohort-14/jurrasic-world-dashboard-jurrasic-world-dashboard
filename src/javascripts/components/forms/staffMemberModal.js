import staffMemberSelect from './staffMemberSelect';

const staffMemberModal = () => {
  document.querySelector('#modal-body').innerHTML = `
    <h1>Assign a Staff Member to a Role</h1>
      <div class="form-group" id="assign-activity">
      </div>
      <div class="form-group m-2" id="assigned-role">
        <label for="roles">Choose an Activity</label>
        <select name="chosen-role" id="chosen-role">
          <option value="dino">Dino Handler</option>
          <option value="ride">Ride Operator</option>
          <option value="vendor">Vendor Associate</option>
        </select>
      </div>
      <div class="form-group m-2" id="specific-activity">
      </div>
      <div id="staff-form-buttons">
        <button type="button" class="btn btn-success" id="assigned-staff-next">Next</button>
      </div>
  `;
  staffMemberSelect();
};

export default staffMemberModal;
