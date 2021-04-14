const addEquipmentForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-equipment-form" class="mb-4">
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="title">Equipment Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter Equipment Name" required>
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <input type="text" class="form-control" id="description" aria-describedby="description" placeholder="Enter Equipment Description" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="broken-button">
        <label class="form-check-label" for="broken-button">Broken?</label>
      </div>
      <button type="submit" id="submit-equipment" class="btn btn-primary">Submit Equipment</button>
    </form>`;
};

export default addEquipmentForm;
