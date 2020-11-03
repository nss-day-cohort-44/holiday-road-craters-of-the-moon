import { saveItinerary } from "./ItineraryProvider.js"

const contentTarget = document.querySelector(".iterinaryFormContainer")
const eventHub = document.querySelector("#mainContainer")


// const render = (itineraryArray) => {
//     contentTarget.innerHTML = 
//     
// }


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saved-itinerary") {
        
        const park = document.querySelector("#national-parks").value
        const bizarre = document.querySelector("#bizarre-locations").value
        const eatery = document.querySelector("#eateries").value
        
    

    console.log("SAVEBUTTONCLICKED", eventHub)

    const newItinerary = {
        park,
        bizarre,
        eatery

    }

    saveItinerary(newItinerary)
}
}
)


export const ItineraryForm = () => {
    render()
}