document.getElementById('current-year').innerHTML= new Date().getFullYear();

const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
	  days= ['Sundays', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateFormatted= days[new Date().getDay()]+ ', ' + new Date().getDate() + ' ' + months[new Date().getMonth()]
+ ' ' + new Date().getFullYear();
document.getElementById('current-date').textContent= dateFormatted;


function navMenu() {
  document.getElementById("nav-menu").classList.toggle("hidden");
}