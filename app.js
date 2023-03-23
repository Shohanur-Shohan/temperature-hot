

const API_KEY = `1a1accd6dda5037939edecfb640f740b`;
const searchTemperature = () => {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
}

// icon
const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const weatherImgIcon = document.getElementById('weather-icon');
weatherImgIcon.setAttribute('src', url);
