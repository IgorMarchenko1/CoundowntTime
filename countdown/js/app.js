const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

let countdownDate = new Date(2022, 01, 29, 10, 0, 0).getTime();

function getCoundowntTime() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    //1s=1000ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let hminutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];

    items.forEach(function(item, index) {
        item.textContent = values[index];
    });
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>";
    }

}
let countdown = setInterval(getCoundowntTime, 1000);
getCoundowntTime();