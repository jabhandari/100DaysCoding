const axios = require('axios');

//location
const latitude = 40.7128; // Example latitude (New York City)
const longitude = -74.0060; // Example longitude (New York City)
const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
async function getWeather() {
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
    Response = await axios.get(url);
    const daily= Response.data.daily;

    if (!daily){
        throw new Error('No daily weather data found');
    }
    const maxTemp= Math.trunc(daily.temperature_2m_max[0]);
    const minTemp= Math.trunc(daily.temperature_2m_min[0]);
    const rain= Math.trunc(daily.precipitation_sum[0]);

    const averageTemp= (maxTemp + minTemp) / 2;
    return{
        maxTemp,
        minTemp,
        averageTemp,
        rain
    }
}

function suggestClothing(weather) {
    let clothingSuggestion = '';
    if (weather.averageTemp > 25) {
        clothingSuggestion = 'It\'s hot! Wear light clothing like shorts and a t-shirt.';
    } else if (weather.averageTemp > 15) {
        clothingSuggestion = 'It\'s warm. A light jacket or sweater should be fine.';
    } else {
        clothingSuggestion = 'It\'s cold! Wear a coat, scarf, and gloves.';
    }   

    if (weather.rain > 0) {
        clothingSuggestion += ' Don\'t forget to take an umbrella!';
    }
    return clothingSuggestion;
}

async function sendToDiscord(weather, clothingSuggestion) {
    const message = {
        content: `
        Good Morning ☀️
        Today's weather: Max Temp: ${weather.maxTemp}°C, 
        Min Temp: ${weather.minTemp}°C, 
        Average Temp: ${weather.averageTemp}°C, 
        Rain: ${weather.rain}mm. 
        👕 Clothing Suggestion:
        ${clothingSuggestion}`
    };
    await axios.post(webhookUrl, message);
}

async function main() {
    try {
        const weather = await getWeather();
        const clothingSuggestion = suggestClothing(weather);
        await sendToDiscord(weather, clothingSuggestion);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();