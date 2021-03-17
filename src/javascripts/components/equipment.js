const showEquipment = (arr) => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1>Equipment</h1>';
  arr.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}.</p>
      <a href="#" class="btn btn-primary" id="deleteEquipment--${item.firebaseKey}">Delete</a>
    </div>
  </div>`;
  });
};

const emptyEquipment = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Items</h1>';
};

export { showEquipment, emptyEquipment };
