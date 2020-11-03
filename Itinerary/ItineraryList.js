// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM
import { ItineraryAsHTML } from "./ItineraryHTML.js"
import { getItinerary, useItinerary } from "./ItineraryProvider.js";

const itineraryContainer = document.querySelector(".itinerary-save");
const eventHub = document.querySelector("#mainContainer")

 eventHub.addEventListener("ItineraryStateChangedEvent", () => ItineraryList())

export const ItineraryList = () => {
    getItinerary()
    .then(() => {
        const allItineraries = useItinerary()
        render(allItineraries)
    })
}
// console.log("ItineraryList", ItineraryList)

const render = (itineraryArray) => {
    let itineraryHTMLRepresentation = ""
    for (const itinerary of itineraryArray)  {
        itineraryHTMLRepresentation += ItineraryAsHTML(itinerary)
}




// Actually on DOM

itineraryContainer.innerHTML = `
    ${itineraryHTMLRepresentation}
`
}