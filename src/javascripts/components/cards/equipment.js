const showEquipment = (arr) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-equipment-btn">Add Equipment</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Equipment</h1>';
  arr.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${item.image}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}.</p>
        <div class="mt-auto">
          <a href="#" id="update-equipment-btn--${item.firebaseKey}" class="btn btn-primary mx-2">Update</a>
          <a href="#" id="deleteEquipment--${item.firebaseKey}" class="btn btn-primary mx-2">Delete</a>
        </div>
      </div>
    </div>`;
  });
};

const emptyEquipment = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Equipment</h1>';
};

export { showEquipment, emptyEquipment };