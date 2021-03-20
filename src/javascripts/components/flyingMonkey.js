import monkey from '../../assets/monkey.png';

const flyingMonkey = () => {
  document.querySelector('#monkey-container').innerHTML = `<img src="${monkey}"></img>`;
};

export default flyingMonkey;
