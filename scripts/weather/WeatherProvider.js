
import {defaultKey} from "../Settings.js"
import { chooseWeather } from "../parks/ParkSelect.js" // how to i provide a varible of information about the cities?



let forecast = []
export const useWeather = () => {
    return forecast.slice()
    
}
console.log(useWeather)
export const getWeather = () => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?lat=${chooseWeather.data.latitude}&lon=${chooseWeather.data.longitude}&appid=${defaultKey.weatherKey}
    `)//change this fetch. Is that the right key to get the city?
        .then(response => response.json())
        .then(
            parsedForecast => {
                forecast = parsedForecast.data
                console.log(forecast)
                
            }
            
        )
        
}
