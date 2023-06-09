
var citiesContainer = document.getElementById('city-container');
var fetchDataButton = document.getElementById('fetch-button');
var weatherForcast = document.getElementById('5Day-forcast');
 var searchButton= document.getElementById('search-box');
 var Today = document.getElementById('date-time');
  Today ===today;
 var today = dayjs();
   $('#currentDay').text(today.format('MM/DD/YYYY'));  
function getOpenWeatherData() {
  var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      console.log(data);
      for (var i = 0; i < data.length; i++) {
       
        var cityName = document.createElement('h3');
        var cityTemp = document.createElement('p');
        var cityWind = document.createElement('p');
        var cityHumid = document.createElement('p');

        cityName.textContent = data[i].main.name;
        cityTemp.textContent = data[i].main.temp;
        cityWind.textContent= data[i].wind.speed;
        cityHumid.textContent= data[i].main.humidity;
        dateTime.textContent= dayjs();

        citiesContainer.append(cityName);

        weatherForcast.append(cityTemp);
        cityTemp.append(cityWind);
        cityHumid.append(cityHumid);
      }
    });
}
searchButton.addEventListener('click', getOpenWeatherData);
  