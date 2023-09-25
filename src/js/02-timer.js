import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let diffDates = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = new Date(selectedDates);
    const currentDate = new Date();
    diffDates = selectedDate - currentDate;
    if (diffDates > 0) {
      displayCounter(diffDates);
      refs.startBtn.removeAttribute('disabled', '');
      refs.startBtn.addEventListener('click', startCountdown);
    } else {
      Notify.failure('Please choose a date in the future', {
        timeout: 1500,
      });
      refs.startBtn.setAttribute('disabled', '');
      displayCounter(0);
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, 0);
}

function displayCounter(ms) {
  const counterTime = convertMs(ms);
  refs.days.textContent = addLeadingZero(counterTime.days);
  refs.hours.textContent = addLeadingZero(counterTime.hours);
  refs.minutes.textContent = addLeadingZero(counterTime.minutes);
  refs.seconds.textContent = addLeadingZero(counterTime.seconds);
  return;
}

function startCountdown() {
  refs.startBtn.removeEventListener('click', startCountdown);
  timerId = setInterval(() => {
    diffDates -= 1000;
    if (diffDates < 0) {
      clearInterval(timerId);
      Notify.success('Your time is over!');
      return;
    }
    displayCounter(diffDates);
  }, 1000);
  return;
}

flatpickr('#datetime-picker', options);
refs.startBtn.setAttribute('disabled', '');
