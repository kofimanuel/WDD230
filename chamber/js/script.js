//Get current year
document.getElementById('current-year').innerHTML= new Date().getFullYear();
//Get last modified time
document.getElementById('last-time').innerHTML= document.lastModified;
//Close aside element
function closeAside(){
	document.getElementById('closeable').style.display= 'none';
}
//Preview
function change(src) {
	document.getElementById('main').src= src;
}

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

