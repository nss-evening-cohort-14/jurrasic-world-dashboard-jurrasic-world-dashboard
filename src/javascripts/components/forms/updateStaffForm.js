const updateStaffForm = (staffObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id ="update-staff-form" class="mt-1">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Name" value="${staffObject.name}">
    </div>
    <div class="form-group">
      <label for="position">Position</label>
      <input type="text" class="form-control" id="position" placeholder="Position" value="${staffObject.position}">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="description" placeholder="Description" value="${staffObject.description}">
    </div>
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="image" placeholder="Image URL" value="${staffObject.image}">
    </div>
    <button type="submit" id="submit-updated-staff-btn--${staffObject.firebaseKey}" class="btn btn-primary mt-2">Update</button>
  </form>
  `;
};

export default updateStaffForm;
