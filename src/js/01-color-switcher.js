function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;
refs.stopBtn.setAttribute('disabled', '');

const clickStart = () => {
  refs.startBtn.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    const bgColor = getRandomHexColor();
    refs.body.style.backgroundColor = bgColor;
  }, 1000);
};

const clickStop = () => {
  refs.startBtn.removeAttribute('disabled', '');
  refs.stopBtn.setAttribute('disabled', '');
  clearInterval(timerId);
};

refs.startBtn.addEventListener('click', clickStart);
refs.stopBtn.addEventListener('click', clickStop);
