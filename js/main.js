//добавляем видео-фон

$(document).ready(function () {
    $('#app').vide({
      mp4: 'video/video.mp4',
      webm: 'video/video.webm',
      ogv: 'video/video.ogv',
      poster: 'img/bg-poster.jpg'
    });
});

// Основной таймер
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Дата завершения акции
let minutesToAdd=30;
let currentDate = new Date();
const deadline = new Date(currentDate.getTime() + minutesToAdd*60000);

function updateCounter() {
  const currentTime = new Date();
  const dist = deadline - currentTime;

  // Перевод в минуты, с учетом остатка деления на 60
  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  // Перевод в секунды, с учетом остатка деления на 60
  const toSeconds = Math.floor(dist / 1000) % 60;

  minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounter();

// Запускаем функцию каждую секунду
setInterval(updateCounter, 1000);

// Таймер при адаптиве
const minutesHid = document.querySelector("#minutesHid");
const secondsHid = document.querySelector("#secondsHid");

let minutesToAddHid=30;
let currentDateHid = new Date();
const deadlineHid = new Date(currentDateHid.getTime() + minutesToAddHid*60000);

function updateCounterHid() {
  const currentTime = new Date();
  const dist = deadlineHid - currentTime;

  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  const toSeconds = Math.floor(dist / 1000) % 60;

  minutesHid.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  secondsHid.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounterHid();
setInterval(updateCounterHid, 1000);


//Генератор случайного цвета для новой цены
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

newprice.onmouseover = function() {
    this.style.color = generateRandomColor();
};