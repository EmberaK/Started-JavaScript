const apiKey = 'eab72c9b9317ab92fddcc4efd7523ada';
let city = 'Poltava'; // Значение по умолчанию
const oficialCity = document.getElementById('your-city');
oficialCity.textContent = city;

document.getElementById('button-city').addEventListener("click", () => {
    const enterCity = document.getElementById('input-city');
    city = enterCity.value.trim(); // Используем trim() для удаления лишних пробелов
    if (city) {
        oficialCity.textContent = city;
        getAPIDatas();
    }
    enterCity.value = '';
});

const getRealDataAndTime = () => {
    const currentDate = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthName = months[currentDate.getMonth()];
    const date = String(currentDate.getUTCDate()).padStart(2, '0'); // Добавляем ведущий ноль
    const year = currentDate.getFullYear();
    const dayName = daysOfWeek[currentDate.getDay()];

    document.getElementById('data').textContent = `${monthName} ${date}, ${year} - ${dayName}`;

    let hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Преобразуем в формат 12 часов

    document.getElementById('time').textContent = `${hours}:${minutes} ${ampm}`;
};

setInterval(getRealDataAndTime, 1000);
getRealDataAndTime();

const weatherIcons = {
    Clear: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXPsx4tv1czTvSoiEGkeDye2xQ1xbdONGFQ&s', // Ясная погода
    Clouds: 'https://openweather.co.uk/storage/app/media/ow_clouds_2.jpg', // Облачно
    Rain: 'https://cdn.britannica.com/65/123865-050-687A9E4C/Rain.jpg', // Дождь
    Snow: 'https://cdn.britannica.com/79/149179-004-01C6E1CE/snowflake-threads-wool-coat.jpg?s=1500x700&q=85', // Снег
    Thunderstorm: 'https://i.pinimg.com/originals/16/89/73/168973adc1fc3780492adb0af6d38345.jpg', // Гроза
    Drizzle: 'https://i.pinimg.com/564x/f7/52/40/f752404e8036da1263901293e057cce1.jpg', // Морось
    Mist: 'https://i.pinimg.com/564x/7a/13/6b/7a136b5211c69dbcbe9315614966c556.jpg', // Туман
};

const updateWeatherData = (data) => {
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed} km/h SSE`;
    document.getElementById('real-temp').textContent = `Temp: ${Math.floor(data.main.temp - 273.15)}°C`;
    document.getElementById('likes-temp').textContent = `Feels like: ${Math.floor(data.main.feels_like - 273.15)}°C`;
    
    const mainWeatherData = data.weather[0].main;
    document.getElementById('main-weather').textContent = mainWeatherData;
    
    // Обновление картинки на основе типа погоды
    const weatherIcon = weatherIcons[mainWeatherData] || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdzen.ru%2Fa%2FXz5FZY7lch3bkJQv&psig=AOvVaw0zi6Ya69jjural4XkSuQfT&ust=1725553515482000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjf7JDaqYgDFQAAAAAdAAAAABAJ';
    document.getElementById('weather-icon').src = weatherIcon;
};

async function getAPIDatas() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных: ${response.statusText}`);
        }
        const data = await response.json();
        updateWeatherData(data);
    } catch (error) {
        console.log(`Ошибка: ${error.message}`);
    }
}

getAPIDatas();

document.getElementById('update-data').addEventListener('click', function(){
    getAPIDatas();
})