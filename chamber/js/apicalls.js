const apiURL= 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=dc34ee39826da6f5a41cfa8f8f62e652';

fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('condition').textContent = jsObject.current.weather[0].description;
    document.getElementById('alert').innerHTML= jsObject.alerts;
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Variables
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let daysArr = [];
    let iconsArr = [];
    let descIcon = [];
    let tempArr = [];
    //Arrays
    for(let i = 0; i < jsObject.daily.length; i++) {
      if (jsObject.daily[i].dt.indexOf('18:00:00') > -1) {
        let tempDay = new Date(jsObject.daily[i].dt);
        daysArr.push(days[tempDay.getDay()]);
        iconsArr.push(jsObject.daily[i].temp[0].icon);
        descIcon.push(jsObject.list[i].weather[0].description)
        tempArr.push(jsObject.list[i].main.temp);
      }
    }
    for(let i in tempArr){
      //HTML elements
      let divCard = document.createElement('div');
      let dayP = document.createElement('p');
      let iconImg = document.createElement('img');
      let tempP = document.createElement('p');
      divCard.className = "forecast-day";
      dayP.setAttribute('id', `dayOfWeek${i + 1}`);
      iconImg.setAttribute('id', `icon${i + 1}`);
      tempP.setAttribute('id', `temp${i + 1}`);
      divCard.appendChild(dayP);
      divCard.appendChild(iconImg);
      divCard.appendChild(tempP);
      document.getElementById("openForecast").appendChild(divCard);
      //Assigning values
      document.getElementById(`dayOfWeek${i + 1}`).textContent = `${daysArr[i]}`;
      document.getElementById(`icon${i + 1}`).setAttribute('src', `https://openweathermap.org/img/wn/${iconsArr[i]}@2x.png`);
      document.getElementById(`icon${i + 1}`).setAttribute('alt', `${descIcon[i]} icon`);
		  document.getElementById(`temp${i + 1}`).textContent = `${tempArr[i].toFixed(0)} °C`;
    }
  });

  //Forecast JSON
const forecastURL= 'https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=dc34ee39826da6f5a41cfa8f8f62e652&units=imperial';
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Variables
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let daysArr = [];
    let iconsArr = [];
    let descIcon = [];
    let tempArr = [];
    //Arrays
    for(let i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.indexOf('18:00:00') > -1) {
        let tempDay = new Date(jsObject.list[i].dt_txt);
        daysArr.push(days[tempDay.getDay()]);
        iconsArr.push(jsObject.list[i].weather[0].icon);
        descIcon.push(jsObject.list[i].weather[0].description)
        tempArr.push(jsObject.list[i].main.temp);
      }
    }
    //for(let i = 0; i < tempArr.length; i++) {
    for(let i in tempArr){
      //HTML elements
      let divCard = document.createElement('div');
      let dayP = document.createElement('p');
      let iconImg = document.createElement('img');
      let tempP = document.createElement('p');
      divCard.className = "forecast-day";
      dayP.setAttribute('id', `dayOfWeek${i + 1}`);
      iconImg.setAttribute('id', `icon${i + 1}`);
      tempP.setAttribute('id', `temp${i + 1}`);
      divCard.appendChild(dayP);
      divCard.appendChild(iconImg);
      divCard.appendChild(tempP);
      document.getElementById("openForecast").appendChild(divCard);
      //Assigning values
      document.getElementById(`dayOfWeek${i + 1}`).textContent = `${daysArr[i]}`;
      document.getElementById(`icon${i + 1}`).setAttribute('src', `https://openweathermap.org/img/wn/${iconsArr[i]}@2x.png`);
      document.getElementById(`icon${i + 1}`).setAttribute('alt', `${descIcon[i]} icon`);
	  document.getElementById(`temp${i + 1}`).textContent = `${tempArr[i].toFixed(0)} °C`;
    }
  });


