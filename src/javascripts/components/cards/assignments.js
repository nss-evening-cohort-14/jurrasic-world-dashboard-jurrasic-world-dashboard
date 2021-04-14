const showAssignments = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = `
    <div id="ride-assignments"></div>
    <div id="dino-assignments"></div>
    <div id="vendor-assignments"></div>
  `;
  document.querySelector('#title-container').innerHTML = '<h1>Assignments</h1>';
};

const showRideAssignments = (arr) => {
  let domString = '<ul class="list-group" id="ride-assignment-staff">';

  arr.forEach((item) => {
    domString += `
      <li class="list-group-item">${item.staff_firebaseKey}: ${item.ride_firebaseKey}</li>
      `;
  });
  domString += '</ul>';

  document.querySelector('#ride-assignments').innerHTML = domString;
};

const showDinoAssignments = (arr) => {
  let domString = '<ul class="list-group" id="dino-assignment-staff">';

  arr.forEach((item) => {
    domString += `
      <li class="list-group-item">${item.staff_firebaseKey}: ${item.dino_firebaseKey}</li>
      `;
  });
  domString += '</ul>';

  document.querySelector('#dino-assignments').innerHTML = domString;
};

const showVendorAssignments = (arr) => {
  let domString = '<ul class="list-group" id="vendor-assignment-staff">';

  arr.forEach((item) => {
    domString += `
      <li class="list-group-item">${item.staff_firebaseKey}: ${item.vendor_firebaseKey}</li>
      `;
  });
  domString += '</ul>';

  document.querySelector('#vendor-assignments').innerHTML = domString;
};

export {
  showAssignments, showRideAssignments, showDinoAssignments, showVendorAssignments
};
