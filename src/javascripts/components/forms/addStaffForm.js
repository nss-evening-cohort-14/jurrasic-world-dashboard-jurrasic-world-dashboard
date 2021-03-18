const addStaffForm = () => {
  document.querySelector('#modal-body').innerHTML = `
  <form class="mt-1" style="width: 40%; margin: 0 auto;">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Name">
    </div>
    <div class="form-group">
      <label for="position">Position</label>
      <input type="text" class="form-control" id="position" placeholder="Position">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="description" placeholder="Description">
    </div>
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="image" placeholder="Image URL">
    </div>
    <button type="submit" id="submit-staff-btn" class="btn btn-primary mt-2">Submit</button>
  </form>
  `;
};

export default addStaffForm;
