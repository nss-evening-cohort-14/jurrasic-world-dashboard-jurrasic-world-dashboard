const loadPage = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1 class="text-dark">Welcome to Jurassic World!</h1>';

  array.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card border-danger" id="view-card-style" style="width: 10rem;">
      <a href="#"><img class="card-top-img pt-2" src=${item.image} id="${item.firebaseKey}" alt="View Card" style="width: 70px; height: auto"></a>
      <div class="card-body">
        <a href="#"><h5 id="${item.firebaseKey}" class="title">${item.title}</h5></a>
      </div>
    </div>`;
  });
};

export default loadPage;
