const addVendorForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-vendor-form" class="mb-4">
      <div class="form-group">
        <label for="vendor-name">Vendor Name</label>
        <input type="text" class="form-control" id="vendor-name" aria-describedby="vendor-name"
          placeholder="Enter Vendor Name" value="" required>
      </div>
      <div class="form-group">
        <label for="vendor-description">Vendor Desciption</label>
        <input type="text" class="form-control" id="vendor-description" 
          placeholder="Vendor Description" value="" required>
      </div>
      <div class="form-group">
        <label for="vendor-products">Products</label>
        <input type="text" class="form-control" id="vendor-products" 
          placeholder="Vendor Products" value="" required>
      </div>
      <div class="form-group">
        <label for="vendor-image-url">Image Url</label>
        <input type="text" class="form-control" id="vendor-image-url" 
          placeholder="Vendor Image URL" value="">
      </div>
      <button type="submit" id="submit-add-vendor" class="btn btn-success">Add Vendor</button>
    </form>`;
};

export default addVendorForm;
