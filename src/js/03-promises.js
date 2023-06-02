const delayEl = document.querySelector('delay');
const stepEl = document.querySelector('step');
const amountEl = document.querySelector('amount');
const btnEl = document.querySelector('button');

const delay = Number(delayEl.value);
const step = Number(stepEl.value);
const amount = Number(amountEl.value);

btnEl.addEventListener('click', (event) => {
  event.preventDefault();
})



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
