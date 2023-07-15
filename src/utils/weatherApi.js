function weatherApi() {
  const APIkey = "f69e43c1e4133c1dfb285207c79191e4";
  const latitude = "30.2672";
  const longitude = "-97.7431";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  );
}

export default weatherApi;
