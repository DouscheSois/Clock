(() => {
  // The HOT SPOTS time
  const sanFranciscoTime = document.getElementById("sanfrancisco-time");
  const newYorkTime = document.getElementById("newyork-time");
  const saoPauloTime = document.getElementById("saopaulo-time");
  const londonTime = document.getElementById("london-time");
  const newDelhiTime = document.getElementById("newdelhi-time");
  const tokyoTime = document.getElementById("tokyo-time");

  // The HOT SPOTS date
  const sanFranciscoDate = document.getElementById("sanfrancisco-date");
  const newYorkDate = document.getElementById("newyork-date");
  const saoPauloDate = document.getElementById("saopaulo-date");
  const londonDate = document.getElementById("london-date");
  const newDelhiDate = document.getElementById("newdelhi-date");
  const tokyoDate = document.getElementById("tokyo-date");

  const renderSanFranciscoDateTime = (date) => {
    sanFranciscoTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "America/Tijuana",
    });
    sanFranciscoDate.innerHTML = date.toLocaleDateString();
  };

  const renderNewYorkDateTime = (date) => {
    newYorkTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    });
    newYorkDate.innerHTML = date.toLocaleDateString();
  };

  const renderSaoPauloDateTime = (date) => {
    saoPauloTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "America/Sao_Paulo",
    });
    saoPauloDate.innerHTML = date.toLocaleDateString();
  };

  const renderLondonDateTime = (date) => {
    londonTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "Europe/London",
    });
    londonDate.innerHTML = date.toLocaleDateString("en-US", {
      timeZone: "Europe/London",
    });
  };

  const renderNewDelhiDateTime = (date) => {
    newDelhiTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    newDelhiDate.innerHTML = newDelhiFullDate = date.toLocaleDateString(
      "en-US",
      {
        timeZone: "Asia/Kolkata",
      }
    );
  };

  const renderTokyoDateTime = (date) => {
    tokyoTime.innerHTML = date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Tokyo",
    });
    tokyoDate.innerHTML = date.toLocaleDateString("en-US", {
      timeZone: "Asia/Tokyo",
    });
  };

  const displayHotSpots = () => {
    const date = new Date();

    renderSanFranciscoDateTime(date);
    renderNewYorkDateTime(date);
    renderSaoPauloDateTime(date);
    renderLondonDateTime(date);
    renderNewDelhiDateTime(date);
    renderTokyoDateTime(date);
  };

  setInterval(displayHotSpots, 1000);
  displayHotSpots();
})();
