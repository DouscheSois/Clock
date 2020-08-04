(() => {
  // The COUNTDOWN time
  const countdownDay = document.getElementById("countdown-day");
  const countdownHour = document.getElementById("countdown-hour");
  const countdownMinute = document.getElementById("countdown-minute");
  const countdownSeconds = document.getElementById("countdown-seconds");

  // Countdown
  const countdown = () => {
    const nowDate = new Date();
    const endDate = new Date("09/02/2020 9:0 PM");
    const gap = endDate - nowDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    countdownDay.innerHTML = days + " days";
    countdownHour.innerHTML = hours + " hours";
    countdownMinute.innerHTML = minutes + " minutes";
    countdownSeconds.innerHTML = seconds + " seconds";
  };

  setInterval(countdown, 1000);
  countdown();
})();
