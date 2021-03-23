import monkey from '../../assets/monkey.png';

const flyingMonkey = () => {
  document.querySelector('#monkey-container').innerHTML = `<img src="${monkey}"></img>`;
};

const stopFlyingMonkey = () => {
  document.querySelector('#monkey-container').innerHTML = '';
};

export { flyingMonkey, stopFlyingMonkey };
