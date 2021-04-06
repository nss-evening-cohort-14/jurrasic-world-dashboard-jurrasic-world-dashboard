const ridesForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form>
  <div class="form-group">
    <label for="name">Ride Name</label>
    <input type="text" class="form-control" id="ride-name" aria-describedby="rideName">
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="url" class="form-control" id="ride-image">
  </div>
  <div class="form-group">
  <label for="description">Description</label>
  <input type="text" class="form-control" id="ride-description">
</div>
  <button type="submit" class="btn btn-primary" id="submit-ride">Submit</button>
</form>`;
};

export default ridesForm;
