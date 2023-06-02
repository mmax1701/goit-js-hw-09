function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timer = null;
stop.disabled = true;

start.addEventListener('click', () => {
    timer = setInterval(() => {
body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    start.disabled = true; 
    stop.disabled = false;
})

stop.addEventListener('click', () => {
    clearInterval(timer);
    start.disabled = false; 
    stop.disabled = true;
})