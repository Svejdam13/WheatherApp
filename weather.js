
class Weather {
  constructor(city, country) {
    this.apiKey = '3ad9369f5dd481e8bc0a070cb5745947'
    this.city = city
    this.country = country
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    )

    const responseData = await response.json()
    console.log(responseData)

    return responseData
  }

  //change location
  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}
