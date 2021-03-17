const editRideForm = (rideObj) => {
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form>
  <div class="form-group">
    <label for="name">Ride Name</label>
    <input type="text" class="form-control" id="ride-name" aria-describedby="rideName" value="${rideObj.name}">
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="url" class="form-control" id="ride-image" value="${rideObj.image}">
  </div>
  <div class="form-group">
  <label for="description">Description</label>
  <input type="text" class="form-control" id="ride-description" value="${rideObj.description}">
</div>
  <button type="submit" class="btn btn-primary" id="update-ride--${rideObj.firebaseKey}">Submit</button>
</form>`;
};

export default editRideForm;
