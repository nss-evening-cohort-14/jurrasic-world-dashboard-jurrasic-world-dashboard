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
    const staffArray = item.staff;
    staffArray.forEach((member) => {
      if (member.name.length > 0) {
        domString += `
        <li class="list-group-item" id="dino-staff-arr">${item.name} with Operator ${member.name}</li>
        `;
      }
    });
  });
  domString += '</ul>';

  document.querySelector('#ride-assignments').innerHTML = domString;
};

const showDinoAssignments = (arr) => {
  let domString = '<ul class="list-group" id="dino-assignment-staff">';
  arr.forEach((item) => {
    const staffArray = item.staffInfoArray;
    staffArray.forEach((member) => {
      if (member.name.length > 0) {
        domString += `
        <li class="list-group-item" id="dino-staff-arr">${item.species} with Handler ${member.name}</li>
        `;
      }
    });
  });
  domString += '</ul>';

  document.querySelector('#dino-assignments').innerHTML = domString;
};

const showVendorAssignments = (arr) => {
  let domString = '<ul class="list-group" id="vendor-assignment-staff">';
  arr.forEach((item) => {
    const staffArray = item.staff;
    staffArray.forEach((member) => {
      if (member.name.length > 0) {
        domString += `
        <li class="list-group-item" id="dino-staff-arr">${item.name} with Attendee ${member.name}</li>
        `;
      }
    });
  });
  domString += '</ul>';

  document.querySelector('#vendor-assignments').innerHTML = domString;
};

export {
  showAssignments, showRideAssignments, showDinoAssignments, showVendorAssignments
};
