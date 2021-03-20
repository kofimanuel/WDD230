const request= 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsObject) {
        console.table(jsObject);
        const towns= jsObject['towns'];
        var name= towns[0].name;

        for(var i in towns){
            if(towns[i].name === 'Preston'){
                var event= towns[i].events.join('<br>');
                document.getElementById('jsontxt').innerHTML= event;
            }
        }
    })

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsObject) {
        console.table(jsObject);
        const towns= jsObject['towns'];
        var name= towns[0].name;

        for(var i in towns){
            if(towns[i].name == 'Soda Springs'){
                var event2= towns[i].events.join('<br>');
                document.getElementById('jsontxt2').innerHTML= event2;
            }
        }
    })

fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsObject) {
        console.table(jsObject);
        const towns= jsObject['towns'];
        var name= towns[0].name;
        
        for(var i in towns){
            if(towns[i].name == 'Fish Haven'){
                var event3= towns[i].events.join('<br>');
                document.getElementById('jsontxt3').innerHTML= event3;
            }
        }
    })