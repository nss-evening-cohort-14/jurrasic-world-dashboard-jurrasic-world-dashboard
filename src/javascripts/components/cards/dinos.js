import firebase from 'firebase/app';
import 'firebase/auth';

const showDinos = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" data-toggle="modal" data-target="#formModal" id="add-dino-btn">Add Dino</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Dinosaurs</h1>';

  if (firebase.auth().currentUser) {
    array.forEach((dino) => {
      document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem; height: 28em">
        <img class="card-img-top" style="height: 13em" src=${dino.image} alt=${dino.species}>
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">${dino.species}</h3>
          <h6 class="card-text">Height: ${dino.height}</h6>
          <h6 class="card-text">Weight: ${dino.weight}</h6>
          <h6 class="card-text">Diet: ${dino.diet}</h6>
          <div class="mt-auto">
            <a href="#" id="update-dino-btn--${dino.firebaseKey}" class="btn btn-primary mx-2" data-toggle="modal" data-target="#formModal">Edit</a>
            <a href="#" id="delete-dino-btn--${dino.firebaseKey}" class="btn btn-danger mx-2">Delete</a>
          </div>
        </div>
      </div>`;
    });
  } else {
    document.querySelector('#add-button').innerHTML = '';
    array.forEach((dino) => {
      document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${dino.image} alt=${dino.species}>
        <div class="card-body">
          <h5 class="card-title">${dino.species}</h5>
          <h6 class="card-title">Height: ${dino.height}</h6>
          <h6 class="card-title">Weight: ${dino.weight}</h6>
          <h6 class="card-title">Diet: ${dino.diet}</h6>
        </div>
      </div>`;
    });
  }
};

const emptyDinos = () => {
  document.querySelector('#card-container').innerHTML = '<h1 class="text-dark">No Dinosaurs</h1>';
};

export { showDinos, emptyDinos };
