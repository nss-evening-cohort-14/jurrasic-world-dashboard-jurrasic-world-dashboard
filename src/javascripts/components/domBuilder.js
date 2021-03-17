const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="title-container"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="card-container"></div>
  </div>`;
};

export default domBuilder;
