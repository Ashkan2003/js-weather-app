// we create this project with a api given by website openWeatherMap-api
// api : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// this api is for GET method
const inputElem = document.querySelector('input')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '48927c25468581b2ef9f1916c4373a46' // the key of api that given when we sign in the site
}

function fetchData () {
    let countryValue = inputElem.value // get the name of country from input

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`) // get the api-url and country name and user key from user
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showData(data) // send the json-formatt  converted to js-obj file to the showData function
        })
}

function showData (data) {
    let cityElem = document.querySelector('.city') 
    cityElem.innerHTML = `${data.name} , ${data.sys.country}` // get the country name from the json-file and put it to cityElem

    let dateElem = document.querySelector('.date')
    dateElem.innerHTML = showDate()

    let tempElem = document.querySelector('.temp') 
    tempElem.innerHTML = `${Math.floor(data.main.temp-273.15)}°c` // get the country-temp from the json-file and put it to tempElem

    let weatherElem = document.querySelector('.hi-low')
    weatherElem.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c` // get the country-min-max-temp from the json-file and put it to weatherElem

    let statusElem = document.querySelector('.weather')
    statusElem.innerHTML = `${data.weather[0].main}` // get the country-weathe-status from the json-file and put it to status-Elem
}

function showDate() {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year= now.getFullYear()
    let date = now.getDate()

    return `${day} ${date} ${month} ${year}`
}



inputElem.addEventListener('keypress', (event) => { // when a onkeypress event runs,the if the user click on enter keyboard,then run the fetchData function
    if(event.keyCode === 13){
        fetchData()
    }
})




























