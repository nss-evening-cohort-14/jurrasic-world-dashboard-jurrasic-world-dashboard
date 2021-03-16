const showRides = (arr) => {
  document.querySelector('#card-container').innerHTML = '';
  arr.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.name}">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  });
};

const emptyRides = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Items</h1>';
};

export { showRides, emptyRides };
