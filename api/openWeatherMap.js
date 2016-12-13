var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=8f6dd315a0dd61d804ea908690d2227d'

module.exports = {
  getTemp: (location) => {
  let encodeLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP}&q=${encodeLocation}`;

  return axios.get(requestUrl).then(res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, res => {
      throw new Error(res.data.message);
    });
  }
}
