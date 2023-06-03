import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const btnEl = document.querySelector('button[type="submit"]');


btnEl.addEventListener('click', (event) => {
  event.preventDefault();

const delay = parseInt(delayEl.value);
const step = parseInt(stepEl.value);
const amount = parseInt(amountEl.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
      тзьNotify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl.value = parseInt(delayEl.value) + step;
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
