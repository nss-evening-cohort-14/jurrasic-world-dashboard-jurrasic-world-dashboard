// vendorCard.js

const vendorCard = (vendor) => {
  const vendorStr = `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${vendor.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${vendor.name}</h5>
      <p class="card-text">${vendor.products}</p>
      <p class="card-text">${vendor.description}</p>
      <div class="mt-auto">
          <a href="#" id="edit-vendor--${vendor.firebaseKey}" class="btn btn-primary mx-2" data-toggle="modal" data-target="#formModal">Update</a>
          <a href="#" id="delete-vendor--${vendor.firebaseKey}" class="btn btn-danger mx-2">Delete</a>
      </div>
    </div>
  </div>`;
  return vendorStr;
};

export default vendorCard;
