const showDinos = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-dino-btn">Add Dino</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Dinosaurs</h1>';

  array.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" id="specific-dino^^${item.firebaseKey}" src=${item.image} alt=${item.species}>
      <div class="card-body">
        <h6 class="card-title">${item.species}</h6>
        <h5 class="card-title">Height: ${item.height}</h5>
        <h5 class="card-title">Weight: ${item.weight}</h5>
        <h6 class="card-title">Diet: ${item.diet}</h6>
        <button class='btn btn-danger btn-sm' id='delete-dino--${item.firebaseKey}'>Delete Dino</button>
      </div>
    </div>`;
  });
};

const emptyDinos = () => {
  document.querySelector('#card-container').innerHTML = '<h1 class="text-dark">No Dinosaurs</h1>';
};

export { showDinos, emptyDinos };
