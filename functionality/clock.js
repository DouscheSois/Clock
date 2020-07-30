// The Clock
const reloadClock = () => {
  let date = new Date();
  // The date
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

  // The time
  seconds.innerHTML = date.getSeconds();

  let hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  hour.innerHTML = hours[date.getHours()];

  // Double digit minutes
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  minute.innerHTML = minutes;
};

setInterval(reloadClock, 1000);
reloadClock();
