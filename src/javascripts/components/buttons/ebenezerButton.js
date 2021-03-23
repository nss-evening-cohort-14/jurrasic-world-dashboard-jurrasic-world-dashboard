// ebenezerButton.js
import chaosButton from '../../../assets/monkey-cage.png';
import looseMonkey from '../../../assets/monkey.png';

const ebenezerButton = () => {
  document.querySelector('#chaos-button-container').innerHTML = `
  <div class="chaos-button">
    <div class="card" id="ebenezer" style="width: 100%; margin: 0;">
      <img src="${chaosButton}" id="img-ebenezer" class="card-img-top" alt="Ebenezer the Monkey in his Cage">
      <div class="card-body" id="card-body-ebenezer">
        <p class="card-text" id="card-text-ebenezer">Let me out to play!</p>
      </div>
    </div>
  </div>`;
};

const ebenezerLooseButton = () => {
  document.querySelector('#chaos-button-container').innerHTML = '';
  document.querySelector('#chaos-button-container').innerHTML = `
  <div class="chaos-button">
    <div class="card" id="monkey-loose" style="width: 100%; margin: 0;">
      <img src="${looseMonkey}" id="img-monkey-loose" class="card-img-top" alt="Ebenezer the Monkey in his Cage">
      <div class="card-body" id="card-body-monkey-loose">
        <p class="card-text" id="card-text-monkey-loose">Put Ebenezer back in his Cage!</p>
      </div>
    </div>
  </div>`;
};

export { ebenezerButton, ebenezerLooseButton };
