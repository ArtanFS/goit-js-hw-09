function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  btn: document.querySelector('.form'),
};

refs.delay.setAttribute('min', 0);
refs.step.setAttribute('min', 0);
refs.amount.setAttribute('min', 0);
let delay = refs.delay.value;
let step = refs.step.value;
const amount = refs.amount.value;

refs.btn.addEventListener('submit', evt => {
  evt.preventDefault();
  createPromises(delay, step, amount);
  // refs.btn.reset();
  console.log(refs.step.value);
});

function createPromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    console.log(delay);
  }
}

// createPromise(i, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
