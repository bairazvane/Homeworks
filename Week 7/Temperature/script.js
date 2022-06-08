var showTemp = function(data){
    var theContainer =  document.querySelector('.list')
    var newLi = document.createElement('li')
    var temp = data.main.temp - 273.15
    newLi.innerHTML = `The temperature in ${data.name} is ${temp.toFixed(0)}°C.`
    theContainer.appendChild(newLi)
}

const getCountryWeather = function (country){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=ad643f699ed805e17964d3f586353d4a`)
    .then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        showTemp(data)
    })
}

getCountryWeather('romania')
getCountryWeather('portugal')


