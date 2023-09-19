function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.setAttribute('disabled', '');

const clickStart = () => {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    const bgColor = getRandomHexColor();
    body.style.backgroundColor = bgColor;
  }, 1000);
};

const clickStop = () => {
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
  clearInterval(timerId);
};

startBtn.addEventListener('click', clickStart);
stopBtn.addEventListener('click', clickStop);
