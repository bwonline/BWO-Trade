const convertMS = (milliseconds) => {
  let day;
  let hour;
  let minute;
  let seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  day = Math.floor(hour / 24);
  hour %= 24;
  return {
    day,
    hour,
    minute,
    seconds,
  };
};

const renderTimer = () => {
  const dateNow = new Date();

  const dateStart = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate(),
    0,
    0,
    0
  );

  const dateEnd = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate(),
    15,
    0,
    0
  );

  const dateNowMill = dateNow.getTime();
  const dateEndMill = dateEnd.getTime();

  const timeRemaining = (() => {
    const r = dateEndMill - dateNowMill;

    if (r < 0 || dateNow.getUTCDay() > 5) {
      return '<i class="fa fa-truck" aria-hidden="true"></i> ORDER BEFORE 3PM FOR NEXT DAY DELIVERY';
    }

    const { hour, minute, seconds } = convertMS(r);

    const hr = `0${hour}`.slice(-2);
    const min = `0${minute}`.slice(-2);
    const sec = `0${seconds}`.slice(-2);

    return `<i class="fa fa-truck" aria-hidden="true"></i> ORDER BEFORE 3PM
                  FOR NEXT DAY DELIVERY: <i class="fa fa-clock-o" aria-hidden="true"></i> ${hr}:${min}:${sec}`;
  })();

  document.getElementById(
    "countdown"
  ).innerHTML = `<div>${timeRemaining}</div>`;
};

setInterval(function () {
  renderTimer();
}, 1000);
