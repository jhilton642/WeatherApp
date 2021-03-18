document.getElementById('getWeather').addEventListener('click', getWeather);


function getWeather() {
  let weatherList = document.getElementById('weatherList');
  let city = document.getElementById('city');


  if (city.value.length === 0) {
    weatherList.innerHTML = 'Please Enter the City name';
    return;
  }
  let key = 'ab6e8c01e4475d5fb322c5e5e2a68cd8'

  let url = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&q=${city.value}&units=imperial`;

  console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(weather => {

      let innerHTML1 = "";
      let innerHTML2 = "";
      let innerHTML3 = "";
      let innerHTML4 = "";
      let innerHTML5 = "";
      let innerHTML6 = "";
      let temp = 0;
      let temp2 = 0;
      let temp3 = 0;
      let temp4 = 0;
      let temp5 = 0;
      let temp6 = 0;
      for (let day of weather.list) {
        var currentDate = (new Date(Date.now())).getDay();
        var weatherDate = day.dt;
        let niceDay = new Date((weatherDate + weather.city.timezone) * 1000);
        if (temp < 1) {
          innerHTML1 += `
          <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
          temp = 1;
        }
        if (currentDate == niceDay.getDay()) {
          innerHTML1 += `
                    <div class="grid-item">
                        <h2> ${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day1.innerHTML = innerHTML1;
        }
        currentDate = (currentDate + 1) % 7;
        if (currentDate == niceDay.getDay()) {
          if (temp2 < 1) {
            innerHTML2 += `
            <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
            temp2 = 1;
          }
          innerHTML2 += `
                    <div class="grid-item">
                        <h2>${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day2.innerHTML = innerHTML2;
        }
        currentDate = (currentDate + 1) % 7;
        if (currentDate == niceDay.getDay()) {
          if (temp3 < 1) {
            innerHTML3 += `
            <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
            temp3 = 1;
          }
          innerHTML3 += `
                    <div class="grid-item">
                        <h2>${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day3.innerHTML = innerHTML3;
        }
        currentDate = (currentDate + 1) % 7;

        if (currentDate == niceDay.getDay()) {
          if (temp4 < 1) {
            innerHTML4 += `
            <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
            temp4 = 1;
          }
          innerHTML4 += `
                    <div class="grid-item">
                        <h2>${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day4.innerHTML = innerHTML4;
        }
        currentDate = (currentDate + 1) % 7;

        if (currentDate == niceDay.getDay()) {
          if (temp5 < 1) {
            innerHTML5 += `
            <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
            temp5 = 1;
          }
          innerHTML5 += `
                    <div class="grid-item">
                        <h2>${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day5.innerHTML = innerHTML5;
        }
        currentDate = (currentDate + 1) % 7;

        if (currentDate == niceDay.getDay()) {
          if (temp6 < 1) {
            innerHTML6 += `
            <h2>Date: ${niceDate(day.dt, weather.city.timezone)}</h2>`
            temp6 = 1;
          }
          innerHTML6 += `
                    <div class="grid-item">
                        <h2>${niceTime(day.dt, weather.city.timezone)}</h2>
                        <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                        <p>Wind at ${day.wind.speed} mph out of the ${windDirection(day.wind.deg)}</p>
                        <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
                        <p>Temp: ${day.main.temp}</p>
                    </div>`;
          day6.innerHTML = innerHTML6;
        }
      }
      city.value = weather.city.name;
    });

}
var tabLinks = new Array();
var contentDivs = new Array();

function init() {

  // Grab the tab links and content divs from the page
  var tabListItems = document.getElementById('tabs').childNodes;
  for (var i = 0; i < tabListItems.length; i++) {
    if (tabListItems[i].nodeName == "LI") {
      var tabLink = getFirstChildWithTagName(tabListItems[i], 'A');
      var id = getHash(tabLink.getAttribute('href'));
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById(id);
    }
  }

  // Assign onclick events to the tab links, and
  // highlight the first tab
  var i = 0;

  for (var id in tabLinks) {
    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function () {
      this.blur()
    };
    if (i == 0) tabLinks[id].className = 'selected';
    i++;
  }

  // Hide all content divs except the first
  var i = 0;

  for (var id in contentDivs) {
    if (i != 0) contentDivs[id].className = 'tabContent hide';
    i++;
  }
}

function showTab() {
  var selectedId = getHash(this.getAttribute('href'));

  // Highlight the selected tab, and dim all others.
  // Also show the selected content div, and hide all others.
  for (var id in contentDivs) {
    if (id == selectedId) {
      tabLinks[id].className = 'selected';
      contentDivs[id].className = 'tabContent';
    } else {
      tabLinks[id].className = '';
      contentDivs[id].className = 'tabContent hide';
    }
  }

  // Stop the browser following the link
  return false;
}

function getFirstChildWithTagName(element, tagName) {
  for (var i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
  }
}

function getHash(url) {
  var hashPos = url.lastIndexOf('#');
  return url.substring(hashPos + 1);
}


function niceTime(dateTime, offset) {
  let day = new Date((dateTime + offset) * 1000).toLocaleString();
  let hour = day.indexOf(' ') + 1;
  let time = day.substring(hour);
  time = time.substring(0, time.lastIndexOf(':')) + time.substring(time.length - 3)
  return time;
}

function niceDate(date, offset) {
  let day = new Date((date + offset) * 1000);
  day = day.toLocaleString();
  return day.substring(0, day.indexOf(','));
}

function windDirection(degrees) {
  let direction = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

  degrees = Math.round(degrees + 11.25) % 360;
  let index = Math.floor(degrees / 22.5);
  return direction[index];
}

function getDayOfWeek() {
  var dayOfWeek = (new Date(Date.now())).getDay();
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  document.getElementById("weekDay2").innerHTML = weekDays[(dayOfWeek + 1) % 7];
  document.getElementById("weekDay3").innerHTML = weekDays[(dayOfWeek + 2) % 7];
  document.getElementById("weekDay4").innerHTML = weekDays[(dayOfWeek + 3) % 7];
  document.getElementById("weekDay5").innerHTML = weekDays[(dayOfWeek + 4) % 7];
  document.getElementById("weekDay6").innerHTML = weekDays[(dayOfWeek + 5) % 7];
}