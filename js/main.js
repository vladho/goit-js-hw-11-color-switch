const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('button[data-action="start"]')
const stopRef = document.querySelector('button[data-action="stop"]')

const bodyRef = document.querySelector("body")

let timerId = null;
let isActive = false;

startRef.addEventListener("click", () => {
  if (isActive) {
    return
  }

  isActive = true;
  bodyRef.classList.add("color")
  const colorRef = document.querySelector(".color")
  const randomColor = () => {
    colorRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }
  timerId = setInterval(randomColor, 3000)
})

stopRef.addEventListener("click", () => {
  clearInterval(timerId)
  timerId = null;
  isActive = false;
})


 