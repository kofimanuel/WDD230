const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject)  {
		const towns = jsonObject['towns'];

		console.table(jsonObject); // temporary checking for valid response and data parsing	 

				let town = document.createElement('div');
				let h2 = document.createElement('h2');
				let motto = document.createElement('h3');
				let par1 = document.createElement('p');
				let par2 = document.createElement('p');
				let par3 = document.createElement('p');

				h2.textContent = towns[1].name;
				motto.textContent = towns[1].motto;
				par1.textContent = 'Year Founded: ' + towns[1].yearFounded;
				par2.textContent = 'Population: ' + towns[1].currentPopulation; 

				town.appendChild(h2);
				town.appendChild(motto);
				town.appendChild(par1);
				town.appendChild(par2);
				document.querySelector('div.towns').appendChild(town);		
});

fetch(requestURL)
.then(function (response) {
		return response.json();
	})
.then(function (jsonObject)  {
		const towns2 = jsonObject['towns'];

		console.table(jsonObject); // temporary checking for valid response and data parsing	 

				let town2 = document.createElement('div');
				let h22 = document.createElement('h2');
				let motto2 = document.createElement('h3');
				let par12 = document.createElement('p');
				let par22 = document.createElement('p');
				let par32 = document.createElement('p');

				h22.textContent = towns2[5].name;
				motto2.textContent = towns2[5].motto;
				par12.textContent = 'Year Founded: ' + towns2[5].yearFounded;
				par22.textContent = 'Population: ' + towns2[5].currentPopulation; 

				town2.appendChild(h22);
				town2.appendChild(motto2);
				town2.appendChild(par12);
				town2.appendChild(par22);

				document.querySelector('div.towns').appendChild(town2);
			
});

fetch(requestURL)
.then(function (response) {
		return response.json();
	})
.then(function (jsonObject)  {
		const towns3 = jsonObject['towns'];

		console.table(jsonObject); // temporary checking for valid response and data parsing	 

				let town3 = document.createElement('div');
				let h23 = document.createElement('h2');
				let motto3 = document.createElement('h3');
				let par13 = document.createElement('p');
				let par23 = document.createElement('p');

				h23.textContent = towns3[6].name;
				motto3.textContent = towns3[6].motto;
				par13.textContent = 'Year Founded: ' + towns3[6].yearFounded;
				par23.textContent = 'Population: ' + towns3[6].currentPopulation; 

				town3.appendChild(h23);
				town3.appendChild(motto3);
				town3.appendChild(par13);
				town3.appendChild(par23);

				document.querySelector('div.towns').appendChild(town3);
			
});
