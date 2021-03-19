import vendorCard from './cards/vendorCard';

const showVendors = (vendorArr) => {
  document.querySelector('#title-container').innerHTML = '<h1 class="module-title">Vendors</h1>';
  document.querySelector('#add-button').innerHTML = '<a href="#" class="btn btn-success btn-lg mb-4" data-toggle="modal" data-target="#formModal" id="new-vendor-btn">Add Vendor</a>';
  document.querySelector('#card-container').innerHTML = '';
  vendorArr.forEach((vendor) => {
    document.querySelector('#card-container').innerHTML += vendorCard(vendor);
  });
};

export default showVendors;
