const loadPage = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<img class="load-image" src="https://help.redbubble.com/hc/article_attachments/360049015112/jurassicworldlogo.png" id="load-image-jw" alt="Jurassic World" style="width: 375px; height: auto">';

  array.forEach((item) => {
    document.querySelector('#card-container').innerHTML += `<div class="card view-card-style" style="width: 10rem;">
      <a href="#" id="card-top--${item.firebaseKey}"><img class="card-top-img pt-2" src=${item.image} id="${item.firebaseKey}" alt="View Card" style="width: 70px; height: auto"></a>
      <div class="card-body pointer" id="card-body--${item.firebaseKey}">
        <a href="#"><h5 id="${item.firebaseKey}" class="title">${item.title}</h5></a>
      </div>
    </div>`;
  });
};

export default loadPage;
