function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timer = null;

start.addEventListener('click', () => {
    timer = setInterval(() => {
body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    
})

stop.addEventListener('click', () => {
    clearInterval(timer);
})