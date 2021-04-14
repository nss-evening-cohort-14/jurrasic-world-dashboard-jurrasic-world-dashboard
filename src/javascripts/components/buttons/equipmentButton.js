import { getEquipment } from '../../helpers/data/equipmentData';

const checkEquipment = () => {
  getEquipment().then((equipmentArray) => {
    const broken = equipmentArray.filter((item) => item.broken);
    if (broken.length) {
      // show alert with names
      const names = broken.map((item) => item.title);
      const joinedNames = names.join(', ');
      document.querySelector('#toast-container').innerHTML = `<div class="alert alert-danger" role="alert">
      The following equipment is currently broken: ${joinedNames}.
    </div>`;
    } else {
      // show no broken equipment alert
      document.querySelector('#toast-container').innerHTML = `<div class="alert alert-danger" role="alert">
      There is currently no broken equipment.
    </div>`;
    }
  });
};

export default checkEquipment;
