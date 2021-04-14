import { getEquipment } from '../../helpers/data/equipmentData';

const checkEquipment = () => {
  getEquipment().then((equipmentArray) => {
    const broken = equipmentArray.filter((item) => item.broken);
    if (broken.length) {
      // show alert with names
      const names = broken.map((item) => item.title);
      console.warn(names.join(', '));
    } else {
      // show no broken equipment alert
    }
  });
};

export default checkEquipment;
