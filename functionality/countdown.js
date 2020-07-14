// Countdown 
const countdown = () => {
    let nowDate = new Date();
    let endDate = new Date('08/03/2020 9:0 PM');
    let gap = endDate - nowDate;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let days = Math.floor(gap / day);
    let hours = Math.floor((gap % day) / hour);
    let minutes = Math.floor((gap % hour) / minute);
    let seconds = Math.floor((gap % minute) / second);

    countdownDay.innerHTML = days + ' days';
    countdownHour.innerHTML = hours + ' hours';
    countdownMinute.innerHTML = minutes + ' minutes';
    countdownSeconds.innerHTML = seconds + ' seconds';
}

setInterval(countdown, 1000)