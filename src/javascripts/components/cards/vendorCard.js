import firebase from 'firebase';

const vendorCard = (vendor) => {
  let buttonStr = '';
  if (firebase.auth().currentUser) {
    buttonStr = `
    <div class="mt-auto">
      <a href="#" id="edit-vendor--${vendor.firebaseKey}" class="btn btn-primary mx-2" data-toggle="modal" data-target="#formModal">Update</a>
      <a href="#" id="delete-vendor--${vendor.firebaseKey}" class="btn btn-danger mx-2">Delete</a>
    </div>`;
  }
  const vendorStr = `
  <div class="card" style="width: 18rem; height: 39em">
    <img class="card-img-top" src="${vendor.imageUrl}" alt="Card image cap">
    <div class="card-body d-flex flex-column">
      <h3 class="card-title">${vendor.name}</h3>
      <p class="card-text">${vendor.products}</p>
      <p class="card-text">${vendor.description}</p>
    ${buttonStr}
    </div>
  </div>`;
  return vendorStr;
};

export default vendorCard;
