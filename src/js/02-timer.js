import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const start = document.querySelector('button[data-start]');

start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (this.defaultDate < selectedDates[0]) {
          window.alert("Please choose a date in the future");
          return;
      }
  },
};

const datetimePicker = document.querySelector('#datetime-picker');


flatpickr(datetimePicker, options);