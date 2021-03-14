const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name === 'Fish Haven' || towns[i].name === 'Preston' || towns[i].name === 'Soda Springs') {
                let card = document.createElement('section');
                let divText = document.createElement('div');
                let divImg = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let annualRainFall = document.createElement('p');
                let image = document.createElement('img');

                divText.className = "textContainer";
                divImg.className = "imgContainer";
                h2.textContent = towns[i].name;
                motto.className = 'motto';
                motto.textContent = towns[i].motto;
                yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
                population.textContent = `Population: ${towns[i].currentPopulation}`;
                annualRainFall.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
                image.setAttribute('src', 'images/' + towns[i].photo);
                divText.appendChild(h2);
                divText.appendChild(motto);
                divText.appendChild(yearFounded);
                divText.appendChild(population);
                divText.appendChild(annualRainFall);
                divImg.appendChild(image);
                card.appendChild(divText);
                card.appendChild(divImg);
                document.querySelector('section.towns').appendChild(card);
            }

        }
    })