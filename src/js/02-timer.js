import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const start = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert("Please choose a date in the future");
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};

const datetimePicker = document.querySelector('#datetime-picker');
flatpickr(datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function timerDisplay(days, hours, minutes, seconds) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

let countdownInterval;

start.addEventListener('click', () => {
  const selectedDate = new Date(datetimePicker.value).getTime();
  startCountdown(selectedDate);
});

function startCountdown(selectedDate) {
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeRemaining = selectedDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      timerDisplay(0, 0, 0, 0);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    timerDisplay(days, hours, minutes, seconds);
  }, 1000);
}
