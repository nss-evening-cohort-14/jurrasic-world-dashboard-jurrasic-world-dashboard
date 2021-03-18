const updateEquipmentForm = (equipmentObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-equipment-form" class="mb-4">
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${equipmentObject.image}" required>
      </div>
      <div class="form-group">
        <label for="title">Equipment Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter Equipment Name" value="${equipmentObject.title}" required>
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <input type="text" class="form-control" id="description" aria-describedby="description" placeholder="Enter Equipment Description"  value="${equipmentObject.description}" required>
      </div>
      <button type="submit" id="edit-equipment--${equipmentObject.firebaseKey}" class="btn btn-primary">Update Equipment</button>
    </form>`;
};

export default updateEquipmentForm;
