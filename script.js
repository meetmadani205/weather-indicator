const ibox = document.querySelector(".ibox");

const sbtn = document.getElementById('sbtn');

const img1 = document.querySelector('.img1');

const temp = document.querySelector("#weatherinfo");

const des = document.querySelector(".weatherinfo");

const humidity = document.querySelector('#humidity');

const windspeed = document.querySelector('#windspeed');

async function checkweather(city)
{
    const ak = "bffdb483612851d829655c8541867923";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ak}`;

    const weatherd = await fetch(`${url}`).then(response =>response.json());
    
    if(weatherd.cod ==='404')
    {
        console.log("Error!");
        img1.src = "error.png";

        temp.innerHTML = `--°C`;

        des.innerHTML = `Data not found!`;
    
        humidity.innerHTML = `--%`;
    
        windspeed.innerHTML = `--km\h`;
        return;
    }

    temp.innerHTML = `${Math.round(weatherd.main.temp - 273.15)}°C`;

    des.innerHTML = `${weatherd.weather[0].description}`;

    humidity.innerHTML = `${weatherd.main.humidity}%`;

    windspeed.innerHTML = `${weatherd.wind.speed} km\h`;

    switch(weatherd.weather[0].main)
    {
        case 'Clouds' :  
                       img1.src = "cloud.png";
                       break;
        case 'Clear'  :
                       img1.src = "clear.png";
                       break;
        case 'Rain'   :
                        img1.src = "rain.png";
                        break;
        case 'Mist'   : 
                       img1.src = "mist.png";
                       break;
        case 'Snow'   :
                        img1.src = "snow.png";
                        break;
    }
}
sbtn.addEventListener('click', () =>{
    checkweather(ibox.value);
})