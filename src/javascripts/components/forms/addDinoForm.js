const addDinoForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-dino-form" class="mb-4">
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Species</label>
        <input type="text" class="form-control" id="species" aria-describedby="dinoSpecies" placeholder="Enter Dino Species" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Height</label>
        <input type="text" class="form-control" id="height" aria-describedby="dinoHeight" placeholder="Enter Dino Height" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Weight</label>
        <input type="text" class="form-control" id="weight" aria-describedby="dinoWeight" placeholder="Enter Dino Weight" required>
      </div>
      <div class="form-group">
        <label for="title">Dino Diet</label>
        <input type="text" class="form-control" id="diet" aria-describedby="dinoDiet" placeholder="Enter Dino Diet" required>
      </div>
      <button type="submit" id="submit-dino" class="btn btn-primary">Submit Dino</button>
    </form>`;
};

export default addDinoForm;
