import { getWeather, useWeather } from "../weather/WeatherProvider.js"

const eventHub = document.querySelector("#mainContainer")

export const WeatherSelect = () => {

    getWeather()
        .then(() => {
            const weatherArray = useWeather()
            console.log(weatherArray)
            render(weatherArray)
        })
}
console.log("check this out", WeatherSelect)

// eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target)
// })



//do i need to make an event listener here? Import the information from park provider and then back to weather provider?