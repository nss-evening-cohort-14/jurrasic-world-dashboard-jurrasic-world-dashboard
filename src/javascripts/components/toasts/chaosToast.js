// chaosToast.js
import caution from '../../../assets/caution.png';

const chaosToast = (message) => {
  document.querySelector('#toast-container').innerHTML = `
    <div class="toast"  id="chaosToast" role="alert" aria-live="assertive" 
      data-delay="5000" aria-atomic="true">
      <div class="toast-header">
        <img src="${caution} class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body" id="toast-body">
        ${message}
      </div>
    </div>`;
};

export default chaosToast;
