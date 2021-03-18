// updateVendorForm.js

const updateVendorForm = (vendorObj) => {
  document.querySelector('#form-container').innerHTML = `
    <form id="update-vendor-form" class="mb-4">
      <div class="form-group">
        <label for="vendor-name">Vendor Name</label>
        <input type="text" class="form-control" id="vendor-name" aria-describedby="vendor-name"
          placeholder="Enter Vendor Name" value="${vendorObj.name}" required>
      </div>
      <div class="form-group">
        <label for="vendor-description">Vendor Desciption</label>
        <input type="text" class="form-control" id="vendor-description" 
          placeholder="Vendor Description" value="${vendorObj.description}" required>
      </div>
      <div class="form-group">
        <label for="vendor-products">Products</label>
        <input type="text" class="form-control" id="vendor-products" 
          placeholder="Vendor Products" value="${vendorObj.products}" required>
      </div>
      <div class="form-group">
        <label for="vendor-image-url">Image Url</label>
        <input type="text" class="form-control" id="vendor-image-url" 
          placeholder="Vendor Image URL" value="${vendorObj.imageUrl}">
      </div>
      <button type="button" id="close-update-vendor" class="btn btn-secondary">Close</button>
      <button type="submit" id="submit-update-vendor--${vendorObj.firebaseKey}" class="btn btn-success">Update Vendor</button>
    </form>`;
};

const closeUpdateVendorForm = () => {
  document.querySelector('#form-container').innerHTML = '';
};

export { updateVendorForm, closeUpdateVendorForm };
