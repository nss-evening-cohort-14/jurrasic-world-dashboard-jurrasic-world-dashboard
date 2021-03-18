const loadPage = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<h1 class="text-dark">Welcome to Jurassic World!</h1>';
};

export default loadPage;
