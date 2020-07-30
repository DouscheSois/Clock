(() => {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const seconds = document.getElementById("seconds");
  const year = document.getElementById("year");
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const numberDay = document.getElementById("number-day");

  const reloadClock = () => {
    const date = new Date();
    year.innerHTML = date.getFullYear();

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month.innerHTML = months[date.getMonth()];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    day.innerHTML = days[date.getDay()];
    numberDay.innerHTML = date.getDate();
    seconds.innerHTML = formatTime(date.getSeconds());
    hour.innerHTML = formatTime(date.getHours());
    minute.innerHTML = formatTime(date.getMinutes());
  };

  const formatTime = (time) => {
    if (time < 10) {
      return "0" + time;
    }
    return time;
  };

  setInterval(reloadClock, 1000);
  reloadClock();
})();
