
function initPage() {
    var inputEl = document.getElementById("city-input");
    var searchEl = document.getElementById("search-button");
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var currentPicEl = document.getElementById("current-pic");
    var currentTempEl = document.getElementById("temperature");
    var forecastMonth = forecastDateEl.getMonth() + 1;
    var forecastYear = forecastDateEl.getFullYear();
    var forecastDateEl = document.createElement("p");
};

forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
forecastEls[i].append(forecastDateEl);
const forecastWeatherEl = document.createElement("img");
function initPage() {
    renderSearchHistory();
}

clearEl.addEventListener("click",function() {
    searchHistory = [];
    renderSearchHistory();
})

function findCity() {
    var cityName = titleCase($("#cityName")[0].value.trim());

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid8a97f26046812d68e00d0b628569ca1c";
}

fetch(apiURL).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) ;
        $("#city-name")[0].textContent = cityName + " (" + moment().format('M/D/YYYY') + ")";
    })
        $("#city-list").append('<button type="button" class="list-group-item list-group-item-light list-group-item-action city-name">' + cityName);
    