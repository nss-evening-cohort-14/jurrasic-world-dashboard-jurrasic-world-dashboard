import { getDinos } from './dinoData';
import { getDinoStaff } from './dinoStaffData';
import { getRides } from './ridesData';
import { getRideStaff } from './rideStaffData';
import { getStaff } from './staffData';
import { getVendors } from './vendorData';
import { getVendorStaff } from './vendorStaffData';

const dinosWithStaff = () => new Promise((resolve, reject) => {
  Promise.all([getDinos(), getStaff(), getDinoStaff()])
    .then(([dinos, staff, dinosStaffJoin]) => {
      const allStaffInfoArray = dinos.map((dino) => {
        const dinoRelationshipsArray = dinosStaffJoin.filter((dinoStaff) => dinoStaff.dino_firebaseKey === dino.firebaseKey);

        const staffInfoArray = dinoRelationshipsArray.map((staffRelationship) => staff.find((staffMember) => staffMember.firebaseKey === staffRelationship.staff_firebaseKey));

        return { ...dino, staffInfoArray };
      });
      resolve(allStaffInfoArray);
    }).catch((error) => reject(error));
});

const ridesWithStaff = () => new Promise((resolve, reject) => {
  Promise.all([getRides(), getStaff(), getRideStaff()])
    .then(([rides, staff, rideStaffJoin]) => {
      const allRideStaffArray = rides.map((ride) => {
        const staffRelationshipArray = rideStaffJoin.filter((rg) => rg.ride_firebaseKey === ride.firebaseKey);

        const staffInfoArray = staffRelationshipArray.map((staffRelate) => staff.find((staffMember) => staffMember.firebaseKey === staffRelate.staff_firebaseKey));

        return { ...ride, staff: staffInfoArray };
      });
      resolve(allRideStaffArray);
    }).catch((error) => reject(error));
});

const vendorsWithStaff = () => new Promise((resolve, reject) => {
  Promise.all([getVendors(), getStaff(), getVendorStaff()])
    .then(([vendors, staff, vendorStaffJoin]) => {
      const allVendorInfoArray = vendors.map((vendor) => {
        const vendorRelationshipArray = vendorStaffJoin.filter((vs) => vs.vendor_firebaseKey === vendor.firebaseKey);

        const staffInfoArray = vendorRelationshipArray.map((vendorRelate) => staff.find((staffMember) => staffMember.firebaseKey === vendorRelate.staff_firebaseKey));

        return { ...vendor, staff: staffInfoArray };
      });
      resolve(allVendorInfoArray);
    }).catch((error) => reject(error));
});

export { dinosWithStaff, ridesWithStaff, vendorsWithStaff };
