const API_KEY = `09ee2eb13ca78e73295c32808035dfa9`;
const searchTemperature = () => {
  const cityName = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("situation", temperature.weather[0].main);
  //set Weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imageIcon = document.getElementById("weather-icon");
  imageIcon.setAttribute("src", url);
  console.log(temperature);
};
