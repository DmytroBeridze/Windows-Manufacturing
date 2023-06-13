const timer = (endTime) => {
  const dataTime = (time) => {
    let fullDate = Date.parse(time) - Date.parse(new Date()),
      seconds = Math.floor((fullDate / 1000) % 60),
      minutes = Math.floor((fullDate / 1000 / 60) % 60),
      hours = Math.floor((fullDate / 1000 / 60 / 60) % 24),
      days = Math.floor(fullDate / 1000 / 60 / 60 / 24);

    return {
      fullDate,
      seconds,
      minutes,
      hours,
      days,
    };
  };

  const zeroAdd = (value) => {
    return value <= 9 ? "0" + value : value;
  };

  const timeSet = () => {
    const secondsContainer = document.querySelector("#second"),
      minutesContainer = document.querySelector("#minute"),
      hoursContainer = document.querySelector("#hour"),
      daysContainer = document.querySelector("#day"),
      timeInterval = setInterval(timeChange, 1000);

    timeChange();

    function timeChange() {
      let { fullDate, seconds, minutes, hours, days } = dataTime(endTime);
      secondsContainer.textContent = zeroAdd(seconds);
      minutesContainer.textContent = zeroAdd(minutes);
      hoursContainer.textContent = zeroAdd(hours);
      daysContainer.textContent = zeroAdd(days);

      if (fullDate <= 0) {
        clearInterval(timeInterval);
        secondsContainer.textContent = "00";
        minutesContainer.textContent = "00";
        hoursContainer.textContent = "00";
        daysContainer.textContent = "00";
      }
    }
  };
  timeSet();
};

export default timer;
