import firebase from 'firebase/app';
import 'firebase/auth';

const showRides = (arr) => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Rides</h1>';
  document.querySelector('#add-button').innerHTML = '<button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#formModal" id="add-ride-btn">Add a Ride</button>';
  document.querySelector('#form-container').innerHTML = '';
  if (firebase.auth().currentUser) {
    arr.forEach((item) => {
      document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem; height: 25em">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body d-flex flex-column">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-text">${item.description}</p>
        <div class="mt-auto">
          <a href="#" class="btn btn-primary mx-2" id="edit-ride--${item.firebaseKey}" data-toggle="modal" data-target="#formModal">Edit</a>
          <a href="#" class="btn btn-danger mx-2" id="delete-ride--${item.firebaseKey}">Delete</a>
        </div>
      </div>
    </div>`;
    });
  } else {
    document.querySelector('#add-button').innerHTML = '';
    arr.forEach((item) => {
      document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
      </div>
    </div>`;
    });
  }
};

const emptyRides = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Items</h1>';
};

export { showRides, emptyRides };
