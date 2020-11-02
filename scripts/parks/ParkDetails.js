import {useParks} from "./ParkProvider.js"
import { parkSelect } from "./ParkSelect.js"
useParks

const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("parkButtonClicked", (eventObj) => {
    //console.log("hey! it works! now what?", eventObj)
    const arrayOfParks = useParks()
        const foundPark = arrayOfParks.find((parkObj) => {
            return parkObj.id === eventObj.detail.parkId
        })
        //console.log(foundPark)
        detailList(foundPark)
    })
    const detailList = (parkObj) => {
        render(parkObj)
    }
 
 const render = (parkObj) => {
     const contentTarget = document.querySelector(`#national-parks`)
     contentTarget.innerHTML += `
     <div class="park-details">
                 <p>State: ${parkObj.states}</p>
                 <p>Directions: ${parkObj.directionsInfo}</p>
                 <a href="${parkObj.url}">${parkObj.url}</a>
                 
     </div>`
    } 
