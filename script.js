const API_KEY = `811e3c3f80138603da250e9cbbdb2805`

//  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
const search = document.querySelector('#search')
const cel = document.querySelector('#cel')
const form = document.querySelector('form')

const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)

    const data = await response.json()
    console.log(data);
    return showWeather(data)
}
const showWeather = (data) => {
    if(data.cod==404){
        cel.innerHTML=` <h1> ${data.message}</h1>`
    }
    cel.innerHTML = `
    <div>
                <img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
            </div>
            <div style="font-family: cursive;">
                <h1>${data.main.temp} °C</h1>
                 <h2>${data.weather[0].main}</h2>
            </div>`
}

form.addEventListener(
    "submit",
    function (event) {
        getweather(search.value);
        event.preventDefault()
    }
)

