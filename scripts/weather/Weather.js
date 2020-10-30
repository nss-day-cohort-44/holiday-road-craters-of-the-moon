export const Weather = (forecastObj) => {
    return `
    <p id="national-parks">
        Forecast: ${forecastObj.}
        WAeather Info: ${forecastObj.weatherInfo}
        <button class="park-detail">Details</button>
        </p>
        `
}
// forecast should bring up the weather. I need to fetch the info and then render it to the dom from here.