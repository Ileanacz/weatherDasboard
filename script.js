
var inputEl = document.getElementById("city-input");
var searchEl = document.getElementById("search-button");
var clearEl = document.getElementById("clear-history");
var nameEl = document.getElementById("city-name");
var currentPicEl = document.getElementById("current-pic");
var currentTempEl = document.getElementById("temperature");
var forecastDateEl = document.createElement("p");
var searchBtn = document.getElementById("search-button")
var date = new Date().toLocaleDateString()
var cityName = document.getElementById("city-name");
//var forecastYear = forecastDateEl.getFullYear();

forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
forecastDateEl.innerHTML = date
//forecastEls[i].append(forecastDateEl);
const forecastWeatherEl = document.createElement("img");
function initPage() {
    renderSearchHistory();
}

// clearEl.addEventListener("click", function () {
//     searchHistory = [];
//     renderSearchHistory();
// })

function findCity() {
    var cityName = inputEl.value.trim();

    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=8a97f26046812d68e00d0b628569ca1c";
    fetch(apiURL).then(function (response) {
        if (response.ok) {
           return response.json()
        }
    }).then(function (data) {
        var lat = data.coord.lat
        var lon = data.coord.lon
        console.log(data)
        getForcastWeather(lat,lon)
        currentWeather(data)
        // $("#city-name")[0].textContent = cityName + " (" + moment().format('M/D/YYYY') + ")";
        // $("#city-list").
        //     append('<button type="button" class="list-group-item list-group-item-light list-group-item-action city-name">' + cityName);
    })
}

function getForcastWeather(lat,lon){

    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=8a97f26046812d68e00d0b628569ca1c"
    fetch(apiURL).then(function (response) {
        if (response.ok) {
           return response.json()
        }
    }).then(function (data) {
       
        console.log(data)
        
        // $("#city-name")[0].textContent = cityName + " (" + moment().format('M/D/YYYY') + ")";
        // $("#city-list").
        //     append('<button type="button" class="list-group-item list-group-item-light list-group-item-action city-name">' + cityName);
    })
    
}
function currentWeather (data){
    cityName.textContent = data.name
}

searchBtn.addEventListener("click", findCity)
