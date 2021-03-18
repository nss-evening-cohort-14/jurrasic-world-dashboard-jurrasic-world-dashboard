const updateDinoForm = (dinoObject) => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#modal-body').innerHTML = `
    <form id="update-dino-form" class="mb-4">
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${dinoObject.image}" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Species</label>
        <input type="text" class="form-control" id="species" aria-describedby="dinoSpecies" placeholder="Enter Dino Species" value="${dinoObject.species}" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Height</label>
        <input type="text" class="form-control" id="height" aria-describedby="dinoHeight" placeholder="Enter Dino Height" value="${dinoObject.height}" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Weight</label>
        <input type="text" class="form-control" id="weight" aria-describedby="dinoWeight" placeholder="Enter Dino Weight" value="${dinoObject.weight}" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Diet</label>
        <input type="text" class="form-control" id="diet" aria-describedby="dinoDiet" placeholder="Enter Dino Diet" value="${dinoObject.diet}" required>
      </div>
      <button type="submit" id="edit-dino--${dinoObject.firebaseKey}" class="btn btn-primary">Update Dino</button>
    </form>`;
};

export default updateDinoForm;
