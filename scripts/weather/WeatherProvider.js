
import {defaultKey} from "../Settings.js"
import { useParks } from "../parks/ParkProvider.js" // how to i provide a varible of information about the cities?

//const chooseWeather = parkSelect
const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("parkSelected", changeEvent => {

    const selectedParkName = changeEvent.detail.selectedPark
        const parkArray = useParks()

          const parkLocation = parkArray.find(
            (parksObj) => parksObj.fullName === selectedParkName)
            getWeather(parkLocation.latitude, parkLocation.longitude).then(weather =>{
                weather = useWeather().slice(0, 5)
                console.log("weather", weather)
            })
            
        //eventHub.dispatchEvent(parkLocation)
      })

      

let forecast = []
export const useWeather = () => {
    return forecast.slice()
    //in trying to get the lat and long from parkSelect it would only be sending me 1 lat and long. I would not need this correct?
}
console.log("USE WEATHER", useWeather)



export const getWeather = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${defaultKey.weatherKey}
    `)//change this fetch. Is that the right key to get the city?
        .then(response => response.json())
        .then(
            parsedForecast => {
                forecast = parsedForecast.daily
                console.log("FORECAST", forecast)      
                
            })
        }
        console.log("GET WEATHER", getWeather)
