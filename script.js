//The time
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
//The day
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const numberDay = document.getElementById('number-day');

//----------------------------The Clock
const reloadClock = () => {
    let date = new Date();
    //The date
    year.innerHTML = date.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month.innerHTML = months[date.getMonth()];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    day.innerHTML = days[date.getDay()];

    numberDay.innerHTML = date.getDate();

    // The time
    hour.innerHTML = date.getHours();
    seconds.innerHTML = date.getSeconds();

    // Double digit minutes
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    } else {
        minutes = minutes;
    }
    minute.innerHTML = minutes;
};

setInterval(reloadClock, 1000);