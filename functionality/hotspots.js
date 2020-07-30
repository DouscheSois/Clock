// San Francisco time
const sanFrancisco = () => {
  let sanFranciscoLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Tijuana",
  });
  let sanFranciscoFullDate = new Date().toLocaleDateString();
  sanFranciscoTime.innerHTML = sanFranciscoLocalTime;
  sanFranciscoDate.innerHTML = sanFranciscoFullDate;
};

// New York time
const newYork = () => {
  let newYorkLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  let newYorkFullDate = new Date().toLocaleDateString();

  newYorkTime.innerHTML = newYorkLocalTime;
  newYorkDate.innerHTML = newYorkFullDate;
};

// Sao Paolo time
const saoPaulo = () => {
  let saoPauloLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
  });
  let saoPauloFullDate = new Date().toLocaleDateString();

  saoPauloTime.innerHTML = saoPauloLocalTime;
  saoPauloDate.innerHTML = saoPauloFullDate;
};

// London time
const london = () => {
  let londonLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  });
  let londonFullDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Europe/London",
  });

  londonTime.innerHTML = londonLocalTime;
  londonDate.innerHTML = londonFullDate;
};

// New Delhi time
const newDelhi = () => {
  let newDelhiLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  let newDelhiFullDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  newDelhiTime.innerHTML = newDelhiLocalTime;
  newDelhiDate.innerHTML = newDelhiFullDate;
};

// Tokyo time
const tokyo = () => {
  let tokyoLocalTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  let tokyoFullDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Tokyo",
  });

  tokyoTime.innerHTML = tokyoLocalTime;
  tokyoDate.innerHTML = tokyoFullDate;
};

const displayHotSpots = () => {
  sanFrancisco();
  newYork();
  saoPaulo();
  london();
  newDelhi();
  tokyo();
};

setInterval(displayHotSpots, 1000);
displayHotSpots();
