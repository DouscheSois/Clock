//Tab Functionality
const displayOne = () => {
  clock.style.display = "block";
  countdownClock.style.display = "none";
  hotSpotsClock.style.display = "none";
};
displayOne();

const displayTwo = () => {
  clock.style.display = "none";
  countdownClock.style.display = "block";
  hotSpotsClock.style.display = "none";
};
displayTwo();

const displayThree = () => {
  clock.style.display = "none";
  countdownClock.style.display = "none";
  hotSpotsClock.style.display = "block";
};
displayThree();
