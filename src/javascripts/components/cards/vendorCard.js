// vendorCard.js

const vendorCard = (vendor) => {
  const vendorStr = `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${vendor.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${vendor.name}</h5>
      <p class="card-text">${vendor.products}</p>
      <p class="card-text">${vendor.description}</p>
      <a href="#" class="btn btn-primary" id="edit-vendor--${vendor.firebaseKey}">Edit</a>
      <a href="#" class="btn btn-danger" id="delete-vendor--${vendor.firebaseKey}">Delete</a>
    </div>
  </div>`;
  return vendorStr;
};

export default vendorCard;
