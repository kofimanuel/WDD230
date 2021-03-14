//Sunday banner
var node= document.createTextNode('Sunday= Preston Pancakes in the Park! 9:00 a.m. Sunday at the city park pavillion');
var p= document.createElement('p');
var banner= document.getElementsByTagName('aside');
p.appendChild(node);
banner[0].appendChild(p);
banner[0].style.display= 'none';
banner[0].style.position= 'sticky';
banner[0].style.top= '0';
banner[0].style.backgroundColor= 'gold';
banner[0].style.textAlign= 'center';
var day= new Date().getDay();
if(day== 0){
	banner[0].style.display= 'block';
}


//JS Date
document.getElementById('current-year').innerHTML= new Date().getFullYear();

//JavaScript Date
const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
	  days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateFormatted= days[new Date().getDay()]+ ', ' + new Date().getDate() + ' ' + months[new Date().getMonth()]
+ ' ' + new Date().getFullYear();
document.getElementById('current-date').textContent= dateFormatted;

//Hamburger Toggle
function navMenu() {
  document.getElementById('nav-menu').classList.toggle('hidden');
}

//Json
const apiURL= 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=dc34ee39826da6f5a41cfa8f8f62e652&units=imperial';
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.weather[0].main +' '+jsObject.main.temp.toFixed(0);
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('low').textContent = jsObject.main.temp_min.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

    //Wind Chill
    let temper = parseFloat(jsObject.main.temp);
    let windSpeed = parseFloat(jsObject.wind.speed);
    let windChill = calc(t, s);
    function calc(x, y) {
      let result = 35.74 + (0.6215 * x) - (35.75 * Math.pow(y, 0.16)) + (0.4275 * x * Math.pow(y, 0.16));
      return result.toFixed(0);
    }
    let answer = (temper <= 50 && windSpeed > 3) ? `${windChill} °C` : 'N/A';
    document.getElementById('chill').textContent = answer;
  });
//Forecast
const forecastURL= 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dc34ee39826da6f5a41cfa8f8f62e652&units=imperial';
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Variables
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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
