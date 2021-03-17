import getVendors from '../helpers/data/vendorData';
import vendorCard from './cards/vendorCard';

const vendorPage = () => {
  document.querySelector('#title-container').innerHTML = '<h1 class="module-title">Vendors</h1>';
  document.querySelector('#card-container').innerHTML = '';
  getVendors().then((response) => response.forEach((vendor) => {
    document.querySelector('#card-container').innerHTML += vendorCard(vendor);
  }));
};

export default vendorPage;
