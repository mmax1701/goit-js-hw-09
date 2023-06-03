import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = formEl.querySelector('input[name="delay"]');
const stepEl = formEl.querySelector('input[name="step"]');
const amountEl = formEl.querySelector('input[name="amount"]');
const btnEl = formEl.querySelector('button[type="submit"]');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  let delay = parseInt(delayEl.value);
  const step = parseInt(stepEl.value);
  const amount = parseInt(amountEl.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    delay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
