
// import { getWeather, useWeather } from "./WeatherProvider.js"
// import { useParks } from "../parks/ParkProvider.js"
// import "../parks/Park.js"

// const eventHub = document.querySelector("#mainContainer")
// const parksContainer = document.querySelector("#national-parks")

// eventHub.addEventListener("parkSelected", changeEvent => {

//     const selectedParkName = changeEvent.detail.selectedPark
//         const parkArray = useParks()
//         const theSelectedPark = parkArray.find(
//           (parksObj) => parksObj.fullName === selectedParkName)
          
//         render(theSelectedPark)
//       })

    

// export const WeatherList = () => {

//     getWeather()
//         .then(() => {
//             const weatherArray = useWeather()

//             let weatherHTMLRepresentations = ""

//             for (const weather of weatherArray) {

//                 weatherHTMLRepresentations += weather
                    
//                     weatherContainer.innerHTML = `
//                     <h3>Parks</h3>
//           <section class="itinerary-preview">
//             ${weatherHTMLRepresentations}
//           </section>
//                     `
//             }
//         })
//     }

  
//     // PUT IN BECAUSE RENDER WAS UNDEFINED



//     const render = () => {

//         const weatherHTMLRepresentions = 

//             parksContainer.innerHTML = `
//             <h3>Park</h3>
//             <section id="national-parks">
//             ${weatherHTMLRepresentions}
//             </section>
            
            
//             `
//         }
