//Get current year
document.getElementById('current-year').innerHTML= new Date().getFullYear();var numbers=  [2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
function closeAside(){
	document.getElementById('closeable').style.display= 'none';
}
//Preview
function change(src) {
	document.getElementById('main').src= src;
}
//Toggle
function navMenu() {
  document.getElementById('hidden').classList.toggle('main-nav');
}

//Directory data from JSON file
fetch('https://kofimanuel.github.io/WDD230/lesson9/data.json')
.then(function (response) {
	return response.json();
})
.then(function (jsonObject)  {
	const business = jsonObject['businesses'];

	console.table(jsonObject); // temporary checking for valid response and data parsing
	for(let i = 0; i < business.length; i++){
		let card = document.createElement('section');
		let logo= document.createElement('img');
		let h3 = document.createElement('h2');
		let address = document.createElement('p');
		let mail = document.createElement('a');
		let site= document.createElement('a');

		logo.setAttribute('src', 'images/' + business[i].logo);
		h3.textContent = business[i].name;
		address.textContent = business[i].address;
		mail.textContent = business[i].email; 
		site.textContent = business[i].site;
		site.setAttribute('href', business[i].site)
		mail.setAttribute('href', 'mailto:')

		card.appendChild(logo);
		card.appendChild(h3);
		card.appendChild(address);
		card.appendChild(mail);
		card.appendChild(site);

		document.querySelector('div.cards').appendChild(card);
	}
});
//Grid and List View
var elements= document.getElementsByClassName('cards');
var i = 0;
function listView(){
	for(i in elements) {
		elements[i].style.display= 'block';
	}
}
function gridView(){
	for(i in elements) {
		elements[i].style.display= 'grid';
	}
}
//Get API from OpenWeather
const apiURL= 'https://api.openweathermap.org/data/2.5/onecall?lat=5.666667&lon=0.000000&exclude=hourly,minutely&appid=dc34ee39826da6f5a41cfa8f8f62e652&units=metric';

fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    

let forecast = document.createElement('section');
for (let i = 0; i < 3; i++) {
  let dayForecast = document.createElement('div');
  dayForecast.setAttribute('id', `card${i+1}`);
  let labels = document.createElement('div');
  let icons = document.createElement('img');
  let temps = document.createElement('div');
  let actualDay = new Date(jsObject.daily[i + 1].dt * 1000);
  labels.textContent = days[actualDay.getDay()];
  icons.setAttribute('src', `https://openweathermap.org/img/wn/${jsObject.daily[i].weather[0].icon}@4x.png`);
  icons.setAttribute('alt', `${jsObject.daily[i].weather[0].main} icon`);
  temps.textContent = `${jsObject.daily[i].temp.day.toFixed(0)}°C ${jsObject.daily[i].weather[0].description}`;
  dayForecast.appendChild(labels);
  dayForecast.appendChild(icons);
  dayForecast.appendChild(temps);
  forecast.appendChild(dayForecast);
};
document.querySelector('div.forecast').appendChild(forecast);
});
//Get last modified time
const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    days= ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
	    lastTime= new Date(document.lastModified);
document.getElementById('last-time').innerHTML= days[lastTime.getDay()] +' '+ months[lastTime.getMonth()] +' '+ numbers[lastTime.getDate()] +', '+ lastTime.getFullYear();


