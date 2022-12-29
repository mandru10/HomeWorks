const runWeatherApi = () => {
  let weatherKey = "e2506d38244779eb9c25f03f9bdad031";
  let weatherCheck = document.getElementById('temperature');

  const checkTemp = () => {
    fetch(
      `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`
    ).then(function (response) {
      console.log(response);
      return response.json();
    })
  }
  weatherCheck.addEventListener("click", checkTemp);
  const location = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log('Latitude : ' + latitude);
    console.log('Longitude : ' + longitude);
  }
  
  navigator.geolocation.getCurrentPosition(location);

}

window.addEventListener("load", function() {
  runWeatherApi();

})