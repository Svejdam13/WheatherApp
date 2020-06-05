const storage = new Storage()

//get stored location data
const weatherLocation = storage.getLocationData()

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//init ui
const ui = new UI()

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //change location
  weather.changeLocation(city, country)

  //set location in local storage
  storage.setLocationData(city, country)

  //get and display weather
  getWeather()

  //close modal
  $('#locModal').modal('hide') // Musis pouzit JQuery, protoze Bootstrap pouziva JQuery
})

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results); // display results from API in your design
    })
    .catch(err => console.log(err))
}
