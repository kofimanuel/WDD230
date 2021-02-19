let tempF= parseFloat(document.getElementById('temperature').innerText);
let windSpeed= parseFloat(document.getElementById('wind').innerText);
let windChill= 35.74+0.6215*tempF-35.75*windSpeed**0.16+0.4275*tempF*windSpeed**0.16;

if ((tempF <= 50) && (windSpeed >= 3)) {
	document.getElementById('chill').innerHTML= Math.round(windChill * 100)/100 + '<p>&deg;F<p>';
}
else {
	document.getElementById('chill').innerHTML= "N/A";
}