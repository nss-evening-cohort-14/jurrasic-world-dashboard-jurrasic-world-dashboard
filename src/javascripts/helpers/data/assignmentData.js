import { getSingleDino } from './dinoData';
import { getDinoStaff } from './dinoStaffData';
import { getRideStaff } from './rideStaffData';
import { getSingleStaffMember } from './staffData';
import { getVendorStaff } from './vendorStaffData';

const getAssignments = () => new Promise((resolve, reject) => {
  const dinoAssignments = getDinoStaff();
  const rideAssignments = getRideStaff();
  const vendorAssignments = getVendorStaff();
  const allPromises = [dinoAssignments, rideAssignments, vendorAssignments];

  Promise.all(allPromises).then(([dinoResponse, rideResponse, vendorResponse]) => resolve({ dino: dinoResponse, ride: rideResponse, vendor: vendorResponse }))
    .catch((error) => reject(error));
});

const getAssignmentStaff = (object) => new Promise((resolve, reject) => {
  const dinoStaff = object.dino;
  console.warn(dinoStaff);
  dinoStaff.forEach((element) => {
    const staffKey = element.staff_firebaseKey;
    const dinoKey = element.dino_firebaseKey;
    const promiseOne = getSingleDino(dinoKey);
    const promiseTwo = getSingleStaffMember(staffKey);

    Promise.all([promiseOne, promiseTwo]).then(([dinoResponse, StaffResponse]) => resolve({ dino: dinoResponse.species, staff: StaffResponse.name })).catch((error) => reject(error));
  });
});

export { getAssignments, getAssignmentStaff };
