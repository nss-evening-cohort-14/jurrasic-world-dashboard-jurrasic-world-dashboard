import firebase from 'firebase';
import 'firebase/auth';

const showEquipment = (arr) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" data-toggle="modal" data-target="#formModal" id="add-equipment-btn">Add Equipment</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Equipment</h1>';
  if (firebase.auth().currentUser) {
    arr.forEach((item) => {
      document.querySelector('#card-container').innerHTML += `
      <div class="card" style="width: 18rem; height: 29em">
        <img src="${item.image}" class="card-img-top" style="height: 13em" alt="${item.title}">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">${item.description}.</p>
          <div class="mt-auto">
              <a href="#" id="update-equipment-btn--${item.firebaseKey}" class="btn btn-primary mx-2" data-toggle="modal" data-target="#formModal">Edit</a>
              <a href="#" id="delete-equipment--${item.firebaseKey}" class="btn btn-danger mx-2">Delete</a>
          </div>
        </div>
      </div>`;
    });
  } else {
    document.querySelector('#add-button').innerHTML = '';
    arr.forEach((item) => {
      document.querySelector('#card-container').innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}.</p>
        </div>
      </div>`;
    });
  }
};

const emptyEquipment = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Items</h1>';
};

export { showEquipment, emptyEquipment };
