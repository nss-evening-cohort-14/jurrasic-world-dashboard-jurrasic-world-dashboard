import { getEquipment } from '../../helpers/data/equipmentData';

const checkEquipment = () => {
  getEquipment().then((equipmentArray) => {
    const broken = equipmentArray.filter((item) => item.broken);
    if (broken.length) {
      // show alert with names
      const names = broken.map((item) => item.title);
      const joinedNames = names.join(', ');
      document.querySelector('#toast-container').innerHTML = `<div class="alert alert-danger alert-dismissible fade show w-25 p-3" role="alert">
        The following equipment is currently broken: ${joinedNames}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
    } else {
      // show no broken equipment alert
      document.querySelector('#toast-container').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
      There is currently no broken equipment.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
    }
  });
};

export default checkEquipment;
