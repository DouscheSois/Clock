(() => {
  const clock = document.getElementById("clock");
  const countdownClock = document.getElementById("countdown-clock");
  const hotSpotsClock = document.getElementById("hotspots-clock");

  document.getElementById("clock-tab").addEventListener("click", (e) => {
    clock.style.display = "block";
    countdownClock.style.display = "none";
    hotSpotsClock.style.display = "none";
  });

  document.getElementById("countdown-tab").addEventListener("click", (e) => {
    clock.style.display = "none";
    countdownClock.style.display = "block";
    hotSpotsClock.style.display = "none";
  });

  document.getElementById("hotspots-tab").addEventListener("click", (e) => {
    clock.style.display = "none";
    countdownClock.style.display = "none";
    hotSpotsClock.style.display = "block";
  });
})();
